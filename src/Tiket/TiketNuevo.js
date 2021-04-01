import { React, useState, useEffect } from "react";
import IconCelular from "./../Iconos/iccelular";
import IconCiudad from "./../Iconos/icciudad";
import IconDireccion from "./../Iconos/icdireccion";
import IconGrande from "./../Iconos/ictecnigrande";
import IconCalendar from "./../Iconos/iccalendar";
import IconMaquina from './../Iconos/icMaquina';
import IconFalla from './../Iconos/icFalla';
import IconSolicitante from "./../Iconos/icsolicitante";
import fire from "../fire";
import PasosEdt from "../EdtTiket/PasosEdt";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Dialog,
  Grow,
} from "@material-ui/core";

const TiketCliente = (props) => {
  const { tiketDetalle } = props;
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [abrirEditar, setAbrirEditar] = useState(false);
  const [openEstado, setOpenEstado] = useState(false);
  const [openTecnico, setOpenTecnico] = useState(false);
  const [openPrioridad, setOpenPrioridad] = useState(false);

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

 /* const llenarMaquinas = () => {
    return tiketDetalle.maquinas.map((maquina) => {
      return (
        <div>
          <Typography
            sx={{
              fontSize: 12,
              width: 400,
              fontWeight: 500,
              color: "#3D3D3D",
              marginLeft: 8.2,
            }}
          >
            {maquina}
          </Typography>
        </div>
      );
    });
  };*/

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
            "ENE",
            "FEB",
            "MAR",
            "ABR",
            "MAY",
            "JUN",
            "JUL",
            "AGO",
            "SEP",
            "OCT",
            "NOV",
            "DIC",
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
      <Box fullWidth color="#fffff" sx={{ paddingBottom: 10, }}>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
       
        >
          {/****Icono Tecniprint****/}

          <Box sx={{ marginTop: 2 }}>
            <IconGrande />
          </Box>

          {/***Parte Hoja****/}

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginTop: 4 }}
          >
            {/****Estado****/}
            <Box
              backgroundColor="#EC1B3B"
              borderRadius={0.8}
              paddingLeft={1}
              paddingRight={1}
              boxShadow={2}
              sx={{ marginRight: 3, marginTop: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "center",
                  marginTop: 0.7,
                  color: "#ffffff",
                  marginBottom: 0.8,
                }}
              >
                Numero:  {tiketDetalle.id.toUpperCase()}
              </Typography>
            </Box>

            {/****tAB Aolicitante */}
            <IconSolicitante />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 0 }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  marginTop: 0,
                  width: 150,
                }}
              >
                Solicitante
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  width: 150,
                  maxLines: 1,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#EC1B3B",
                  marginTop: 0,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {tiketDetalle.nombre}
              </Typography>
            </Grid>

            {/***Tab fecha****/}
            <IconCalendar />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 0 }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  marginTop: 0,
                  width: 100,
                }}
              >
                Fecha de Creacion
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,

                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#EC1B3B",
                }}
              >
                {tiketDetalle.fechaCreacion}
              </Typography>
            </Grid>
          </Grid>

          <Divider
            sx={{
              width: 562,             
              borderColor: "#EC1B3B",
              marginTop: 2,
            }}
          />

          {/****direccion ciudad celular****/}

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginRight={6}
            marginTop={1}
            sx={{ paddingLeft: 2, paddingRight: 2, marginTop: 3 }}
          >
            {/***Tab direccion****/}

            <IconDireccion />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 0 }}
            >
              <Typography
                sx={{
                  fontSize: 12,

                  maxHeight: 40,
                  fontWeight: 600,
                  color: "#727070",
                  marginTop: -0.5,
                }}
              >
                Direccion
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,

                  maxWidth: 150,
                  color: "#727070",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontStyle: "italic",
                  marginTop: 0,
                }}
              >
                {tiketDetalle.direccion}
              </Typography>
            </Grid>

            {/****tAB ciudad */}
            <IconCiudad />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 0 }}
            >
              <Typography
                sx={{
                  fontSize: 12,

                  maxHeight: 40,
                  fontWeight: 600,
                  color: "#727070",
                  marginTop: -0.5,
                }}
              >
                Ciudad
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  width: 100,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#727070",
                  marginTop: 0,
                }}
              >
                {tiketDetalle.ciudad}
              </Typography>
            </Grid>

            {/****tAB celular */}
            <IconCelular />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 0 }}
            >
              <Typography
                sx={{
                  fontSize: 12,

                  maxHeight: 40,
                  fontWeight: 600,
                  color: "#727070",
                  marginTop: -0.5,
                }}
              >
                Contacto
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,                  
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#727070",
                  marginTop: 0,
                }}
              >
                {tiketDetalle.celular} - {tiketDetalle.celularDos}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            sx={{
              color: "#EC1B3B",
              fontSize: 16,
              fontWeight: 600,
              marginTop: 2,
            }}
          >
            Detalle
          </Typography>

          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            marginTop={3}
          >
            {/****Maquina****/}
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{marginBottom: 2}}
            
            >
              <IconMaquina/>

              <Typography
                sx={{
                  fontSize: 12,
                  width: 100,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  marginLeft: 3,
                }}
              >
                Máquina
              </Typography>
            </Grid>

            {}

            {/****Detalle de Fallo****/}
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              marginTop={2}
              sx={{marginTop: 4}}
            >
              <IconFalla />

              <Typography
                sx={{
                  fontSize: 12,
                  width: 100,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  marginLeft: 3,
                  marginTop: -0.5,
                }}
              >
                Detalle de Fallo
              </Typography>
            </Grid>

            <Typography
              sx={{
                fontSize: 12,
                width: 500,
                fontWeight: 500,
                color: "#3D3D3D",
                marginLeft: 8,
                marginTop: 2
              }}
            >
              {tiketDetalle.falla}
            </Typography>

            {tiketDetalle ? llenarDiagnostico() : <div></div>}
          </Grid>
        </Grid>
      </Box>

     
    </div>
  );
};

export default TiketCliente;
