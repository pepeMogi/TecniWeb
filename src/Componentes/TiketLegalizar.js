import { Box, Grid, Typography, Dialog, Button, Grow, Collapse } from "@material-ui/core";
import { React, useState } from "react";
import {
  ThemeProvider,
} from "@material-ui/core/styles";
import Iconofalla from "./IconosTiket/IcFalla";
import IconFecha from "./IconosTiket/IcFecha";
import IconMaquina from "./IconosTiket/IcMaquina";
import IconSolicitante from "./IconosTiket/IcSolicitante";
import TemaDialog from './../Temas/TemaDialog';
import PasosGestion from './../SeccionTiketes/GestionTiket/PasosGestion';
import TablaHistorialTiketCompo from './TablaHistorialTiketCompo';
import TiketDetalle from './../Tiket/TiketDetalle';
import IconTipo from './IconosTiket/iconTipo';
import IconTecnico from "./IconosTiket/iconTecnico";
import PasosLegalizar from "../SeccionLegalizar/LegalizarForm/PasosLegalizar";


const TiketLegalizar = (props) => {
  const { tiket } = props;
  const [openDetalle, setOpenDetalle] = useState(false);
  const [openGestion, setOpenGestion] = useState(false);
  const [abrir, setAbrir] = useState(false);
 

  var nom =  tiket.nombre;
  if (tiket.solicitante != "" && tiket.solicitante != null) {
    nom += "/" + tiket.solicitante;
  }



  const abrirDetalle = () => {    
    setOpenDetalle(true);
  };

  const cerrarDetalle = () => {
    setOpenDetalle(false);
  };

  const abrirGestion = () => {    
    setOpenGestion(true);
  };

  const cerrarGestion = () => {
    setOpenGestion(false);
  };

  const abrirLegalizar = (tik) => {
   // setTik(tik);
    setAbrir(true);
  };

  const cerrarLegalizar = () => {
    setAbrir(false);
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
          margin: 1,
        }}
       
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          {/***primer item****/}
          <Grid item sx={{ minWidth: 60, maxWidth: 60 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography >
                {tiket.id.toUpperCase()}
              </Typography>
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
                  minWidth: 200,
                  maxWidth: 200,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >{nom}</Typography>
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
              <Typography  sx={{
                  marginLeft: 1,
                  minWidth: 200,
                  maxWidth: 200,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >{tiket.tipo}</Typography>
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
              <Typography  sx={{
                  marginLeft: 1,
                  minWidth: 250,
                  maxWidth: 250,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >{tiket.asignado}</Typography>
            </Grid>
          </Grid>

          
           {/***seis item****/}
           <Grid item>
           <Button variant="contained" color="secondary" onClick={() => abrirDetalle()} >Detalle</Button>
          </Grid>

           {/***seis item****/}
           <Grid item>
           <Button variant="contained" color="secondary" onClick={() => abrirLegalizar()} >Legalizar</Button>
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

        {/****Dialog Diligenciar Tiket****/}
        <ThemeProvider theme={TemaDialog}>
          <Dialog
            fullWidth={true}
            sx={{ justifyContent: "center" }}
            TransitionComponent={Grow}
            open={openGestion}
            onClose={cerrarGestion}
          >
            <PasosGestion tiket={tiket} cerrarGestion={cerrarGestion} />
          </Dialog>
        </ThemeProvider>

         {/***Legalizar formulario****/}
      <ThemeProvider theme={TemaDialog}>
      <Dialog
        fullWidth={true}
        open={abrir}
        sx={{ justifyContent: "center" }}
        TransitionComponent={Grow}
        onClose={(e) => cerrarLegalizar(e)}
      >
        <PasosLegalizar tiket={tiket}/>
      </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TiketLegalizar;
