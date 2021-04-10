import { React, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  Grow,
  Button,
  IconButton,
} from "@material-ui/core";
import IconTipo from "./IconosTiketCard/iconTipo";
import IconMaquina from "./IconosTiketCard/IcMaquina";
import Iconofalla from "./IconosTiketCard/IcFalla";
import TemaDialog from "../Temas/TemaDialog";
import { ThemeProvider } from "@material-ui/core/styles";
import TiketDetalle from "../Tiket/TiketDetalle";
import IconoAlerta from "./IconosTiketCard/IcAlerta";
import PasosDiagnostico from "./../SeccionTiketes/DiagnosticarTiket/PasosDiagnostico";
import IconoDiligenciar from "./../SeccionTiketes/IconosDiagnosticar/IconoDiligenciar";
import IconoDetalle from "./../SeccionTiketes/IconosDiagnosticar/IconoDetalle";
import TiketDetalleCompleto from './TiketsDetalle/TiketDetalleCompleto';

const TiketCardGrande = (props) => {
  const { tiket } = props;
  const [abrirDeta, setAbrirDeta] = useState(false);
  const [abrirDiag, setAbrirDiag] = useState(false);

  var nom = tiket.nombre;
  if (tiket.solicitante != null && tiket.solicitante != "") {
    nom += " /" + tiket.solicitante;
  }

  const abrirDetalle = () => {
    setAbrirDeta(true);
  };

  const cerrarDetalle = () => {
    setAbrirDeta(false);
  };

  const abrirDiagnostico = () => {
    setAbrirDiag(true);
  };

  const cerrarDiagnostico = () => {
    setAbrirDiag(false);
  };

  const getPrioridad = (prioridad) => {
    switch (prioridad) {
      case 0:
        return "Sin Prioridad";
      case 1:
        return "Baja";
      case 2:
        return "Media";
      case 3:
        return "Alta";
      case 4:
        return "Rellamada";
    }
  };

  const getColor = (prioridad) => {
    switch (prioridad) {
      case 0:
        return "#727070";
      case 1:
        return "#0F996D";
      case 2:
        return "#F6D119";
      case 3:
        return "#FE9916";
      case 4:
        return "#FF0034";
    }
  };

  return (
    <div>
      <Box
        maxWidth
        sx={{
          borderRadius: 2,
          boxShadow: 5,
          marginRight: 3,
          marginBottom: 3,
          backgroundColor: "#ffffff",
          padding: 1,
        }}
      >
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          {/****Prioridad Tipo Numero****/}
          <Grid item maxWidth>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: 3,
                }}
                backgroundColor={getColor(tiket.prioridad)}
              />
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#3D3D3D",
                  marginLeft: 1,
                  width: 70,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  marginRight: 1,
                }}
              >
                {getPrioridad(tiket.prioridad)}
              </Typography>

              <IconTipo />
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#3D3D3D",
                  marginLeft: 1,
                  width: 120,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  marginRight: 1,
                }}
              >
                {tiket.tipo}
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  marginRight: 0.5,
                }}
              >
                {tiket.id.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>

          {/****Nombre****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  marginLeft: 1,
                  marginTop: 1,
                }}
              >
                Nombre:
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  marginLeft: 1,
                  color: "#727070",
                  marginTop: 1,
                }}
              >
                {nom}
              </Typography>
            </Grid>
          </Grid>

          {/****Maquina****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              sx={{ marginTop: 1 }}
            >
              <IconMaquina />
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  marginLeft: 2,
                  color: "#727070",
                  marginTop: -0.6,
                }}
              >
                {tiket.idMaquina.replaceAll("_", " ")}
              </Typography>
            </Grid>
          </Grid>

          {/****Falla****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              sx={{ marginTop: 1 }}
            >
              <Iconofalla />
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 400,
                  marginLeft: 2,
                  color: "#727070",
                  marginTop: -0.6,
                }}
              >
                {tiket.falla}
              </Typography>
            </Grid>
          </Grid>

          {/****Anexos****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              sx={{ marginTop: 1 }}
            >
              <IconoAlerta />
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 400,
                  marginLeft: 2,
                  color: "#727070",
                  marginTop: -0.6,
                }}
              >
                {"("}
                {tiket.anexos ? tiket.anexos.length : "0"}
                {") Imagenes adjuntas"}
              </Typography>
            </Grid>
          </Grid>

          {/****Diagnosticar****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              sx={{ marginTop: 1, paddingLeft: 1, paddingRight: 1 }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#EC1B3B",
                  fontWeight: 500,
                  width: 210,
                }}
              >
                {tiket.estado}
              </Typography>

              <Box
                sx={{
                  marginBottom: 1,
                  marginRight: 1,
                  backgroundColor: "#3d3d3d",
                  borderRadius: 1,
                  boxShadow: 5,
                }}
                onClick={(e) => abrirDetalle()}
              >
                <IconoDetalle />
              </Box>

              <Box
                sx={{
                  marginBottom: 1,
                  
                  backgroundColor: "#3d3d3d",
                  borderRadius: 1,
                  boxShadow: 5,
                }}
                onClick={(e) => abrirDiagnostico()}
              >
                <IconoDiligenciar />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/****Dialog Detalle Tiket****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog
          fullWidth={true}
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          open={abrirDeta}
          onClose={cerrarDetalle}
        >
          <TiketDetalleCompleto tiket={tiket} />
        </Dialog>
      </ThemeProvider>

      {/****Dialog Gestionar****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog
          fullWidth={true}
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          open={abrirDiag}
          onClose={cerrarDiagnostico}
        >
          <PasosDiagnostico
            tiketDiag={tiket}
            cerrarDiagnostico={cerrarDiagnostico}
          />
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TiketCardGrande;
