import { yupResolver } from "@hookform/resolvers/yup";
import { AccountCircle, Email, KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  Container,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const useStyles = makeStyles(() => {
  return {
    container: {
      padding: "2rem !important",
    },
    field: {
      display: "block !important",
      marginTop: "1rem !important",
      marginBottom: "1rem !important",
    },
  };
});

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Fullname is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("email is invalid"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const onSubmit = (data) => {
  //   console.log(JSON.stringify(data, null, 2));
  // };

  const onSubmit = async (e) => {
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <>
      <Container className={classes.container}>
        <form>
          <FormLabel>{" Login Form"}</FormLabel>
          <TextField
            label={"Name"}
            name={"name"}
            placeholder={"Enter your name"}
            variant={"outlined"}
            fullWidth
            required
            className={classes.field}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            {...register("name")}
            error={errors.name ? true : false}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Typography variant="subtitle2" color="error">
            {errors.name?.message}
          </Typography>
          <TextField
            label={"Email"}
            name={"email"}
            placeholder={"Enter your email"}
            variant={"outlined"}
            fullWidth
            required
            className={classes.field}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email></Email>
                </InputAdornment>
              ),
            }}
            {...register("email")}
            error={errors.email ? true : false}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography variant="subtitle2" color="error">
            {errors.email?.message}
          </Typography>

          <Button
            type="submit"
            variant="outlined"
            color="primary"
            endIcon={<KeyboardArrowRight />}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </form>
      </Container>
    </>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
