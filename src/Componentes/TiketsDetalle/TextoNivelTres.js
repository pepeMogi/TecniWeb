import { React } from "react";
import { Grid, Typography } from "@material-ui/core";

const TextoNivelTres = (props) => {
  const { Icono, titulo, contenido } = props;

  return (
    <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
>
      <Grid item>
        <Icono />
      </Grid>

      <Grid item>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          sx={{marginLeft: 3}}
        >
          <Typography sx={{fontSize: 11, fontWeight: 600, color: "#EC1B3B", marginTop: 1}} >{titulo}</Typography>
          <Typography  sx={{fontSize: 11, fontWeight: 500, color: "#3D3D3D",  marginTop: 0.5 }} >{contenido}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TextoNivelTres;
