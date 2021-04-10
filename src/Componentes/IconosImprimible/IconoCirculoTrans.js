import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -3,
    marginRight: 4
  },
}));

const IconoCirculoTrans = (props) => {
  const { color } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 21 21"
      >
        <circle id="iccirculo" cx="10.5" cy="10.5" r="10.5" fill={color} />
      </svg>
    </div>
  );
};
export default IconoCirculoTrans;
