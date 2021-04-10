import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
marginTop: 5

  },
}));

const IconoTelefono = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="51"
        viewBox="0 0 31 31"
      >
        <g id="icTelefonos" transform="translate(-0.11 -0.336)">
          <circle
            id="Elipse_199"
            data-name="Elipse 199"
            cx="15.5"
            cy="15.5"
            r="15.5"
            transform="translate(0.11 0.336)"
            fill="#ec1b3b"
          />
          <circle
            id="Elipse_198"
            data-name="Elipse 198"
            cx="12.5"
            cy="12.5"
            r="12.5"
            transform="translate(3.11 3.336)"
            fill="#fff"
          />
          <path
            id="Trazado_873"
            data-name="Trazado 873"
            d="M12.581,15.437a4.371,4.371,0,0,1-1.7-.226A16.553,16.553,0,0,1,2.006,8.69,9.265,9.265,0,0,1,.1,4.833,4.477,4.477,0,0,1,1.579.449,2.551,2.551,0,0,1,3.765.122a1.823,1.823,0,0,1,.365.44C4.6,1.73,5.091,2.811,5.562,3.916a.866.866,0,0,1-.069.691A6.412,6.412,0,0,1,4.488,5.964a.619.619,0,0,0-.1.9,11.086,11.086,0,0,0,5.6,4.8.641.641,0,0,0,.843-.189c.421-.49.835-1.018,1.225-1.532a.691.691,0,0,1,.911-.226c.8.364,1.6.741,2.362,1.092a3.526,3.526,0,0,0,.552.253c.811.414.811.464.717,1.331-.107,1.721-1.42,2.588-2.922,3A2.956,2.956,0,0,1,12.581,15.437Z"
            transform="matrix(0.966, 0.259, -0.259, 0.966, 9.321, 5.851)"
            fill="#ec1b3b"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconoTelefono;
