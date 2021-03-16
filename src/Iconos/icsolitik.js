import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4, 
    marginRight: 8,
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.672"
        height="23.743"
        viewBox="0 0 18.672 25.743"
      >
        <path
          id="icsolitik"
          d="M1261.149,2996.746h-1.068a6.483,6.483,0,1,0-4.586,0h-1.068a5.982,5.982,0,0,0-5.975,5.975v7.221h18.672v-7.221A5.982,5.982,0,0,0,1261.149,2996.746Zm-7.484-6.063a4.123,4.123,0,1,1,4.123,4.123A4.128,4.128,0,0,1,1253.665,2990.682Zm11.1,16.9h-13.952v-4.862a3.618,3.618,0,0,1,3.615-3.615h6.722a3.619,3.619,0,0,1,3.615,3.615Z"
          transform="translate(-1248.452 -2984.199)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default IconAdmin;
