import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Iconomedia = () => {
    const classes = useStyles();
    return (
      // <div className={classes.root} >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <circle id="media" cx="9" cy="9" r="9" fill="#f6d119"/>
        </svg>

      // </div>
    );
  };
  export default Iconomedia;