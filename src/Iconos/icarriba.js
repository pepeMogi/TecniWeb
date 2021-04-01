import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const IconDireccionArriba = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.216"
        height="5.398"
        viewBox="0 0 27.216 7.398"
      >
        <path
          id="icarriba"
          d="M458.137-352.152l-.175-.082a.536.536,0,0,0-.712.259l-5.5,11.8-.7,1.5.7,1.5,5.5,11.8a.536.536,0,0,0,.712.259l.175-.082a.536.536,0,0,0,.259-.713l-5.952-12.764L458.4-351.44A.536.536,0,0,0,458.137-352.152Z"
          transform="translate(-325.068 -451.049) rotate(90)"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};
export default IconDireccionArriba;
