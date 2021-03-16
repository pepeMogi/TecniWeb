import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 30,
    alignSelf: "center",
    alignContent: "center",
    
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 95 95"
      >
        <g id="iccarga" transform="translate(-82 -49)">
          <g
            id="Elipse_44"
            data-name="Elipse 44"
            transform="translate(82 49)"
            fill="none"
            stroke="#fff"
            stroke-width="5"
          >
            <circle cx="47.5" cy="47.5" r="47.5" stroke="none" />
            <circle cx="47.5" cy="47.5" r="45" fill="none" />
          </g>
          <g
            id="Grupo_39"
            data-name="Grupo 39"
            transform="translate(-1394.268 -570.679)"
          >
            <path
              id="Trazado_25"
              data-name="Trazado 25"
              d="M1535.953,643.8l-2.626-1.118v8.992h-5.344v-8.992l-2.627,1.118a12.531,12.531,0,0,0-7.768,11.453,12.136,12.136,0,0,0,1.419,5.683,12.7,12.7,0,0,0,3.045,3.746V687.3a3.966,3.966,0,0,0,4.043,3.876h9.119a3.966,3.966,0,0,0,4.043-3.876V664.678a12.717,12.717,0,0,0,3.046-3.746,12.152,12.152,0,0,0,1.419-5.683A12.533,12.533,0,0,0,1535.953,643.8Zm.312,18.6-.744.538V687.3a.3.3,0,0,1-.307.294H1526.1a.3.3,0,0,1-.307-.294V662.936l-.744-.538a8.712,8.712,0,0,1-.8-13.65v6.505h12.817v-6.505a8.712,8.712,0,0,1-.8,13.65Z"
              transform="translate(2.746)"
              fill="#fff"
            />
            <path
              id="Trazado_26"
              data-name="Trazado 26"
              d="M1511.245,643.511h-6.195a4.692,4.692,0,0,0-4.782,4.584v15.163a4.449,4.449,0,0,0,1.08,2.9,1.835,1.835,0,0,0,1.864,1.687h3.068v23.2h3.736v-23.2h3.068a1.835,1.835,0,0,0,1.865-1.687,4.455,4.455,0,0,0,1.079-2.9V648.1A4.692,4.692,0,0,0,1511.245,643.511Zm-6.195,20.75a1.027,1.027,0,0,1-1.046-1V648.1a1.026,1.026,0,0,1,1.046-1h6.195a1.026,1.026,0,0,1,1.046,1v15.163a1.027,1.027,0,0,1-1.046,1Z"
              transform="translate(0 0.132)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default IconAdmin;
