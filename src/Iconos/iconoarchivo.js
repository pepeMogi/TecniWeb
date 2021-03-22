import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Iconocirculo = () => {
    const classes = useStyles();
    return (
      <div className={classes.root} >
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24">
          <g id="archivo" transform="translate(-467 -603)">
            <g id="Rectángulo_756" data-name="Rectángulo 756" transform="translate(467 603)" fill="none" stroke="#3d3d3d" stroke-width="1.5">
              <rect width="17" height="24" rx="2" stroke="none"/>
              <rect x="0.75" y="0.75" width="15.5" height="22.5" rx="1.25" fill="none"/>
            </g>
            <line id="Línea_181" data-name="Línea 181" x2="12" transform="translate(469.5 607.5)" fill="none" stroke="#3d3d3d" stroke-width="1"/>
            <line id="Línea_182" data-name="Línea 182" x2="12" transform="translate(469.5 610.5)" fill="none" stroke="#3d3d3d" stroke-width="1"/>
            <line id="Línea_183" data-name="Línea 183" x2="12" transform="translate(469.5 613.5)" fill="none" stroke="#3d3d3d" stroke-width="1"/>
            <line id="Línea_184" data-name="Línea 184" x2="12" transform="translate(469.5 616.5)" fill="none" stroke="#3d3d3d" stroke-width="1"/>
            <line id="Línea_185" data-name="Línea 185" x2="12" transform="translate(469.5 619.5)" fill="none" stroke="#3d3d3d" stroke-width="1"/>
            <line id="Línea_186" data-name="Línea 186" x2="12" transform="translate(469.5 622.5)" fill="none" stroke="#3d3d3d" stroke-width="1"/>
          </g>
        </svg>

      </div>
    );
  };
  export default Iconocirculo;