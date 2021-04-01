import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 4,
    marginTop: 5,
  },
}));

const IconoEmail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.725"
        height="21.674"
        viewBox="0 0 29.725 21.674"
      >
        <path
          id="icemail"
          d="M3612.648,2984.788H3596.4a1.74,1.74,0,0,0-1.738,1.739v8.2a1.741,1.741,0,0,0,1.738,1.739h16.248a1.741,1.741,0,0,0,1.739-1.739v-8.2A1.741,1.741,0,0,0,3612.648,2984.788Zm-16.248,1.042h16.248a.7.7,0,0,1,.624.388l-8.748,3.838-8.748-3.838A.7.7,0,0,1,3596.4,2985.831Zm16.248,9.589H3596.4a.7.7,0,0,1-.7-.7v-7.4l8.82,3.87,8.82-3.87v7.4A.7.7,0,0,1,3612.648,2995.42Z"
          transform="translate(-3594.663 -2984.788)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default IconoEmail;
