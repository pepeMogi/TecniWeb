import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Iconofalla = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.825"
        height="15.825"
        viewBox="0 0 15.825 15.825"
      >
        <path
          id="falla"
          d="M3640.155,1957.147l-1.281-1.281-6.631,6.632-6.632-6.632-1.281,1.281,6.632,6.632-6.632,6.632,1.281,1.281,6.632-6.632,6.631,6.632,1.281-1.281-6.632-6.632Z"
          transform="translate(-3624.331 -1955.867)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default Iconofalla;
