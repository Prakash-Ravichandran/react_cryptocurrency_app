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
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// google SignIn Imports
import { useEffect } from "react";

import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";

const clientID =
  "728562345073-fkrij7aekj2h2qgqjgsro44cjsovi4oi.apps.googleusercontent.com";

//closing google imports

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

const Login = ({ setToken, googleSetToken, gToken }) => {
  const onSuccess = (res) => {
    console.log("Auth Sucess login:" + JSON.stringify(res));
    console.log("Access Token login:" + JSON.stringify(res.xc.access_token));
    setToken(res.xc.access_token);
  };

  const onFailure = (res) => {
    console.log("Auth Failed:" + res);
  };

  const GoogleSignInButton = ({ googleSetToken }) => {
    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientID,
          scope: "",
        });
      }
      gapi.load("client:auth2", start);
    });

    return (
      <GoogleLogin
        clientId={clientID}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    );
  };

  //google sign out

  // const responseGoogle = (response) => {
  //   console.log("Failed: " + response);
  // };

  // const onLogoutSuccess = (res) => {
  //   console.log("Logout success:" + res);
  //   setToken(null);
  // };

  // const GoogleSignoutButton = () => {
  //   const clientId =
  //     "728562345073-fkrij7aekj2h2qgqjgsro44cjsovi4oi.apps.googleusercontent.com";
  //   useEffect(() => {
  //     function start() {
  //       gapi.client.init({
  //         clientId: clientID,
  //         scope: "",
  //       });
  //     }
  //     gapi.load("client:auth2", start);
  //   });
  //   return (
  //     <GoogleLogout
  //       clientId={clientId}
  //       buttonText="Logout of"
  //       onLogoutSuccess={onLogoutSuccess}
  //       onSuccess={onLogoutSuccess}
  //       onFailure={responseGoogle}
  //       cookiePolicy={"single_host_origin"}
  //     />
  //   );
  // };

  //closing google component
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Fullname is required")
      .min(5, "Username must be at least 5 characters")
      .max(20, "Username must not exceed 20 characters"),
    password: Yup.string().required("password is required"),
    confirmpassword: Yup.string().required("conifrm password is required"),
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

  const onSubmit = async (e) => {
    const token = await loginUser({
      username,
      password,
      confirmpassword,
    });
    setToken(token);

    if (
      username == token.username &&
      password == token.password &&
      confirmpassword == token.confirmpassword
    ) {
      setToken(token);
    } else {
      console.log("Invalid Credentials");
      alert(`Entered invalid credentials, please use below credentials to login
       name : admin,
       password: admin,
       confirmpassword: admin.
      `);
      setToken(null);
    }
    setToken(token);

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
          <TextField
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
            error={errors.confirmpassword ? true : false}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Typography variant="subtitle2" color="error">
            {errors.confirmpassword?.message}
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
          <p>Login With Google</p>
          <GoogleSignInButton />
        </form>
      </Container>
    </>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
