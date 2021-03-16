import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4.5,
    marginRight: -30
  },
}));

const IconHistorial = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24.769"
        height="20.665"
        viewBox="0 0 34.769 30.665"
      >
        <g id="iccalendar" transform="translate(0)">
          <rect
            id="Rectángulo_290"
            data-name="Rectángulo 290"
            width="34.768"
            height="1.277"
            transform="translate(0.001 8.62)"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_99"
            data-name="Trazado 99"
            d="M57.254-368.82H55.836a2.172,2.172,0,0,0-1.525.631,2.172,2.172,0,0,0-.632,1.524v2.506H88.447v-2.506a2.171,2.171,0,0,0-.632-1.524,2.17,2.17,0,0,0-1.524-.631H82.632V-366a.954.954,0,0,1-.954.954h-2.01a.953.953,0,0,1-.953-.954v-2.823h-15.3V-366a.954.954,0,0,1-.954.954H60.448a.953.953,0,0,1-.953-.954v-2.823Z"
            transform="translate(-53.678 371.303)"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_100"
            data-name="Trazado 100"
            d="M87.236-375.825h2.011v-5.306H87.236v5.306Z"
            transform="translate(-80.466 381.131)"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_101"
            data-name="Trazado 101"
            d="M182.524-375.825h2.01v-5.306h-2.01v5.306Z"
            transform="translate(-156.535 381.131)"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_102"
            data-name="Trazado 102"
            d="M86.793-326.553v16.184a.528.528,0,0,1-.148.357.526.526,0,0,1-.359.148H55.831a.516.516,0,0,1-.357-.148.524.524,0,0,1-.15-.357v-16.184H86.793m1.65-1.65H53.674v17.834a2.17,2.17,0,0,0,.633,1.524,2.168,2.168,0,0,0,1.524.631H86.286a2.173,2.173,0,0,0,1.526-.631,2.177,2.177,0,0,0,.631-1.524V-328.2Z"
            transform="translate(-53.674 338.879)"
            fill="#ec1b3b"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconHistorial;
