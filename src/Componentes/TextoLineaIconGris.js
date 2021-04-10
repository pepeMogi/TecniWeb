import { Typography, Grid } from "@material-ui/core";
import { React } from "react";

const TextoLineaIconGris = (props) => {
  const { titulo, Icono } = props;
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Icono/>
      <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#212121", marginTop: 0.2, marginLeft: 1 }}>
        {titulo}
      </Typography>
    </Grid>
  );
};

export default TextoLineaIconGris;
