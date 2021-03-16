import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4,
    marginRight: 6,
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        id="icciudadtik"
        xmlns="http://www.w3.org/2000/svg"
        width="18.785"
        height="23.695"
        viewBox="0 0 21.785 26.695"
      >
        <path
          id="Trazado_70"
          data-name="Trazado 70"
          d="M6178.365,1854.729l-.754-.687a60.9,60.9,0,0,1-4.989-5.225c-3.417-4.052-5.149-7.379-5.149-9.889a10.893,10.893,0,0,1,21.785,0c0,2.51-1.733,5.837-5.151,9.889a60.629,60.629,0,0,1-4.988,5.225Zm0-24.452a8.661,8.661,0,0,0-8.651,8.651c0,1.911,1.642,4.91,4.622,8.444,1.561,1.851,3.132,3.431,4.029,4.3.9-.872,2.48-2.46,4.045-4.317,2.97-3.526,4.607-6.518,4.607-8.425A8.662,8.662,0,0,0,6178.365,1830.276Z"
          transform="translate(-6167.473 -1828.034)"
          fill="#ec1b3b"
        />
        <path
          id="Trazado_71"
          data-name="Trazado 71"
          d="M6181.906,1848.423a5.82,5.82,0,1,1,5.819-5.82A5.827,5.827,0,0,1,6181.906,1848.423Zm0-9.4a3.578,3.578,0,1,0,3.577,3.578A3.582,3.582,0,0,0,6181.906,1839.025Z"
          transform="translate(-6171.014 -1831.631)"
          fill="#ec1b3b"
        />
      </svg>
    </div>
  );
};
export default IconAdmin;
