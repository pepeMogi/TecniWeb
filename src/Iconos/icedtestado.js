import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 1,
    marginLeft: 1,
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.421"
        height="15.335"
        viewBox="0 0 16.421 16.335"
      >
        <g id="icedtestado" transform="translate(-82.235 137.426)">
          <path
            id="Trazado_109"
            data-name="Trazado 109"
            d="M98.57-121.092H82.235v-16.335H90.4v1.679H83.914v12.978H96.891v-6.489H98.57Z"
            fill="#fff"
          />
          <path
            id="Trazado_110"
            data-name="Trazado 110"
            d="M115.7-125.166l-7.942,7.942-.259,2.59,2.59-.259,7.942-7.942-2.331-2.331Z"
            transform="translate(-21.025 -10.202)"
            fill="#fff"
          />
          <path
            id="Trazado_111"
            data-name="Trazado 111"
            d="M164.523-134.986a1.59,1.59,0,0,0-1.128.467l2.331,2.331a1.6,1.6,0,0,0,0-2.255l-.076-.076a1.589,1.589,0,0,0-1.127-.467Z"
            transform="translate(-67.536 -2.031)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconAdmin;
