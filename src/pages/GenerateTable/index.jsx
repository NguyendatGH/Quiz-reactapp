import {
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Card,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { QUESTIONS } from "../../assets/QUESTIONS/QUESTIONS";
import CardQuestion from "../../components/Question_item";
import SubmitArea from "../../components/SubmitArea";
import FireWorkEffect from "../../components/FireWorkEffect";
import { useNavigate } from "react-router-dom";

function GenerateTable() {
  const [easyQuestion, setEasyQuestion] = useState(0);
  const [mediumQuestion, setMediumQuestion] = useState(0);
  const [hardQuestion, setHardQuestion] = useState(0);
  const [totalQuest, setTotalQuest] = useState(0);

  const [validate, setValidate] = useState(false);
  const [pickedQuest, setPickedQuest] = useState([]);
  const [isVisible, setVisible] = useState(true);
  const [userAnswer, setUserAnswer] = useState({});

  const [isGenerated, setIsGenerated] = useState(false);
  const [isSubmitted, setIsSubmited] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const [correctCount, setCorrectCount] = useState(0);

  const setAnswer = (index, ans) => {
    setUserAnswer((prev) => {
      return {
        ...prev,
        [index]: ans,
      };
    });
  };

  const pickRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
    return QUESTIONS[randomIndex];
  };

  const getTotalQuestion = (easy, medium, hard) => {
    if (easy < 0 || medium < 0 || hard < 0) {
      toast.error("Question can't be negative number");
    } else {
      let total = easy + medium + hard;
      setTotalQuest(total);
      const questList = [];

      let countEasy = 0,
        countMedium = 0,
        countHard = 0;
      let i = 0;
      while (i < total) {
        let randomQuest = pickRandomQuestion();
        if (randomQuest.difficulty === "easy" && countEasy < easy) {
          questList.push(randomQuest);
          countEasy++;
          i++;
        }
        if (randomQuest.difficulty === "medium" && countMedium < medium) {
          questList.push(randomQuest);
          countMedium++;
          i++;
        }
        if (randomQuest.difficulty === "hard" && countHard < hard) {
          questList.push(randomQuest);
          countHard++;
          i++;
        }
      }
      setPickedQuest(questList);
    }
  };

  const handleValue = () => {
    let easyQuest, mediumQuest, hardQuest;

    try {
      easyQuest = parseInt(easyQuestion).valueOf();
      mediumQuest = parseInt(mediumQuestion).valueOf();
      hardQuest = parseInt(hardQuestion).valueOf();

      if (isNaN(easyQuest) || isNaN(mediumQuest) || isNaN(hardQuest)) {
        throw new Error("Invalid number!");
      }
      if (easyQuest + mediumQuest + hardQuest > 50) {
        throw new Error(
          "Total quest too big, please enter smaller question number!"
        );
      }
      if (easyQuest + mediumQuest + hardQuest === 0) {
        throw new Error("please enter number of question!");
      }

      setValidate(false);
      toast.success("success");
      getTotalQuestion(easyQuest, mediumQuest, hardQuest);
      setVisible(true);
      setIsGenerated(true);
    } catch (error) {
      setValidate(true);
      toast.error("invalid!");
    }
  };

  const handleSubmit = () => {
    // console.log("here is the handlesubmit");
    let correct = 0;
    pickedQuest.forEach((quest, idx) => {
      if (userAnswer[idx] === undefined) {
        toast.error(`Question ${idx + 1} is unanswered!`);
        return;
      }
      if (userAnswer[idx] === quest.correctAnswer) {
        correct++;
      }
    });
    setCorrectCount(correct);
    setIsSubmited(true);
    setShowFireworks(true);
    setTimeout(() => {
      setShowFireworks(false);
    }, 5000);
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/home");
  };

  return (
    <>
      <button onClick={redirect}>Home</button>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundColor: "#eee",
          padding: 0,
          gap: 10,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <Card
          sx={{
            width: "34%",
            height: "auto",
            padding: "12px",
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            top: 50,
            borderRadius: "20px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              textAlign={"center"}
              fontWeight={600}
              paddingBottom={3}
            >
              Quizz Game
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <TextField
                error={validate}
                id="outlined-basic"
                label="Easy"
                variant="outlined"
                value={easyQuestion}
                type="number"
                onChange={(e) => setEasyQuestion(e.target.value)}
                disabled={isGenerated}
              />
              <TextField
                error={validate}
                id="outlined-basic"
                label="Medium"
                variant="outlined"
                value={mediumQuestion}
                type="number"
                onChange={(e) => setMediumQuestion(e.target.value)}
                disabled={isGenerated}
              />
              <TextField
                error={validate}
                id="outlined-basic"
                label="Hard"
                variant="outlined"
                value={hardQuestion}
                type="number"
                onChange={(e) => setHardQuestion(e.target.value)}
                disabled={isGenerated}
              />
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{ my: -1, marginTop: "40px", width: "auto" }}
              onClick={isGenerated ? null : () => handleValue()}
              disabled={isGenerated}
            >
              GENERATE
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#eee",
          padding: 0,
          gap: "30px",
          marginTop: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSubmitted && (
          <Typography variant="h6" component="div">
            You got {correctCount} / {totalQuest} correct answers!
          </Typography>
        )}
        {pickedQuest.map((Quest, index) =>
          isVisible ? (
            <CardQuestion
              key={index}
              Quest={Quest}
              index={index}
              setAnswer={setAnswer}
              isCorrect={userAnswer[index] === Quest.correctAnswer}
              isSubmitted={isSubmitted}
            />
          ) : null
        )}
        {pickedQuest.length > 0 && isVisible && (
          <>
            <SubmitArea
              removeAllQuest={() => {
                setPickedQuest([]);
                setIsSubmited(false);
                setCorrectCount(0);
                setIsGenerated(false);
                setEasyQuestion(0);
                setMediumQuestion(0);
                setHardQuestion(0);
                setTotalQuest(0);
                setShowFireworks(false);
              }}
              handleSubmit={() => {
                handleSubmit();
                setShowFireworks(true);
              }}
              isSubmitted={isSubmitted}
            />
          </>
        )}
        {showFireworks && <FireWorkEffect />}
      </Box>
    </>
  );
}

export default GenerateTable;
