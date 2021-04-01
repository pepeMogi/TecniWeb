import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 3,
 
  },
}));

const IconSolicitante = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        id="icsolicitante"
        xmlns="http://www.w3.org/2000/svg"
        width="16.88"
        height="26.027"
        viewBox="0 0 21.88 31.027"
      >
        <path
          id="Trazado_12"
          data-name="Trazado 12"
          d="M2309.189,2507.455a7.513,7.513,0,1,1,7.512-7.513A7.521,7.521,0,0,1,2309.189,2507.455Zm0-12.739a5.227,5.227,0,1,0,5.227,5.227A5.233,5.233,0,0,0,2309.189,2494.716Z"
          transform="translate(-2298.249 -2492.43)"
          fill="#ec1b3b"
        />
        <path
          id="Trazado_13"
          data-name="Trazado 13"
          d="M2289.133,2665.677h-21.88v-8.4a6.911,6.911,0,0,1,6.9-6.9h8.075a6.911,6.911,0,0,1,6.9,6.9Zm-19.594-2.286h17.308v-6.114a4.622,4.622,0,0,0-4.616-4.617h-8.075a4.622,4.622,0,0,0-4.617,4.617Z"
          transform="translate(-2267.253 -2634.65)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default IconSolicitante;