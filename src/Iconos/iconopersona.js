import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Iconopersona = () => {
    const classes = useStyles();
    return (
      <div className={classes.root} >
        <svg id="iconopersona" xmlns="http://www.w3.org/2000/svg" width="15.333" height="21.743" viewBox="0 0 15.333 21.743">
            <path id="Trazado_12" data-name="Trazado 12" d="M2306.94,2502.959a5.265,5.265,0,1,1,5.264-5.265A5.27,5.27,0,0,1,2306.94,2502.959Zm0-8.927a3.663,3.663,0,1,0,3.663,3.663A3.667,3.667,0,0,0,2306.94,2494.032Z" transform="translate(-2299.275 -2492.43)" fill="#3d3d3d"/>
            <path id="Trazado_13" data-name="Trazado 13" d="M2282.585,2661.1h-15.333v-5.886a4.843,4.843,0,0,1,4.837-4.837h5.658a4.843,4.843,0,0,1,4.837,4.837Zm-13.731-1.6h12.129v-4.284a3.239,3.239,0,0,0-3.235-3.235h-5.658a3.239,3.239,0,0,0-3.235,3.235Z" transform="translate(-2267.253 -2639.355)" fill="#3d3d3d"/>
        </svg>
      </div>
    );
  };
  export default Iconopersona;