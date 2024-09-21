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

function GenerateTable() {
  const [easyQuestion, setEasyQuestion] = useState(0);
  const [mediumQuestion, setMediumQuestion] = useState(0);
  const [hardQuestion, setHardQuestion] = useState(0);

  const [validate, setValidate] = useState(false);
  const [pickedQuest, setPickedQuest] = useState([]);
  const [isVisible, setVisible] = useState(true);
  const [userAnswer, setUserAnswer] = useState({});

  const [correctCount, setCorrectCount] = useState(0);

  const setAnswer = (index, ans) => {
    setUserAnswer((prev) => {
      console.log("Setting answer for index", index, "with answer", ans);
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

  // console.log(pickedQuest);

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
    } catch (error) {
      setValidate(true);
      toast.error("invalid!");
    }
  };

  const removeAllQuest = () => {
    setVisible(false);
    setEasyQuestion(0);
    setMediumQuestion(0);
    setHardQuestion(0);
    toast.success("DELETED ALL QUESTION");
  };

  const handleSubmit = () => {
    console.log("here is the handlesubmit")
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
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "40vh",
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
            width: "600px",
            height: "230px",
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
              variant="h4"
              textAlign={"center"}
              marginBottom={2}
              fontWeight={600}
            >
              Add Your Question
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
              />
              <TextField
                error={validate}
                id="outlined-basic"
                label="Medium"
                variant="outlined"
                value={mediumQuestion}
                type="number"
                onChange={(e) => setMediumQuestion(e.target.value)}
              />
              <TextField
                error={validate}
                id="outlined-basic"
                label="Hard"
                variant="outlined"
                value={hardQuestion}
                type="number"
                onChange={(e) => setHardQuestion(e.target.value)}
              />
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{ my: -1, marginTop: "40px", width: "auto" }}
              onClick={() => handleValue()}
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
        {pickedQuest.map((Quest, index) =>
          isVisible ? (
            <CardQuestion
              key={index}
              Quest={Quest}
              index={index}
              setAnswer={setAnswer}
              isCorrect={userAnswer[index] === Quest.correctAnswer}
            />
          ) : null
        )}
        {pickedQuest.length > 0 && isVisible && (
          <>
            <SubmitArea
              removeAllQuest={removeAllQuest}
              handleSubmit={handleSubmit}
            />
            {correctCount > 0 && (
              <Typography variant="h6" component="div">
                You got {correctCount} correct answers!
              </Typography>
            )}
          </>
        )}
      </Box>
    </>
  );
}

export default GenerateTable;
