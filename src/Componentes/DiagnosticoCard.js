import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";
import IconTecnico from "./IconosTiket/iconTecnico";
import IconDiagnostico from "./IconosTiket/iconDiagnostico";
import IconoPunteria from "./IconosTiket/IconPunteria";
import IconoAlert from "./IconosTiket/IconAlert";
import IconoComentario from "./IconosTiket/IconComentario";

const DiagnosticoCard = (props) => {
  const { diag } = props;

  return (
    <div>
      <Box
        sx={{
          boxShadow: 4,
          marginLeft: 1,
          marginRight: 1,
          marginBottom: 3,
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          {/***Tecnico */}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <IconTecnico />

            <Typography
              sx={{
                marginLeft: 2,
                fontStyle: "italic",
                fontSize: 14,
                color: "#EC1B3B",
                fontWeight: 600,
              }}
            >
              Tecnico:
            </Typography>

            <Typography sx={{ marginLeft: 2, fontSize: 14, fontWeight: 600 }}>
              {diag.tecnico}
            </Typography>
          </Grid>

          {/***Diagnostico */}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            sx={{ marginTop: 0.5 }}
          >
            <IconoPunteria />

            <Typography
              sx={{
                marginLeft: 2,
                fontStyle: "italic",
                fontSize: 14,
                color: "#EC1B3B",
                fontWeight: 600,
              }}
            >
              Diagnostico:
            </Typography>

            <Typography
              sx={{
                marginLeft: 1,
                fontSize: 14,
                color: "#727070",
                fontStyle: "italic",
              }}
            >
              {diag.diagnostico}
            </Typography>
          </Grid>

          {/***Solucion */}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            sx={{ marginTop: 1 }}
          >
            <IconDiagnostico />

            <Typography
              sx={{
                marginLeft: 2,
                fontStyle: "italic",
                fontSize: 14,
                color: "#EC1B3B",
                fontWeight: 600,
              }}
            >
              Solucion:
            </Typography>

            <Typography
              sx={{
                marginLeft: 1,
                fontSize: 14,
                color: "#727070",
                fontStyle: "italic",
              }}
            >
              {diag.solucion}
            </Typography>
          </Grid>

          {/***Evidencias */}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            sx={{ marginTop: 1 }}
          >
            <IconoAlert />

            <Typography
              sx={{
                marginLeft: 2,
                fontStyle: "italic",
                fontSize: 14,
                color: "#EC1B3B",
                fontWeight: 600,
              }}
            >
              {diag.imgs.length + " evidencias en el reporte"}
            </Typography>
          </Grid>

          {/***Comentario */}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            sx={{ marginTop: 1 }}
          >
            <IconoComentario />

            <Typography
              sx={{
                marginLeft: 1,
                fontStyle: "italic",
                fontSize: 14,
                color: "#EC1B3B",
                fontWeight: 600,
              }}
            >
              Comentario:
            </Typography>

            <Typography
              sx={{
                marginLeft: 1,
                fontSize: 14,
                color: "#727070",
                fontStyle: "italic",
              }}
            >
              {diag.comentario}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DiagnosticoCard;
