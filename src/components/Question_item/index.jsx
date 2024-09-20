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


export default function CardQuestion({ Quest, index }) {
  return (
    <>
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
                >
                  <FormControlLabel
                    value={Quest.incorrectAnswers[0]}
                    control={<Radio />}
                    label={Quest.incorrectAnswers[0]}
                  />
                  <FormControlLabel
                    value={Quest.correctAnswer}
                    control={<Radio />}
                    label={Quest.correctAnswer}
                  />
                  <FormControlLabel
                    value={Quest.incorrectAnswers[1]}
                    control={<Radio />}
                    label={Quest.incorrectAnswers[1]}
                  />
                  <FormControlLabel
                    value={Quest.incorrectAnswers[2]}
                    control={<Radio />}
                    label={Quest.incorrectAnswers[2]}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
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

};
