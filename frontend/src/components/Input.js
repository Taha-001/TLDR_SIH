import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-input": {
      height: "15px",
      color: "#999999",
    },
  },
}));

const Input = (props) => {
  const classes = useStyles();
  return (
    <FormControl
      fullWidth
      sx={props.sx ? props.sx : ""}
      className={classes.root}
    >
      <OutlinedInput
        placeholder={props.placeholder}
        required
        minRows={props.minRows ? props.minRows : 0}
        maxRows={props.maxRows ? props.maxRows : 0}
        multiline={props.multiline}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </FormControl>
  );
};

export default Input;
