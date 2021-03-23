import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";

import IconAdmin from "../Iconos/ictipo";

const DiagnosticoCard = (props) => {
  const { diag } = props;

  return (
    <div>
      <Box sx={{boxShadow: 4, margin: 1, borderRadius: 2, padding: 1 }}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <IconAdmin />

            <Typography>Tecnico:</Typography>

            <Typography>{diag.tecnico}</Typography>


          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <IconAdmin />

            <Typography>Diagnostico:</Typography>

            <Typography>{diag.diagnostico}</Typography>


          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <IconAdmin />

            <Typography>Solucion:</Typography>

            <Typography>{diag.solucion}</Typography>


          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <IconAdmin />

            <Typography>10 items en reporte</Typography>         


          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <IconAdmin />

            <Typography>Comentario:</Typography>

            <Typography>{diag.comentario}</Typography>         


          </Grid>


        </Grid>
      </Box>
    </div>
  );
};

export default DiagnosticoCard;
