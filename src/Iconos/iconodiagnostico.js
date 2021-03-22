import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Iconodiagnostico = () => {
    const classes = useStyles();
    return (
      <div className={classes.root} >
        <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5">
            <g id="Grupo_" data-name="Grupo " transform="translate(-5646.885 -398.584)">
                <path id="Trazado_103" data-name="Trazado 103" d="M5656.635,418.084a9.749,9.749,0,1,1,6.895-2.856A9.687,9.687,0,0,1,5656.635,418.084Zm0-18.21a8.46,8.46,0,1,0,8.46,8.46A8.47,8.47,0,0,0,5656.635,399.874Z" fill="#3d3d3d"/>
                <path id="Trazado_104" data-name="Trazado 104" d="M5665.156,422.433a5.578,5.578,0,1,1,5.578-5.578A5.584,5.584,0,0,1,5665.156,422.433Zm0-9.866a4.288,4.288,0,1,0,4.288,4.288A4.293,4.293,0,0,0,5665.156,412.567Z" transform="translate(-8.521 -8.521)" fill="#3d3d3d"/>
            </g>
        </svg>
      </div>
    );
  };
  export default Iconodiagnostico;