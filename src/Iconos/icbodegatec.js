import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
   marginTop: 4
  },
}));

const IconAdmin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.182"
        height="16.49"
        viewBox="0 0 16.182 13.49"
      >
        <path
          id="icbodega"
          d="M-4957.786-77.938l-7.889-5.782-7.889,5.782a.494.494,0,0,0-.106.69.494.494,0,0,0,.69.106l.692-.507v6.925a.494.494,0,0,0,.494.494h12.236a.494.494,0,0,0,.494-.494v-6.925l.692.507a.491.491,0,0,0,.291.1.494.494,0,0,0,.4-.2A.494.494,0,0,0-4957.786-77.938Zm-2.265,6.721H-4971.3v-7.155l5.624-4.122,5.624,4.122Z"
          transform="translate(4973.766 83.72)"
          fill="#EC1B3B"
        />
      </svg>
    </div>
  );
};
export default IconAdmin;
