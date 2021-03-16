import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 2,
    marginRight: 6,
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.772"
        height="25.457"
        viewBox="0 0 20.772 29.457"
      >
        <g id="icnomtec" transform="translate(-917 -204.365)">
          <path
            id="Trazado_12"
            data-name="Trazado 12"
            d="M2308.809,2506.695a7.132,7.132,0,1,1,7.132-7.133A7.141,7.141,0,0,1,2308.809,2506.695Zm0-12.095a4.962,4.962,0,1,0,4.962,4.962A4.968,4.968,0,0,0,2308.809,2494.6Z"
            transform="translate(-1381.422 -2288.065)"
            fill="#ec1b3b"
          />
          <path
            id="Trazado_13"
            data-name="Trazado 13"
            d="M2288.025,2664.9h-20.772v-7.975a6.561,6.561,0,0,1,6.553-6.553h7.666a6.561,6.561,0,0,1,6.553,6.553Zm-18.6-2.17h16.431v-5.8a4.388,4.388,0,0,0-4.383-4.383h-7.666a4.388,4.388,0,0,0-4.383,4.383Z"
            transform="translate(-1350.253 -2431.082)"
            fill="#ec1b3b"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconAdmin;
