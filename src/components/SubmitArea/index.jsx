import { Button, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";

export default function SubmitArea({ removeAllQuest, handleSubmit , isSubmitted}) {
  return (
    <div>
      <Stack
        spacing={6}
        direction="row"
        position={"relative"}
        marginTop={"50px"}
        paddingBottom={"30px"}
        width={"400px"}
        boxSizing={"border-box"}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: "14px",
            fontWeight: "550",
            fontFamily: "revert-layer",
            flex: 1,
            justifyContent: "space-evenly",
            boxSizing: "border-box",
            backgroundColor: "#f44336",
            "&:hover": {
              backgroundColor: "#ef5350",
            },
            color: "white",
          }}
          onClick={() => removeAllQuest()}
        >
          RETRY
          <IconButton aria-label="delete" size="normal">
            <DeleteIcon fontSize="inherit" sx={{ color: "white" }} />
          </IconButton>
        </Button>

        <Button
          variant="contained"
          sx={{
            fontSize: "14px",
            fontWeight: "550",
            fontFamily: "revert-layer",
            flex: 1,
            justifyContent: "space-evenly",
            boxSizing: "border-box",
            backgroundColor: "#2e7d32",
            color: "white",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          }}
          onClick={() => handleSubmit()}
          disabled={isSubmitted}
        >
          SUBMIT
          <IconButton aria-label="submit" size="normal">
            <SendIcon sx={{ color: "#CECECC" }} />
          </IconButton>
        </Button>
      </Stack>
    </div>
  );
}

SubmitArea.propTypes = {
  removeAllQuest: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
