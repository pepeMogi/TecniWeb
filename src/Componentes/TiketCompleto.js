import { Grid, Box, Typography, Button, Dialog, Grow } from "@material-ui/core";
import { React, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import Iconofalla from "./IconosTiket/IcFalla";
import IconFecha from "./IconosTiket/IcFecha";
import IconSolicitante from "./IconosTiket/iconSolicitante";
import IconMaquina from "./IconosTiketCard/IcMaquina";
import TemaDialog from "./../Temas/TemaDialog";
import TiketDetalle from "../Tiket/TiketDetalle";
import IconTipo from './IconosTiket/iconTipo';
import IconTecnico from "./IconosTiket/iconTecnico";
import IconoEstado from "./IconosTiket/IconoEstado";

const TiketCompleto = (props) => {
  const { tiket } = props;
  const [openDetalle, setOpenDetalle] = useState(false);

  var nom = tiket.nombre;
  if (tiket.solicitante != "" && tiket.solicitante != null) {
    nom += "/" + tiket.solicitante;
  }

  const abrirDetalle = () => {
    setOpenDetalle(true);
  };

  const cerrarDetalle = () => {
    setOpenDetalle(false);
  };

  return (
    <div>
      <Box
        maxWidth
        sx={{
          backgroundColor: "#ffffff",
          padding: 2,
          boxShadow: 4,
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: 2,
              backgroundColor: "red",
              marginTop: 1,
              marginLeft: 1.5,
            }}
          />

          {/***primer item****/}
          <Grid item sx={{ minWidth: 60, maxWidth: 60 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{fontWeight: 600}}>{tiket.id.toUpperCase()}</Typography>
            </Grid>
          </Grid>

          {/***segundo item****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconFecha />
              <Typography
                sx={{
                  marginLeft: 1,
                  minWidth: 120,
                  maxWidth: 120,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontSize: 14
                }}
              >
                {tiket.fechaCreacion}
              </Typography>
            </Grid>
          </Grid>

          {/***tercer item****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconSolicitante />
              <Typography
                sx={{
                  marginLeft: 1,
                  minWidth: 220,
                  maxWidth: 220,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontSize: 14
                }}
              >
                {nom}
              </Typography>
            </Grid>
          </Grid>

          {/***cuatro item****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconTipo />
              <Typography
                sx={{
                  marginLeft: 1,
                  minWidth: 150,
                  maxWidth: 150,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontSize: 14
                }}
              >
                {tiket.tipo}
              </Typography>
            </Grid>
          </Grid>

          {/***cinco item****/}
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconTecnico />
              <Typography
                sx={{
                  marginLeft: 1,
                  minWidth: 150,
                  maxWidth: 150,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontSize: 14
                }}
              >
                {tiket.asignado}
              </Typography>
            </Grid>
          </Grid>


              {/***seis item****/}
              <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconoEstado />
              <Typography
                sx={{
                  marginLeft: 1,
                  minWidth: 150,
                  maxWidth: 150,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontSize: 14
                }}
              >
                {tiket.estado}
              </Typography>
            </Grid>
          </Grid>

          {/***site item****/}
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => abrirDetalle()}
            >
              Detalle
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/****Dialog Detalle Tiket****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog
          fullWidth={true}
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          open={openDetalle}
          onClose={cerrarDetalle}
        >
          <TiketDetalle tiketDetalle={tiket} />
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TiketCompleto;
