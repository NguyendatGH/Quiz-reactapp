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

  const pickRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
    return QUESTIONS[randomIndex];
  };

  const handleQuestion = (easy, medium, hard) => {
    console.log("total inside handleQuestion : ", easy + medium + hard);
    let total = easy + medium + hard;
    const questList = [];

    let countEasy = 0,
      countMedium = 0,
      countHard = 0;
    let i = 0;
    while (i < total) { // Fix: i < total instead of i != total
      let randomQuest = pickRandomQuestion();
      if (randomQuest.difficulty === "easy" && countEasy < easy) { // Fix: Change <= to <
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
  };

  console.log(pickedQuest);

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
      handleQuestion(easyQuest, mediumQuest, hardQuest); // Fix: Pass mediumQuest and hardQuest correctly
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
    toast.success("DELETED ALL QUESTION"); // Fix: Changed to toast.success
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "60vh",
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
              key={index} // Fix: Added key
              Quest={Quest}
              index={index}
              removeAllQuest={removeAllQuest}
            />
          ) : null
        )}
       {pickedQuest.length > 0 && isVisible && <SubmitArea removeAllQuest={removeAllQuest} />}
      </Box>
    </>
  );
}

export default GenerateTable;
