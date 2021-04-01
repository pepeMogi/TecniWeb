import { React, useState, useEffect } from "react";
import IconCelular from "./IconosTiket/iconCelular";
import IconEdtEstado from "../Iconos/icedtestado";
import IconEdtTecnico from "../Iconos/icedttecnico";
import IconEdtEdt from "../Iconos/icedtedt";
import IconEdtPrioridad from "../Iconos/icedtprioridad";
import IconDireccion from "./IconosTiket/iconDireccion";
import IconGrande from "../Iconos/ictecnigrandetiket";
import IconCalendario from "./IconosTiket/iconCalendario";
import IconCiudad from "./IconosTiket/iconCiudad";
import fire from "../fire";
import PasosEdt from "../EdtTiket/PasosEdt";
import IconTipo from "./IconosTiket/iconTipo";
import IconSolicitante from "./IconosTiket/iconSolicitante";
import {
  Typography,
  Slide,
  Grid,
  Box,
  Avatar,
  Divider,
  Dialog,
  Grow,
} from "@material-ui/core";
import Iconofalla from "../Componentes/IconosTiket/IcFalla";
import IconMaquina from "./IconosTiket/iconMaquina";
import IconTecnico from "./IconosTiket/iconTecnico";
import IconDiagnostico from "./IconosTiket/iconDiagnostico";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: 150,
    borderRadius: 10,
   
  },
}));

const TiketDetalle = (props) => {
  const { tiketDetalle } = props;
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [abrirEditar, setAbrirEditar] = useState(false);
  const [openEstado, setOpenEstado] = useState(false);
  const [openTecnico, setOpenTecnico] = useState(false);
  const [openPrioridad, setOpenPrioridad] = useState(false);

  const classes = useStyles();

  var factList = "";
  tiketDetalle.facturas.forEach((fac) => {
    factList = factList + " - " + fac;
  });

  var nom = tiketDetalle.nombre;
  if (tiketDetalle.solicitante != "" && tiketDetalle.solicitante != null) {
    nom = nom + " /" + tiketDetalle.solicitante;
  }

  const manejoEstado = () => {
    setOpenEstado(!openEstado);
  };

  const manejoTecnico = () => {
    setOpenTecnico(!openTecnico);
  };

  const manejoPrioridad = () => {
    setOpenPrioridad(!openPrioridad);
  };

  const manejoEditar = () => {
    setAbrirEditar(true);
  };

  const cerrarEditar = () => {
    setAbrirEditar(false);
  };

  const llenarDiagnostico = () => {
    return diagnosticos.map((diag) => {
      return (
        <div>
          {/****Tecnico asignado****/}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={2}
          >
            <IconDireccion />

            <Typography
              sx={{
                fontSize: 12,
                width: 300,
                fontWeight: 600,
                color: "#EC1B3B",
                marginLeft: 1,
              }}
            >
              Visita de Tecnico: {diag.tecnico}
            </Typography>
          </Grid>

          <Typography
            sx={{
              fontSize: 12,
              width: 100,
              fontWeight: 400,
              color: "#EC1B3B",
              marginLeft: 4.2,
              marginTop: -0.5,
            }}
          >
            {diag.fecha}
          </Typography>

          {/****Diagnostico****/}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={1}
            marginLeft={5}
          >
            <IconDireccion />

            <Typography
              sx={{
                fontSize: 12,
                width: 100,
                fontWeight: 600,
                color: "#EC1B3B",
                marginLeft: 1,
              }}
            >
              Diagnostico
            </Typography>
          </Grid>

          <Typography
            sx={{
              fontSize: 12,
              width: 400,
              textAlign: "justify",
              fontWeight: 500,
              color: "#3D3D3D",
              marginLeft: 9.2,
              marginTop: -0.5,
            }}
          >
            {diag.diagnostico}
          </Typography>

          {/****Repuestos****/}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={1}
            marginLeft={5}
          >
            <IconDireccion />

            <Typography
              sx={{
                fontSize: 12,
                width: 100,
                fontWeight: 600,
                color: "#EC1B3B",
                marginLeft: 1,
              }}
            >
              Repuestos
            </Typography>
          </Grid>
          {diag.repuestos.map((repuesto) => {
            return (
              <Typography
                sx={{
                  fontSize: 12,
                  width: 400,
                  textAlign: "justify",
                  fontWeight: 500,
                  color: "#3D3D3D",
                  marginLeft: 9.2,
                  marginTop: -0.5,
                }}
              >
                {repuesto}
              </Typography>
            );
          })}
        </div>
      );
    });
  };

  
  const llenarAnexos = () => {
    if (tiketDetalle.anexos != null) {
      return tiketDetalle.anexos.map((item) => {
        return (
          <Box sx={{ minWidth: 70, borderRadius: 2, margin: 1 }}>
            <img src={item} className={classes.img} onClick={() =>abrir_img(item)} />
          </Box>
        );
      });
    }
  };


  var configuracion_ventana = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function abrir_img(item) {
 window.open(item, "Pagina_CNN", configuracion_ventana);
}

  useEffect(() => {
    var array = [];
    var buscar = "none";
    if (tiketDetalle) {
      buscar = tiketDetalle.id;
    }

    fire
      .firestore()
      .collection("diagnostico")
      .where("tiket", "==", buscar)
      .get()
      .then((snap) => {
        snap.forEach((diag) => {
          const months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
          ];
          let current_datetime = diag.data().fecha.toDate();
          let formatted_date =
            current_datetime.getDate() +
            "-" +
            months[current_datetime.getMonth()] +
            "-" +
            current_datetime.getFullYear();
          var diagnostico = {
            tecnico: diag.data().tecnico,
            diagnostico: diag.data().diagnostico,
            repuestos: diag.data().repuestos,
            fecha: formatted_date,
          };
          array.push(diagnostico);
        });

        setDiagnosticos(array);
      });
  }, [tiketDetalle]);

  return (
    <div>
      <Box maxWidth sx={{ marginBottom: 4 }} color="#fffff">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid xs={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              padding={1.5}
            >
              {/****Edt Estado****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Avatar
                  onClick={(e) => {
                    manejoEstado(e);
                  }}
                  sx={{ width: 30, height: 30, backgroundColor: "#3D3D3D" }}
                >
                  <IconEdtEstado />
                </Avatar>

                <Slide
                  in={openEstado}
                  direction="right"
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <Box
                    backgroundColor="#C8C8C8"
                    paddingTop={1.2}
                    sx={{
                      borderRadius: 8,
                      width: 134,
                      height: 40,
                      marginLeft: -4.6,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: 600,
                        marginLeft: 3,
                        marginTop: 0.4,
                        textAlign: "center",
                      }}
                    >
                      Editar estado
                    </Typography>
                  </Box>
                </Slide>
              </Grid>

              {/****Edt Tecnico****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}
              >
                <Avatar
                  onClick={(e) => {
                    manejoTecnico(e);
                  }}
                  sx={{ width: 30, height: 30, backgroundColor: "#3D3D3D" }}
                >
                  <IconEdtTecnico />
                </Avatar>
                <Slide
                  in={openTecnico}
                  direction="right"
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <Box
                    backgroundColor="#C8C8C8"
                    paddingTop={1.2}
                    sx={{
                      borderRadius: 8,
                      width: 134,
                      height: 40,
                      marginLeft: -4.6,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: 600,
                        marginLeft: 3,
                        marginTop: -0.5,
                        textAlign: "center",
                      }}
                    >
                      Editar técnico asignado
                    </Typography>
                  </Box>
                </Slide>
              </Grid>

              {/****Edt Prioridad****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}
              >
                <Avatar
                  onClick={(e) => {
                    manejoPrioridad(e);
                  }}
                  sx={{ width: 30, height: 30, backgroundColor: "#3D3D3D" }}
                >
                  <IconEdtPrioridad />
                </Avatar>
                <Slide
                  in={openPrioridad}
                  direction="right"
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <Box
                    backgroundColor="#C8C8C8"
                    paddingTop={1.2}
                    sx={{
                      borderRadius: 8,
                      width: 134,
                      height: 40,
                      marginLeft: -4.6,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: 600,
                        marginLeft: 3,
                        marginTop: 0.4,
                        textAlign: "center",
                      }}
                    >
                      Prioridad
                    </Typography>
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={4}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <IconGrande />
            </Grid>
          </Grid>

          <Grid xs={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              padding={1.5}
              sx={{ marginTop: -10 }}
            >
              {/****Edt Estado****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="start"
                marginTop={2}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 16,
                    textAlign: "center",
                    marginRight: -2.5,
                    marginTop: 0.3,
                    width: 100,
                    color: "#EC1B3B",
                  }}
                >
                  Editar
                </Typography>

                <Avatar
                  onClick={(e) => {
                    manejoEditar(e);
                  }}
                  sx={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#ffffff",
                    boxShadow: 5,
                  }}
                >
                  <IconEdtEdt />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>

          {/***Parte Hoja****/}

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 13,
                textAlign: "start",
                marginLeft: 6,
                marginTop: 0.7,
                color: "#EC1B3B",
              }}
            >
              Facturas N° {factList}
              <Divider
                sx={{ marginLeft: -16, color: "#EC1B3B", border: 0.5 }}
              />
            </Typography>

            {/****Estado****/}
            <Box
              backgroundColor="#EC1B3B"
              borderRadius={0.3}
              paddingLeft={1}
              paddingRight={1}
              boxShadow={2}
              sx={{ marginLeft: 6, marginTop: 3 }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 0.7,
                  color: "#ffffff",
                  marginBottom: 0.6,
                }}
              >
                Estado: {tiketDetalle.estado}
              </Typography>
            </Box>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            marginTop={2}
          >
            {/****tipo, fecha, solicitante****/}

            <Box
              maxWidth
              sx={{
                marginTop: 2,
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                {/***tipo***/}

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
                        fontSize: 12,
                        fontWeight: 400,
                        minWidth: 120,
                        maxWidth: 120,
                        color: "#EC1B3B",
                        marginTop: -0.5,
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.tipo}
                    </Typography>
                  </Grid>
                </Grid>

                {/***Tab fecha****/}
                <Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconCalendario />

                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 400,
                        minWidth: 120,
                        maxWidth: 120,
                        color: "#EC1B3B",
                        marginTop: -0.5,
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.fechaCreacion}
                    </Typography>
                  </Grid>
                </Grid>

                {/****solicitante */}
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
                        fontSize: 12,
                        fontWeight: 400,
                        minWidth: 120,
                        maxWidth: 120,
                        color: "#EC1B3B",
                        marginTop: -0.5,
                        marginLeft: 1,
                      }}
                    >
                      {nom}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider
                sx={{
                  border: 0.1,
                  color: "#EC1B3B",
                  marginTop: 1,
                }}
              />
            </Box>

            {/****Maquina, Ciudad, Celular****/}
            <Box
              maxWidth
              sx={{
                marginTop: 2,
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                {/***direccion***/}

                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconDireccion />
                    <Typography
                      sx={{
                        fontSize: 10,
                        minWidth: 120,
                        maxWidth: 120,
                        fontWeight: 400,
                        color: "#727070",
                        fontStyle: "italic",
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.direccion}
                    </Typography>
                  </Grid>
                </Grid>

                {/***ciudad****/}
                <Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconCiudad />

                    <Typography
                      sx={{
                        fontSize: 10,
                        minWidth: 120,
                        maxWidth: 120,
                        fontWeight: 400,
                        color: "#727070",
                        fontStyle: "italic",
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.ciudad}
                    </Typography>
                  </Grid>
                </Grid>

                {/****celulares***/}
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconCelular />
                    <Typography
                      sx={{
                        fontSize: 10,
                        minWidth: 120,
                        maxWidth: 120,
                        fontWeight: 400,
                        color: "#727070",
                        fontStyle: "italic",
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.celularCliente} -{" "}
                      {tiketDetalle.celularSolicitante}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              marginTop={3}
              sx={{ marginTop: 4, paddingLeft: 2.2 }}
            >
              {/****Maquina****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconMaquina />

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#3D3D3D",
                    marginLeft: 2,
                  }}
                >
                  {tiketDetalle.idMaquina}
                </Typography>
              </Grid>

              {/****Detalle de Fallo****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <Iconofalla />

                <Typography
                  sx={{
                    fontSize: 12,
                    marginLeft: 3,
                    color: "#3D3D3D",
                  }}
                >
                  {tiketDetalle.falla}
                </Typography>
              </Grid>


              
              {/****Anexos****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                 {llenarAnexos()}

              </Grid>


              {/****Detalle de Tecnico****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <IconTecnico />

                <Typography
                  sx={{
                    fontSize: 12,
                    marginLeft: 2,
                    color: "#3D3D3D",
                  }}
                >
                  {"Tecnico Asignado: " + tiketDetalle.asignado}
                </Typography>
              </Grid>

              {/****Detalle de Tecnico****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <IconDiagnostico />

                <Typography
                  sx={{
                    fontSize: 12,
                    width: 200,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    marginLeft: 2.4,
                  }}
                >
                  Diagnostico
                </Typography>
              </Grid>

              {tiketDetalle ? llenarDiagnostico() : <div></div>}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Dialog
        fullWidth={true}
        open={abrirEditar}
        sx={{ justifyContent: "center" }}
        TransitionComponent={Grow}
        onClose={(e) => cerrarEditar(e)}
      >
        <PasosEdt tiketDetalle={tiketDetalle} />
      </Dialog>
    </div>
  );
};

export default TiketDetalle;
