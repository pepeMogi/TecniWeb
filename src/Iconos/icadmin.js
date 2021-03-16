import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 8,
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60.419"
        height="70"
        viewBox="0 0 89.419 99"
      >
        <g id="admin" transform="translate(-549.392 -2250.748)">
          <path
            id="Trazado_4"
            data-name="Trazado 4"
            d="M648.322,2298.69a23.971,23.971,0,1,0-23.971-23.971A24,24,0,0,0,648.322,2298.69Zm0-40.648a16.677,16.677,0,1,1-16.677,16.677A16.7,16.7,0,0,1,648.322,2258.042Z"
            transform="translate(-64.024)"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_5"
            data-name="Trazado 5"
            d="M597.18,2594.688H571.416a22.049,22.049,0,0,0-22.024,22.024v26.8H619.2v-26.8A22.049,22.049,0,0,0,597.18,2594.688Zm14.73,41.532H556.686v-19.507a14.747,14.747,0,0,1,14.73-14.73H597.18a14.747,14.747,0,0,1,14.73,14.73Z"
            transform="translate(0 -293.765)"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_6"
            data-name="Trazado 6"
            d="M1026.2,2313.332h-7.98v-7.98h-7.294v7.98h-7.98v7.294h7.98v7.98h7.294v-7.98h7.98Z"
            transform="translate(-387.388 -46.638)"
            fill="#ec1b3b"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconAdmin;
