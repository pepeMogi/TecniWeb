import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
  },
}));

const IconoDetalle = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        id="icDetalle"
        xmlns="http://www.w3.org/2000/svg"
        width="25.08"
        height="24.192"
        viewBox="0 0 35.08 34.192"
      >
        <path
          id="Trazado_832"
          data-name="Trazado 832"
          d="M-6360.155,771.86a11.274,11.274,0,0,1-8.025-3.324,11.275,11.275,0,0,1-3.324-8.025,11.275,11.275,0,0,1,3.324-8.025,11.274,11.274,0,0,1,8.025-3.324,11.275,11.275,0,0,1,8.025,3.324,11.275,11.275,0,0,1,3.324,8.025,11.275,11.275,0,0,1-3.324,8.025A11.275,11.275,0,0,1-6360.155,771.86Zm0-20.5a9.16,9.16,0,0,0-9.149,9.149,9.16,9.16,0,0,0,9.149,9.149,9.159,9.159,0,0,0,9.149-9.149A9.159,9.159,0,0,0-6360.155,751.362Z"
          transform="translate(6371.504 -749.162)"
          fill="#fff"
        />
        <path
          id="Trazado_833"
          data-name="Trazado 833"
          d="M-6319.282,797.563h-2.979v-2.979h-2.2v2.979h-2.979v2.2h2.979v2.979h2.2v-2.979h2.979Z"
          transform="translate(6334.71 -787.09)"
          fill="#fff"
        />
        <rect
          id="Rectángulo_377"
          data-name="Rectángulo 377"
          width="2.383"
          height="14.779"
          transform="matrix(0.707, -0.707, 0.707, 0.707, 20.498, 21.295)"
          fill="#fff"
        />
        <rect
          id="Rectángulo_378"
          data-name="Rectángulo 378"
          width="2.383"
          height="2.125"
          transform="translate(35.08 32.506) rotate(135)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};
export default IconoDetalle;
