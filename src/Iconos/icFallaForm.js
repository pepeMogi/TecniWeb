import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const IconFallaForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24.031"
        height="24.031"
        viewBox="0 0 38.031 38.031"
      >
        <path
          id="icFallaForm"
          d="M3662.361,1958.944l-3.078-3.078-15.937,15.938-15.938-15.938-3.078,3.078,15.938,15.938-15.938,15.938,3.078,3.078,15.938-15.938,15.937,15.938,3.078-3.078-15.937-15.938Z"
          transform="translate(-3624.331 -1955.867)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default IconFallaForm;
