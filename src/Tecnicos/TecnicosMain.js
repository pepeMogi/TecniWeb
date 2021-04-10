import { React, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Divider,
  Dialog,
  Grow,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import IconTecnico from "../Iconos/ictecnicoact";
import IconTecMas from "../Iconos/ictecmas";
import IconBodega from "../Iconos/icbodegatec";
import IconEdt from "../Iconos/icedtedttec";
import IconRh from "../Iconos/icrh";
import IconCc from "../Iconos/iccc";
import IconCelular from "../Iconos/iccelulartec";
import IconEmail from "../Iconos/icemail";
import fire from "../fire";
import TemaDialog from "../Temas/TemaDialog";
import EditTecnico from "./EditTecnico";
import CrearTecncio from "../CrearTecnico/PasosCT";
import { tecnico } from "../Entidades/tecnico";

const TecnicosMain = () => {
  const [tecnicos, setTecnicos] = useState([]);
  const [open, setOpen] = useState(false);
  const [abrir, setAbrir] = useState(false);
  const [crear, setCrear] = useState(false);
  const [detalleTecnico, setDetalleTecnico] = useState("");

  

  const llenarTecnicos = () => {
    return tecnicos.map((tecni) => {
      return (
        <Box
          sx={{
            width: 290,
            borderRadius: 3,
            boxShadow: 5,
            backgroundColor: "#ffffff",
            marginTop: 4,
            marginRight: 4,
            padding: 1,
            paddingBottom: 2,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            {/****Info Perfil****/}
            <Grid item xs={10}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    height: 80,
                    width: 80,
                    marginTop: 1,
                    marginLeft: 1,
                    boxShadow: 4,
                  }}
                  src={tecni.img}
                ></Avatar>
                <div>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography
                      sx={{
                        marginTop: 2,
                        marginLeft: 1,
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#EC1B3B",
                     
                        height: 24,
                        overflow: "hidden",
                      }}
                    >
                      {tecni.alias}
                      <Divider sx={{ borderColor: "#EC1B3B" }} />
                    </Typography>

                    <div>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            fontStyle: "italic",
                            marginLeft: 1,
                            marginTop: 0.5,
                            fontSize: 10,
                            fontWeight: 500,
                            color: "#EC1B3B",
                            marginLeft: 1,
                            marginRight: 2,
                            width: 60, /// aqui
                          }}
                        >
                          {tecni.tipo}
                        </Typography>

                        <IconBodega />

                        <Typography
                          sx={{
                            fontStyle: "italic",
                            marginLeft: 1,
                            marginTop: 0.5,
                            fontSize: 10,
                            fontWeight: 500,
                            color: "#EC1B3B",
                            marginLeft: 1,
                          }}
                        >
                          Bodega # {tecni.bodega}
                        </Typography>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </Grid>

            {/****Icono Edt****/}
            <Grid item xs={2}>
              <div onClick={(e) => llevarDialog(tecni)}>
                <Avatar
                  sx={{
                    marginLeft: 1.7,
                    backgroundColor: "#ffffff",
                    boxShadow: 4,
                    width: 30,
                    height: 30,
                  }}
                >
                  <IconEdt />
                </Avatar>
              </div>
            </Grid>

            {/****cc rh****/}
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ marginTop: 2 }}
            >
              <Box
                sx={{
                  width: 160,
                  height: 34,
                  boxShadow: 5,
                  borderRadius: 1,
                  marginLeft: 1,
                  padding: 0.7,
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{ marginLeft: 0.5, fontSize: 13, fontWeight: 600 }}
                  >
                    CC: {tecni.cc}
                  </Typography>
                  <IconCc />
                </Grid>
              </Box>

              <Box
                sx={{
                  width: 90,
                  height: 34,
                  boxShadow: 5,
                  borderRadius: 1,
                  marginLeft: 1,
                  padding: 0.7,
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ marginTop: 0.1 }}
                >
                  <Typography
                    sx={{ marginLeft: 0.5, fontSize: 13, fontWeight: 600 }}
                  >
                    Rh: {tecni.rh}
                  </Typography>
                  <IconRh />
                </Grid>
              </Box>
            </Grid>

            {/****Email celular****/}
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box
                sx={{
                  height: 34,
                  boxShadow: 5,
                  borderRadius: 1,
                  marginLeft: 1,
                  padding: 0.7,
                  marginTop: 1.5,
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      marginLeft: 0.5,
                      fontSize: 13,
                      fontWeight: 500,
                      overflow: "hidden",
                      marginRight: 1,
                      marginBottom: 1.5,
                    }}
                  >
                    {tecni.email}
                  </Typography>
                  <IconEmail />
                </Grid>
              </Box>

              <Box
                sx={{
                  height: 34,
                  boxShadow: 5,
                  borderRadius: 1,
                  marginLeft: 1,
                  padding: 0.7,
                  marginTop: 1.5,
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ marginTop: 0.1 }}
                >
                  <Typography
                    sx={{
                      marginLeft: 0.5,
                      fontSize: 13,
                      fontWeight: 500,
                      marginRight: 1,
                      marginTop: -0.7,
                    }}
                  >
                    Celular: {tecni.celular}
                  </Typography>
                  <IconCelular />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      );
    });
  };

  const cerrarDialog = () => {
    setAbrir(false);
  };

  const llevarDialog = (tecnico) => {
    setDetalleTecnico(tecnico);
    setAbrir(true);
  };

  const abrirCrear = () => {
    setCrear(true);
  };

  const cerrarCrear = () => {   
    setCrear(false);
  };

  useEffect(() => {
    var array = [];
    fire
      .firestore()
      .collection("tecnicos")
      .onSnapshot((snap) => {
        snap.forEach((doc) => {
          var tec = new tecnico(doc);
          setTecnicos((array) => array.concat(tec));
        });

        setOpen(true);
      })
      ;
  },[]);
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/****Numero Tecnicos****/}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box
            sx={{
              backgroundColor: "#3D3D3D",             
              borderRadius: 1,            
              padding: 0.7,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ marginLeft: 1 }}
            >
              <IconTecnico />
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: 500,
                  alignSelf: "center",
                  marginLeft: 1,
                  marginTop: -0.2,
                  marginRight: 1
                }}
              >
             
                12 Tecnicos Activos
              </Typography>
            </Grid>
          </Box>

          {/****Btn Crear Tecnico****/}
          <div onClick={(e) => abrirCrear()}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              width={250}
            >
              <Typography
                sx={{
                  color: "#3D3D3D",
                  fontWeight: 600,
                  fontSize: 14,
                  alignSelf: "center",
                  marginRight: 1,
                  marginTop: 0.5,
                }}
              >
                CREAR TECNICO
              </Typography>

              <Avatar
                sx={{
                  backgroundColor: "#3D3D3D",
                  width: 50,
                  height: 50,
                  boxShadow: 5,
                }}
              >
                <IconTecMas />
              </Avatar>
            </Grid>
          </div>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {open ? llenarTecnicos() : <div></div>}
        </Grid>
      </Grid>

      {/****Dialog Editar Tecnico****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog
          open={abrir}
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          onClose={(e) => cerrarDialog(e)}
        >
          <EditTecnico detalleTecnico={detalleTecnico} cerrarDialog={cerrarDialog} />
        </Dialog>
      </ThemeProvider>

      {/****Dialog Tecnico Nuevo****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog
          open={crear}
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          onClose={(e) => cerrarCrear(e)}
        >
          <CrearTecncio />
        </Dialog>
      </ThemeProvider>
    
    </div>
  );
};

export default TecnicosMain;
