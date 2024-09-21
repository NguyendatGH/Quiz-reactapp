import { Button, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";

export default function SubmitArea({ removeAllQuest, handleSubmit }) {
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
          }}
          onClick={() => removeAllQuest()}
        >
          deleted all
          <IconButton aria-label="delete" size="normal">
            <DeleteIcon fontSize="inherit" sx={{ color: "white" }} />
          </IconButton>
        </Button>

        <Button
          variant="outlined"
          sx={{
            fontSize: "14px",
            fontWeight: "550",
            fontFamily: "revert-layer",
            flex: 1,
            justifyContent: "space-evenly",
            boxSizing: "border-box",
          }}
          onClick={() => handleSubmit()}
        >
          <IconButton aria-label="submit" size="normal">
            <SendIcon fontSize="inherit" sx={{ color: "#CECECC" }} />
          </IconButton>
        </Button>
      </Stack>
    </div>
  );
}

SubmitArea.propTypes = {
  removeAllQuest: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
