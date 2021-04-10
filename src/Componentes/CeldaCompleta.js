import { Box, Typography } from "@material-ui/core";
import { React } from "react";

const CeldaCompleta = (props) => {
    const {contenido,largo} = props;
  return (
    <Box
      sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1, borderTop: 1 }}
      width={largo}
    >
      <Typography sx={{fontSize: 12, textAlign:"center"}} width={largo} >{contenido}</Typography>
    </Box>
  );
};

export default CeldaCompleta;