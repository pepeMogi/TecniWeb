import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
    marginLeft: 4
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.091"
        height="21.368"
        viewBox="0 0 40.091 35.368"
      >
        <path
          id="icsendch"
          d="M-401.879-612.128l-40.091-17.684v15.642l25.318,2.042-25.318,2.042v15.642Z"
          transform="translate(441.97 629.812)"
          fill="#c8c8c8"
        />
      </svg>
    </div>
  );
};
export default IconAdmin;
