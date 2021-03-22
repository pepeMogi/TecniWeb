import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Iconotecnico = () => {
    const classes = useStyles();
    return (
      // <div className={classes.root} >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
         <circle id="rellamada" cx="9" cy="9" r="9" fill="#ff0034"/>
        </svg>
    

      // </div>
    );
  };
  export default Iconotecnico;