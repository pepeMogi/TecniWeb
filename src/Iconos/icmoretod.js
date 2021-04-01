import React from "react";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 8,
    marginRight: 20,
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 38 38"
      >
        <g id="icmoretik" transform="translate(-679 -155)">
          <rect
            id="Rectángulo_408"
            data-name="Rectángulo 408"
            width="38"
            height="38"
            rx="5"
            transform="translate(679 155)"
            fill="#ec1b3b"
          />
          <rect
            id="Rectángulo_409"
            data-name="Rectángulo 409"
            width="22"
            height="4"
            transform="translate(690 163)"
            fill="#fff"
          />
          <rect
            id="Rectángulo_410"
            data-name="Rectángulo 410"
            width="22"
            height="4"
            transform="translate(690 173)"
            fill="#fff"
          />
          <rect
            id="Rectángulo_411"
            data-name="Rectángulo 411"
            width="22"
            height="4"
            transform="translate(690 181)"
            fill="#fff"
          />
          <rect
            id="Rectángulo_412"
            data-name="Rectángulo 412"
            width="5"
            height="4"
            transform="translate(682 163)"
            fill="#fff"
          />
          <rect
            id="Rectángulo_413"
            data-name="Rectángulo 413"
            width="5"
            height="4"
            transform="translate(682 173)"
            fill="#fff"
          />
          <rect
            id="Rectángulo_414"
            data-name="Rectángulo 414"
            width="5"
            height="4"
            transform="translate(682 181)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconAdmin;
