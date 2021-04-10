import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ZIndex from "react-z-index"; // component, util
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0
  },
}));

const RectGris = (props) => {

  const {text, ancho} = props;

  const classes = useStyles();
  return (
    <div style={{ position: "relative" }} className={classes.root} >
      <ZIndex
        above={2}
        width={ancho}
        style={{
          top: 0,
          position: "absolute",

        }}
      >
        <Typography sx={{ fontWeight: 400, textAlign: "center", color: "#ffffff" }} width={ancho}>
         {text}
        </Typography>
      </ZIndex>
      <ZIndex index={2} style={{ top: 1, }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ancho}
          height="24"
          viewBox={"0 0 " + ancho +  " 24"}
          zIndex={1}
          style={{ zIndex: "100" }}
        >
          <rect id="rectGris" width={ancho} height="24" fill="#727070" />
        </svg>
      </ZIndex>
    </div>
  );
};
export default RectGris;
