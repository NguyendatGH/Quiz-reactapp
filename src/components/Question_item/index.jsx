import {
  Box,
  Card,
  CardContent,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { getColor } from "../../assets/ChangeColor/changeColor";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function CardQuestion({ Quest, index, setAnswer }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const shuffleAnswers = (answers) => {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  };

  useEffect(() => {
    const combinedAnswers = [...Quest.incorrectAnswers, Quest.correctAnswer];
    setShuffledAnswers(shuffleAnswers(combinedAnswers));
    console.log("Shuffled answers:", shuffledAnswers); // Debug shuffled answers
  }, [Quest]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
        top: "20px",
        left: "0%",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <Card
        key={index}
        sx={{
          margin: 1,
          boxShadow: "0px 2px #DAD9D8",
          display: "flex",
          flexDirection: "row",
          boxSizing: "border-box",
          width: "70%",
          height: "30%",
        }}
      >
        <Chip
          sx={{
            width: 8,
            height: "auto",
          }}
          color={getColor(Quest.difficulty)}
        ></Chip>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              marginBottom={0}
            >
              {index + 1}. {Quest.question.text}
            </Typography>
            <FormControl
              sx={{
                paddingTop: "30px",
              }}
            >
              <FormLabel id="demo-column-radio-buttons-group-label">
                Your answer
              </FormLabel>
              <RadioGroup
                column
                aria-labelledby="demo-column-radio-buttons-group-label"
                name="column-radio-buttons-group"
                onChange={(e) => {
                  setAnswer(index, e.target.value); 
                }}
              >
                {shuffledAnswers.map((ans, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={ans}
                    control={<Radio />}
                    label={ans}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

CardQuestion.propTypes = {
  Quest: PropTypes.shape({
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    correctAnswer: PropTypes.string.isRequired,
    incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setAnswer: PropTypes.func.isRequired,
};
