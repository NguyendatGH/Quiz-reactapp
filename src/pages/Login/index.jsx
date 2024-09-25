import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ACCOUNTS } from "./../../assets/ACCOUNTS/ACCOUNTS";

export const Validationschema = Yup.object().shape({
  username: Yup.string()
    .required("Username is require!!!")
    .min(8, "Invalid username format!"),
  password: Yup.string()
    .required("Password is required!!!")
    .min(5, "invalid password!")
    .max(16, "invalid password!"),
});

function Login() {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [vaLidate, setValidate] = useState({
    name_content: false,
    password_content: false,
  });

  const handleLogin = async () => {
    try {
      await Validationschema.validate(inputValues, { abortEarly: false });

      const data = ACCOUNTS.find(
        (acc) => acc.username === inputValues.username
      );

      if (data != undefined) {
        if (data.password === inputValues.password) {
          toast.success("Login successfully!");
          console.log("username: " + data.username);
          setValidate({
            username: true,
            password: true,
          });
          navigate("/home");
        } else {
          toast.error("Incorrect password!");
          setValidate({
            username: false,
            password: true,
          });
        }
      } else {
        setValidate({
          username: true,
          password: false,
        });
        toast.error("invalid username");
      }
    } catch (error) {
      toast(error);
      let newValidate = {
        username: false,
        password: false,
      };
      setValidate(newValidate);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: 10,
      }}
    >
      <Card sx={{ minWidth: 600 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" textAlign={"center"} marginBottom={2}>
            Login
          </Typography>
          <TextField
            fullWidth
            required
            error={vaLidate.username}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ flex: 3 }}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                username: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            type="password"
            required
            error={vaLidate.password}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ flex: 3, marginTop: 2 }}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                password: e.target.value,
              })
            }
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ my: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Link sx={{ color: "#ffcdd2" }} to="/register">
            {" "}
            create new account
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
