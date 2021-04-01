import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const IconCiudad = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        id="icciudad"
        xmlns="http://www.w3.org/2000/svg"
        width="23.585"
        height="27.646"
        viewBox="0 0 23.585 27.646"
      >
        <path
          id="Trazado_77"
          data-name="Trazado 77"
          d="M7025.777,1012.581v10.241h-8.11v6.739h-5.833v10.666h23.585v-27.646Zm-8.11,26.114h-4.3v-7.6h4.3Zm8.11,0H7019.2v-14.34h6.578Zm8.11,0h-6.578v-24.582h6.578Z"
          transform="translate(-7011.834 -1012.581)"
          fill="#727070"
        />
        <rect
          id="Rectángulo_231"
          data-name="Rectángulo 231"
          width="1.698"
          height="1.698"
          transform="translate(8.156 12.525)"
          fill="#727070"
        />
      </svg>
    </div>
  );
};
export default IconCiudad;

