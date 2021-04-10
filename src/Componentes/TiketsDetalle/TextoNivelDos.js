import { React } from "react";
import { Grid, Typography } from "@material-ui/core";

const TextoNivelDos = (props) => {
  const { Icono, titulo, contenido } = props;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Icono />
      </Grid>

      <Grid item>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          sx={{marginLeft: 2}}
        >
          <Typography sx={{fontSize: 11, fontWeight: 600, color: "#727070"}} >{titulo}</Typography>
          <Typography  sx={{fontSize: 11, fontWeight: 400, color: "#727070", fontStyle: "italic", marginTop: 0 }} >{contenido}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TextoNivelDos;
