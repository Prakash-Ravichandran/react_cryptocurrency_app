import { FormLabel, TextField } from "@mui/material";
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
        />
        <TextField
          label={"Email"}
          placeholder={"Enter your email"}
          variant={"outlined"}
          fullWidth
          required
          className={classes.field}
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
        />
      </form>
    </>
  );
};

export default Contact;
