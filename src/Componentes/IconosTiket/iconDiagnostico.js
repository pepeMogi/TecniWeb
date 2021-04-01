import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const IconDiagnostico = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.079"
        height="18.249"
        viewBox="0 0 23.079 21.249"
      >
        <path
          id="icDiagTik"
          d="M4474.332,940.8l-8.517-6.427,1.611-2.134,6.363,4.8,12.956-17.49,2.148,1.592Z"
          transform="translate(-4465.815 -919.548)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default IconDiagnostico;
