import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const IconoFalla = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.931"
        height="18.931"
        viewBox="0 0 18.931 18.931"
      >
        <path
          id="icFalla"
          d="M3643.262,1957.4l-1.532-1.532-7.933,7.933-7.934-7.933-1.532,1.532,7.934,7.934-7.934,7.934,1.532,1.532,7.934-7.934,7.933,7.934,1.532-1.532-7.934-7.934Z"
          transform="translate(-3624.331 -1955.867)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default IconoFalla;
