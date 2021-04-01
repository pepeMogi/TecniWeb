import { React, useState } from "react";
import { Box, Grid, Typography, Dialog, Grow } from "@material-ui/core";
import IconTipo from "./IconosTiketCard/iconTipo";
import IconMaquina from "./IconosTiketCard/IcMaquina";
import Iconofalla from "./IconosTiketCard/IcFalla";
import TemaDialog from "../Temas/TemaDialog";
import { ThemeProvider } from "@material-ui/core/styles";
import TiketDetalle from "../Tiket/TiketDetalle";


const TiketCard = (props) => {
  const { tiket } = props;
  const [abrirDeta,setAbrirDeta] = useState(false);

  var nom = tiket.nombre;
  if (tiket.solicitante != null && tiket.solicitante != "") {
    nom += " /" + tiket.solicitante;
  }

  const abrirDetalle = () =>{
    setAbrirDeta(true);
  }

  const cerrarDetalle = () =>{
    setAbrirDeta(false);
  }

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
          marginLeft: 1,
          marginRight: 1,
          marginTop: 2,
          backgroundColor: "#ffffff",
          padding: 1,
        }}
        onClick={(e) => abrirDetalle()}
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
                  width: 85,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  marginRight: 1,
                }}
              >
                {tiket.tipo}
              </Typography>

              <Typography
                sx={{ fontSize: 14, fontWeight: 600, color: "#EC1B3B" }}
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
              <Typography sx={{ fontSize: 14, fontWeight: 500, marginLeft: 1 }}>
                Nombre:
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  marginLeft: 1,
                  color: "#727070",
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

          <Typography
            sx={{
              textAlign: "end",
              fontSize: 11,
              color: "#EC1B3B",
              width: 270,
              fontWeight: 500,
            }}
          >
            {tiket.estado}
          </Typography>
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
            <TiketDetalle tiketDetalle={tiket} />
          </Dialog>
        </ThemeProvider>
    </div>
  );
};

export default TiketCard;
