import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    marginLeft: 4
  },
}));

const IconoAlerta = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        id="icalerttik"
        xmlns="http://www.w3.org/2000/svg"
        width="17.93"
        height="17.93"
        viewBox="0 0 29.93 29.93"
      >
        <path
          id="Trazado_148"
          data-name="Trazado 148"
          d="M5658.463-388.52a14.982,14.982,0,0,1-14.965-14.965,14.982,14.982,0,0,1,14.965-14.965,14.981,14.981,0,0,1,14.964,14.965A14.981,14.981,0,0,1,5658.463-388.52Zm0-26.4a11.445,11.445,0,0,0-11.432,11.431,11.445,11.445,0,0,0,11.432,11.431,11.444,11.444,0,0,0,11.431-11.431A11.444,11.444,0,0,0,5658.463-414.916Z"
          transform="translate(-5643.498 418.45)"
          fill="#ec1b3b"
        />
        <g
          id="Grupo_335"
          data-name="Grupo 335"
          transform="translate(12.684 5.305)"
        >
          <path
            id="Trazado_149"
            data-name="Trazado 149"
            d="M5660.015-407.994a2.252,2.252,0,0,0,1.626-.645,2.154,2.154,0,0,0,.668-1.6,2.154,2.154,0,0,0-.668-1.6,2.254,2.254,0,0,0-1.626-.644,2.175,2.175,0,0,0-1.592.65,2.179,2.179,0,0,0-.649,1.592,2.2,2.2,0,0,0,.632,1.586A2.158,2.158,0,0,0,5660.015-407.994Z"
            transform="translate(-5657.773 412.48)"
            fill="#e6223d"
          />
          <path
            id="Trazado_150"
            data-name="Trazado 150"
            d="M5660.071-405.924a1.61,1.61,0,0,0-1.613,1.551l-.408,10.266a1.6,1.6,0,0,0,.45,1.183,1.6,1.6,0,0,0,1.164.495h.792a1.6,1.6,0,0,0,1.163-.494,1.6,1.6,0,0,0,.45-1.18l-.385-10.267A1.609,1.609,0,0,0,5660.071-405.924Z"
            transform="translate(-5657.803 411.75)"
            fill="#e6223d"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconoAlerta;
