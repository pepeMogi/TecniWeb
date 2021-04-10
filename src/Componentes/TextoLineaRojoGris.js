import { Typography, Grid } from "@material-ui/core";
import { React } from "react";

const TextoLineaRojoGris = (props) => {
  const { titulo, contenido } = props;
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Typography
        sx={{ fontSize: 12, fontWeight: 600, color: "#EC1B3B", width: 100 }}
      >
        {titulo}
      </Typography>
      <Typography sx={{ fontSize: 12, fontWeight: 500, color: "#727070" }}>
        {contenido}
      </Typography>
    </Grid>
  );
};

export default TextoLineaRojoGris;
