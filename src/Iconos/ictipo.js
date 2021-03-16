import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4,
    marginRight: -12
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.527"
        height="25.527"
        viewBox="0 0 30.527 30.527"
      >
        <g id="ictipo" transform="translate(-5646.885 -398.584)">
          <path
            id="Trazado_103"
            data-name="Trazado 103"
            d="M5662.148,429.111a15.263,15.263,0,1,1,10.793-4.47A15.163,15.163,0,0,1,5662.148,429.111Zm0-28.507a13.244,13.244,0,1,0,13.244,13.244A13.259,13.259,0,0,0,5662.148,400.6Z"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_104"
            data-name="Trazado 104"
            d="M5668.311,428.742a8.732,8.732,0,1,1,8.732-8.732A8.742,8.742,0,0,1,5668.311,428.742Zm0-15.445a6.713,6.713,0,1,0,6.713,6.713A6.721,6.721,0,0,0,5668.311,413.3Z"
            transform="translate(-6.162 -6.162)"
            fill="#ec1b3b"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconAdmin;
