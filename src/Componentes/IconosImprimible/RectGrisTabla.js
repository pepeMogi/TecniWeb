import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ZIndex from "react-z-index"; // component, util
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

const RectGrisTabla = (props) => {

  const {text, ancho} = props;

  const classes = useStyles();
  return (
    <div style={{ position: "relative" }} className={classes.root} >
      <ZIndex
        above={2}
        width={ancho}
        style={{
          top: 2,
          position: "absolute",

        }}
      >
        <Typography sx={{ fontWeight: 600,fontSize: 13, textAlign: "center", color: "#212121" }} width={ancho}>
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
          <rect id="rectGris" width={ancho} height="24" fill="#C8C8C8" />
        </svg>
      </ZIndex>
    </div>
  );
};
export default RectGrisTabla;
