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
import IconoDetalle from './../SeccionTiketes/IconosDiagnosticar/IconoDetalle';
import fire from "../fire";
import { tiket } from './../Entidades/tikets';
import TiketDetalleCompleto from "./TiketsDetalle/TiketDetalleCompleto";

const TiketCompleto = (props) => {
  const { tike } = props;
  const [openDetalle, setOpenDetalle] = useState(false);
  const [tiketDetalle,setTiketDetalle] = useState("");
  const [color,setColor] = useState("");

  

  var nom = tike.nombre;
  if (tike.solicitante != "" && tike.solicitante != null) {
    nom += "/" + tike.solicitante;
  }

  const getColor = (num) =>{
    switch (num) {
   
        
      case 0:
        return "#0F996D";
        
      case 1:
        return "#F6D119";
        
      case 2:
        return "#FE9916";
        
      case 3:
        return "#FF0034";
    }

  }

  const abrirDetalle = () => {

    if(tike.ultimaVisita == ""){
      console.log("es nullo");
      fire.firestore().collection("tikets").doc(tike.id).get().then((doc) =>{
        var tik = new tiket(doc);
        setTiketDetalle(tik);
        setOpenDetalle(true);
      })
    }else{
      console.log("tiene");
      setTiketDetalle(tike)
      setOpenDetalle(true);
    }

    
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
          padding: 1,
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
          backgroundColor={getColor(tike.prioridad)}
            sx={{
              width: 16,
              height: 16,
              borderRadius: 2,              
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
              <Typography sx={{fontWeight: 600}}>{tike.id.toUpperCase()}</Typography>
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
                {tike.fechaCreacion}
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
                {tike.tipo}
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
                {tike.asignado}
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
                {tike.estado}
              </Typography>
            </Grid>
          </Grid>

          {/***site item****/}
          <Grid item>
          <Box
                sx={{
                  marginBottom: 1,
                  marginRight: 1,
                  marginTop: 1,
                  paddingTop: 0.1,
                  backgroundColor: "#3d3d3d",
                  borderRadius: 1,
                  boxShadow: 5,
                }}
                onClick={(e) => abrirDetalle()}
              >
                <IconoDetalle />
              </Box>
         
           
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
          <TiketDetalleCompleto tiket={tiketDetalle} />
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TiketCompleto;
