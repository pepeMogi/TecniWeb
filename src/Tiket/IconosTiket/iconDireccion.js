import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
  
  },
}));

const IconDireccion = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        id="icdireccion"
        xmlns="http://www.w3.org/2000/svg"
        width="19.908"
        height="24.394"
        viewBox="0 0 19.908 24.394"
      >
        <path
          id="Trazado_70"
          data-name="Trazado 70"
          d="M6177.427,1852.428l-.689-.628a55.626,55.626,0,0,1-4.559-4.775c-3.123-3.7-4.706-6.744-4.706-9.037a9.954,9.954,0,0,1,19.908,0c0,2.294-1.583,5.334-4.707,9.037a55.408,55.408,0,0,1-4.558,4.775Zm0-22.345a7.915,7.915,0,0,0-7.905,7.905c0,1.746,1.5,4.487,4.224,7.716,1.426,1.691,2.862,3.135,3.682,3.928.823-.8,2.267-2.248,3.7-3.945,2.714-3.222,4.21-5.956,4.21-7.7A7.915,7.915,0,0,0,6177.427,1830.083Z"
          transform="translate(-6167.473 -1828.034)"
          fill="#727070"
        />
        <path
          id="Trazado_71"
          data-name="Trazado 71"
          d="M6181.4,1847.42a5.319,5.319,0,1,1,5.318-5.319A5.325,5.325,0,0,1,6181.4,1847.42Zm0-8.588a3.27,3.27,0,1,0,3.27,3.269A3.273,3.273,0,0,0,6181.4,1838.832Z"
          transform="translate(-6171.451 -1832.075)"
          fill="#727070"
        />
      </svg>
    </div>
  );
};
export default IconDireccion;
