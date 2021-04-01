import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
  },
}));

const IconCelular = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        id="iccelular"
        xmlns="http://www.w3.org/2000/svg"
        width="14.307"
        height="24.444"
        viewBox="0 0 14.307 24.444"
      >
        <path
          id="Trazado_56"
          data-name="Trazado 56"
          d="M3926.077,3966.989h-8.617a2.848,2.848,0,0,1-2.845-2.845V3945.39a2.848,2.848,0,0,1,2.845-2.845h8.617a2.848,2.848,0,0,1,2.845,2.845v18.753A2.848,2.848,0,0,1,3926.077,3966.989Zm-8.617-22.663a1.065,1.065,0,0,0-1.064,1.064v18.753a1.065,1.065,0,0,0,1.064,1.064h8.617a1.065,1.065,0,0,0,1.064-1.064V3945.39a1.065,1.065,0,0,0-1.064-1.064Z"
          transform="translate(-3914.615 -3942.545)"
          fill="#727070"
        />
        <ellipse
          id="Elipse_50"
          data-name="Elipse 50"
          cx="1.085"
          cy="1.085"
          rx="1.085"
          ry="1.085"
          transform="translate(6.069 19.521)"
          fill="#727070"
        />
      </svg>
    </div>
  );
};
export default IconCelular;
