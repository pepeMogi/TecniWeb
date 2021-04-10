import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -8,
    marginRight: 6
  },
}));

const IconoCirculo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="6"
        viewBox="0 0 21 21"
      >
        <circle id="iccirculo" cx="10.5" cy="10.5" r="10.5" fill="#ff0034" />
      </svg>
    </div>
  );
};
export default IconoCirculo;
