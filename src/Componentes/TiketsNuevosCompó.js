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
import TiketDetalleCompleto from './TiketsDetalle/TiketDetalleCompleto';

const TiketNuevoCompo = (props) => {
  const { tiket } = props;
  const [openDetalle, setOpenDetalle] = useState(false);
  const [openGestion, setOpenGestion] = useState(false);
  const [openHistorial,setOpenHistorial] = useState(false);
 

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

  const abrirHistorial = () => {    
    setOpenHistorial(!openHistorial);
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
              <IconMaquina />
              <Typography  sx={{
                  marginLeft: 1,
                  minWidth: 200,
                  maxWidth: 200,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >{tiket.idMaquina}</Typography>
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
              <Iconofalla />
              <Typography  sx={{
                  marginLeft: 1,
                  minWidth: 250,
                  maxWidth: 250,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >{tiket.falla}</Typography>
            </Grid>
          </Grid>

          
           {/***seis item****/}
           <Grid item>
           <Button variant="contained" color="secondary" onClick={() => abrirDetalle()} >Detalle</Button>
          </Grid>

           {/***seis item****/}
           <Grid item>
           <Button variant="contained" color="secondary" onClick={() => abrirGestion()} >Diligenciar</Button>
          </Grid>

             {/***siete item****/}
             <Grid item>
           <Button variant="contained" color="secondary" onClick={() => abrirHistorial()} >historial</Button>
          </Grid>


        </Grid>
      </Box>
      <Collapse in={openHistorial} timeout="auto" unmountOnExit>
        <TablaHistorialTiketCompo idCliente={tiket.idCliente} idTiket={tiket.id} />
      </Collapse>


      
        {/****Dialog Detalle Tiket****/}
        <ThemeProvider theme={TemaDialog}>
          <Dialog
            fullWidth={true}
            sx={{ justifyContent: "center" }}
            TransitionComponent={Grow}
            open={openDetalle}
            onClose={cerrarDetalle}
          >
            <TiketDetalleCompleto tiket={tiket} />
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
    </div>
  );
};

export default TiketNuevoCompo;
