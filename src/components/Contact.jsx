import {
  AccountCircle,
  Description,
  Email,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <form>
        <FormLabel>
          {" "}
          Submit your feedback about your favourite bitcoin !{" "}
        </FormLabel>
        <TextField
          label={"Name"}
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
        />
        <TextField
          label={"Email"}
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
        />
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
        />
        <FormControl className={classes.field}>
          <FormLabel>Your rating for the cryptocurrencies</FormLabel>
          <RadioGroup name="rating" value={"5"}>
            <FormControlLabel value={"5"} control={<Radio />} label="5" />
            <FormControlLabel value={"4"} control={<Radio />} label="4" />
            <FormControlLabel value={"3"} control={<Radio />} label="3" />
            <FormControlLabel value={"2"} control={<Radio />} label="2" />
            <FormControlLabel value={"1"} control={<Radio />} label="1" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Contact;
