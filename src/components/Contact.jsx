import { yupResolver } from "@hookform/resolvers/yup";
import {
  AccountCircle,
  Description,
  Email,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import GoogleSignoutButton from "./GoogleSignoutBtn";

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

const Contact = ({ setToken, user }) => {
  const classes = useStyles();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Fullname is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("email is invalid"),
    description: Yup.string()
      .required("Description is required")
      .min(50, "Description must be at least 50 characters")
      .max(100, "Username must not exceed 100 characters"),
    rating: Yup.string().required(
      "Please select the rating for a cryptocurrency"
    ),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <Container className={classes.container}>
        <form>
          <FormLabel>
            {" "}
            Submit your feedback about your favourite bitcoin !{" "}
          </FormLabel>
          <TextField
            label={"Name"}
            name={"name"}
            placeholder={"Enter your name"}
            variant={"outlined"}
            fullWidth
            required
            className={classes.field}
            value={user.profileObj.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            {...register("name")}
            error={errors.name ? true : false}
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
            value={user.profileObj.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email></Email>
                </InputAdornment>
              ),
            }}
            {...register("email")}
            error={errors.email ? true : false}
          />
          <Typography variant="subtitle2" color="error">
            {errors.email?.message}
          </Typography>
          <TextField
            placeholder="Describe the best about your favourite bitcoin !"
            label="Likes"
            name="Favourite Bitcoin"
            variant="outlined"
            fullWidth
            required
            className={classes.field}
            multiline
            rows={3}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Description />
                </InputAdornment>
              ),
            }}
            {...register("description")}
            error={errors.description ? true : false}
          />
          <Typography variant="subtitle2" color="error">
            {errors.description ? errors.description.message : null}
          </Typography>
          <FormControl className={classes.field}>
            <FormLabel>Your rating for the cryptocurrencies :</FormLabel>
            <RadioGroup
              name="rating"
              value={"5"}
              {...register("rating")}
              error={errors.rating ? true : false}
            >
              <FormControlLabel value={"5"} control={<Radio />} label="5" />
              <FormControlLabel value={"4"} control={<Radio />} label="4" />
              <FormControlLabel value={"3"} control={<Radio />} label="3" />
              <FormControlLabel value={"2"} control={<Radio />} label="2" />
              <FormControlLabel value={"1"} control={<Radio />} label="1" />
            </RadioGroup>

            <Typography variant="subtitle2" color="error">
              {errors.rating?.message}
            </Typography>
          </FormControl>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            endIcon={<KeyboardArrowRight />}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
          <GoogleSignoutButton setToken={setToken} />
        </form>
      </Container>
    </>
  );
};

export default Contact;
