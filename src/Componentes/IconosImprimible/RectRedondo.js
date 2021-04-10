import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ZIndex from "react-z-index"; // component, util
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 6,
  },
}));

const RectRedondo = (props) => {
  const { text, alto, largo, color } = props;

  const classes = useStyles();
  return (
    <div style={{ position: "relative" }} className={classes.root}>
      <ZIndex
        above={2}
        width={largo}
        style={{
          top: 4,
          position: "absolute",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            color: "#212121",
          }}
          width={largo}
        >
          {text}
        </Typography>
      </ZIndex>
      <ZIndex index={2} style={{ top: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={largo}
          height={alto}
          viewBox={"0 0 " + largo + " " + alto}
        >
          <rect id="recredondo"   width={largo}
          height={alto} rx="6" fill={color} />
        </svg>
      </ZIndex>
    </div>
  );
};
export default RectRedondo;
