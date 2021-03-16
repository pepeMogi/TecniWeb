import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 2
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28.934"
        height="30.309"
        viewBox="0 0 33.934 35.309"
      >
        <g id="ictecmas" transform="translate(-1024.964 -3579.328)">
          <path
            id="Trazado_86"
            data-name="Trazado 86"
            d="M1095.693,3593.094h-2.856v-2.856h-2.61v2.856h-2.856v2.61h2.856v2.856h2.61V3595.7h2.856Z"
            transform="translate(-36.794 -6.432)"
            fill="#fff"
          />
          <path
            id="Trazado_87"
            data-name="Trazado 87"
            d="M1042.38,3596.537h-1.465a8.892,8.892,0,1,0-6.29,0h-1.465a8.2,8.2,0,0,0-8.2,8.2v9.9h25.611v-9.9A8.2,8.2,0,0,0,1042.38,3596.537Zm-10.265-8.317a5.655,5.655,0,1,1,5.655,5.655A5.661,5.661,0,0,1,1032.115,3588.22Zm15.224,23.18H1028.2v-6.668a4.964,4.964,0,0,1,4.958-4.959h9.22a4.964,4.964,0,0,1,4.958,4.959Z"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconAdmin;
