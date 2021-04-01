import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: -2},
}));
const IconoAlert = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="23"
        viewBox="0 0 19 23"
      >
        <g id="iconAlert" transform="translate(-709 -553)">
          <g
            id="Trazado_874"
            data-name="Trazado 874"
            transform="translate(709 557)"
            fill="none"
          >
            <path
              d="M9.5,0A9.5,9.5,0,1,1,0,9.5,9.5,9.5,0,0,1,9.5,0Z"
              stroke="none"
            />
            <path
              d="M 9.5 2.5 C 5.640190124511719 2.5 2.5 5.640190124511719 2.5 9.5 C 2.5 13.35980987548828 5.640190124511719 16.5 9.5 16.5 C 13.35980987548828 16.5 16.5 13.35980987548828 16.5 9.5 C 16.5 5.640190124511719 13.35980987548828 2.5 9.5 2.5 M 9.5 0 C 14.74670028686523 0 19 4.253299713134766 19 9.5 C 19 14.74670028686523 14.74670028686523 19 9.5 19 C 4.253299713134766 19 0 14.74670028686523 0 9.5 C 0 4.253299713134766 4.253299713134766 0 9.5 0 Z"
              stroke="none"
              fill="#ec1b3b"
            />
          </g>
          <text
            id="_"
            data-name="¡"
            transform="translate(716 570)"
            fill="#ec1b3b"
            font-size="16"
            font-family="Poppins-SemiBold, Poppins"
            font-weight="600"
          >
            <tspan x="0" y="0">
              ¡
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};
export default IconoAlert;
