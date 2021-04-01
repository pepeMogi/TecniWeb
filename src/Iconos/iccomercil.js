import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {

    marginLeft: 6,
    marginTop: 10
  },
}));

const IconComercial = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.547"
        height="22.521"
        viewBox="0 0 22.547 29.521"
      >
        <g id="comercial" transform="translate(3688.228 798.166)">
          <path
            id="Trazado_45"
            data-name="Trazado 45"
            d="M-3668.731-768.645h-16.447a3.187,3.187,0,0,1-3.05-3.3V-789.4a3.469,3.469,0,0,1,.9-2.343l.088-.094,8.781-5.722a2.17,2.17,0,0,1,1.506-.61,2.169,2.169,0,0,1,1.506.61l8.781,5.722.088.094a3.469,3.469,0,0,1,.9,2.343v17.449A3.187,3.187,0,0,1-3668.731-768.645Zm-17.132-21.586a1.379,1.379,0,0,0-.269.834v17.449a1.118,1.118,0,0,0,.954,1.206h16.447a1.118,1.118,0,0,0,.954-1.206V-789.4a1.379,1.379,0,0,0-.269-.834l-8.747-5.7-.088-.094a.119.119,0,0,0-.073-.045.119.119,0,0,0-.073.045l-.088.094Z"
            fill="#ffffff"
          />
          <path
            id="Trazado_46"
            data-name="Trazado 46"
            d="M-3434.355-668.949a1.578,1.578,0,0,1,1.578,1.578,1.578,1.578,0,0,1-1.578,1.578,1.578,1.578,0,0,1-1.578-1.578,1.578,1.578,0,0,1,1.578-1.578m0-1.612a3.194,3.194,0,0,0-3.19,3.19,3.194,3.194,0,0,0,3.19,3.19,3.194,3.194,0,0,0,3.19-3.19,3.194,3.194,0,0,0-3.19-3.19Z"
            transform="translate(-242.6 -123.49)"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
};
export default IconComercial;
