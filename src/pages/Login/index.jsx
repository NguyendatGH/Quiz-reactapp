import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ACCOUNTS } from "./../../assets/ACCOUNTS/ACCOUNTS";

export const Validationschema = Yup.object().shape({
  username: Yup.string()
    .required("Username is require!!!")
    .min(5, "Invalid username format!")
    .max(30, "username cannot longer than 30 character"),
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

  const [validate, setValidate] = useState({
    username: false,
    password: false,
  });

  const handleLogin = async () => {
    try {
      await Validationschema.validate(inputValues, { abortEarly: false });

      const data = ACCOUNTS.find(
        (acc) => acc.username === inputValues.username
      );

      if (data !== undefined) {
        if (data.password === inputValues.password) {
          localStorage.setItem("username", inputValues.username);
          localStorage.setItem("password", inputValues.password);
          console.log("store in localStorage");

          navigate("/home");

          console.log("Navigating to /home inside handle login");
          toast.success("Login successfully!");

          setValidate({
            username: false,
            password: false,
          });
        } else {
          setValidate({
            username: false,
            password: true,
          });

          toast.error("Incorrect password!");
        }
      } else {
        setValidate({
          username: true,
          password: false,
        });
        toast.error("invalid username");
      }
    } catch (error) {
      toast.error("Login failed");
      setValidate({
        username: true,
        password: true,
      });
    }
  };

  const handlePressKey = (e) => {
    if (
      e.key === "Enter" &&
      inputValues.username !== "" &&
      inputValues.password !== ""
    ) {
      handleLogin();
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setInputValues({
        username: storedUsername,
        password: storedPassword,
      });
    }
  }, []);

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
            error={validate.username}
            value={inputValues.username}
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
            onKeyDown={handlePressKey}
          />
          <TextField
            fullWidth
            type="password"
            required
            error={validate.password}
            value={inputValues.password}
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
            onKeyDown={handlePressKey}
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
