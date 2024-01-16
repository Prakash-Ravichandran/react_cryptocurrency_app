import { yupResolver } from "@hookform/resolvers/yup";
import {
  AccountCircle,
  KeyboardArrowRight,
  Password,
} from "@mui/icons-material";
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
import React, { useRef, useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
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
  const signIn = useSignIn();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Fullname is required")
      .min(5, "Username must be at least 5 characters")
      .max(20, "Username must not exceed 20 characters"),
    password: Yup.string().required("password is required"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const name = useRef({});
  name.current = watch("name", "");
  console.log("name=" + name.current);
  const password2 = useRef({});
  password2.current = watch("password", "");
  console.log("password=" + password2.current);

  // const onSubmit = (data) => {
  //   console.log(JSON.stringify(data, null, 2));
  // };

  const onSubmit = async (e) => {
    const token = await loginUser({
      username,
      password,
    });

    if (username == token.username && password == token.password) {
      setToken(token);
    } else {
      setToken(null);
      console.log("Invalid Credentials");
      alert(`Entered invalid credentials, please use below credentials to login
       name : admin,
       password: admin,
      `);
    }

    console.log("username =" + username);
    console.log("Token =" + JSON.stringify(token));
  };

  return (
    <>
      <Container className={classes.container}>
        <form>
          <FormLabel>{" Login Form"}</FormLabel>
          <TextField
            label={"UserName"}
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
            label={"Password"}
            name={"password"}
            placeholder={"Enter your password"}
            variant={"outlined"}
            fullWidth
            required
            className={classes.field}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Password></Password>
                </InputAdornment>
              ),
            }}
            // {...register("password")}
            {...register("password", {
              validate: (value) =>
                value === name.current || "The passwords do not match",
            })}
            error={errors.password ? true : false}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography variant="subtitle2" color="error">
            {errors.password?.message}
          </Typography>
          {/* <TextField
            label={"Confirm-Password"}
            name={"confirmpassword"}
            placeholder={"Confrim Password"}
            variant={"outlined"}
            fullWidth
            required
            className={classes.field}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Password></Password>
                </InputAdornment>
              ),
            }}
            // {...register("password")}
            {...register("confirmpassword", {
              validate: (value) =>
                value === password2.current || "The passwords do not match",
            })}
            error={errors.password ? true : false}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography variant="subtitle2" color="error">
            {errors.password?.message}
          </Typography> */}

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
