import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

const IconoEmail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="43"
        viewBox="0 0 23 23"
      >
        <g id="icEmail" transform="translate(-20 -654)">
          <g
            id="Grupo_940"
            data-name="Grupo 940"
            transform="translate(-48 -81)"
          >
            <circle
              id="Elipse_200"
              data-name="Elipse 200"
              cx="11.5"
              cy="11.5"
              r="11.5"
              transform="translate(68 735)"
              fill="#ec1b3b"
            />
            <path
              id="Trazado_874"
              data-name="Trazado 874"
              d="M3193.146,3162.593h-13.3a1.593,1.593,0,0,0-1.424,1.717v8.095a1.593,1.593,0,0,0,1.424,1.717h13.3a1.593,1.593,0,0,0,1.424-1.717v-8.095A1.593,1.593,0,0,0,3193.146,3162.593Zm-13.3,1.029h13.3a.571.571,0,0,1,.511.383l-7.163,3.79-7.163-3.79A.573.573,0,0,1,3179.844,3163.622Zm13.3,9.47h-13.3a.638.638,0,0,1-.571-.688V3165.1l7.222,3.822,7.222-3.822v7.307A.638.638,0,0,1,3193.146,3173.092Z"
              transform="translate(-3107.329 -2421.993)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default IconoEmail;
