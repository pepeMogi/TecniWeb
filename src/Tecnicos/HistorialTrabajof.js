import { React, useState, useEffect } from "react";
import {
  Box,
  Divider,
  Grid,
  Skeleton,
  Typography,
  Avatar,
  Dialog, 
} from "@material-ui/core";
import fire from "../fire";
import IconHistorial from "./../Iconos/ichistorial";
import IconCalendar from "./../Iconos/iccalendar";
import IconTipo from "./../Iconos/ictipo";
import IconSolicitante from "./../Iconos/icsolicitante";
import IconEstado from "./../Iconos/icestado";
import TemaDialog from "../Temas/TemaDialog";
import Tiket from '../Tiket/Tiket';

import {
  makeStyles,
  ThemeProvider, 
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  hideLastBorder: {
    height: 74,
    backgroundColor: "#ffffff",
    borderSpacing: "10px !important",
    borderCollapse: "separate !important",
    borderColor: "#EC1B3B",
    borderBlockStart: 15,
    marginTop: 10,
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    "&:hover": {
      backgroundColor: "#EBD7D7 !important",
    },
  },

  rowTable: {
    borderColor: "#F58C9C !important",    
    "&:hover": {
      backgroundColor: "#EBD7D7 !important",      
      
    },
  },
});

const llenarEsqueleto = () => {
  const array = [0, 1, 2, 3];

  return array.map(() => {
    return (
      <div>
        <Box
          width={200}
          height={64}
          boxShadow={3}
          border={1}
          borderColor={"#F28A9A"}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: 8,
            marginRight: 10,
            padding: 0.5,
            marginBottom: 3,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid xs={4}>
              <Skeleton variant="circular" width={54} height={54} />
            </Grid>

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={80} />
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </div>
    );
  });
};

const HistorialTrabajo = () => {
  const [open, setOpen] = useState(false);
  const [escogido, setEscogido] = useState(false);
  const [openTikets, setOpenTikets] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [tiketDetalle, setTiketeDetalle] = useState("");
  
  const [nombre, setNombre] = useState("");
  const [tecnicos, setTecnicos] = useState([]);
  const [tikets, setTikets] = useState([]);

  const classes = useStyles();




  const manejoTecnicos = (tecnico) => {
    console.log(tecnico);
    setNombre(tecnico);
    setEscogido(true);
  };

  const llenarEscogido = () => {
    return (
      <Grid item xs={12}>
        <Box
          width={200}
          height={64}
          boxShadow={3}
          border={1}
          sx={{
            backgroundColor: "#3D3D3D",
            borderRadius: 8,
            marginTop: 3,
            padding: 0.5,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid xs={4}>
              <IconHistorial />
            </Grid>

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#ffffff",
                }}
              >
                {nombre}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  fontStyle: "italic",
                  fontWeight: 400,
                  marginTop: -0.5,
                  color: "#ffffff",
                }}
              >
                Historial
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    );
  };

  const manejoClick = (tikete) => {
    setTiketeDetalle(tikete);
    setOpenDialog(true);
  };

  const manejoCerrarDialog = () => {
    setOpenDialog(false);
  };

  const llenarTikets = () => {
    return tikets.map((tik) => {
      return (
        <Box
          className={classes.rowTable}
          backgroundColor="#ffffff"
          marginTop={2}
          borderRadius={2}
          border={1}
          height={75}
          boxShadow={4}
          onClick={(e) => manejoClick(tik)}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            paddingTop={2}
            paddingRight={2}
          >
            <Typography
            
              sx={{
                fontWeight: 500,
                fontSize: 16,
                marginLeft: 1,
                width: 100,
                color: "#3D3D3D",
              }}
            >
              {tik.numero.toUpperCase()}
            </Typography>

            {/***Tab fecha****/}
            <IconCalendar />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 3 }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  fontStyle: "italic",
                  marginTop: 0,
                  width: 100,
                }}
              >
                Fecha de Creacion
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  width: 150,
                  fontWeight: 700,
                  color: "#3D3D3D",
                  marginTop: -0.5,
                }}
              >
                {tik.fechaCreacion}
              </Typography>
            </Grid>

            {/****tAB Aolicitante */}
            <IconSolicitante />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 3 }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  fontStyle: "italic",
                  marginTop: 0,
                  width: 100,
                }}
              >
                Solicitante
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  width: 250,
                  fontWeight: 700,
                  color: "#3D3D3D",
                  marginTop: -0.5,
                }}
              >
                {tik.nombre}
              </Typography>
            </Grid>

            {/****Tab Tipo****/}
            <IconTipo />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 3 }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#EC1B3B",
                  fontStyle: "italic",
                  marginTop: -0.2,
                  width: 100,
                }}
              >
                Tipo
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  width: 150,
                  fontWeight: 700,
                  color: "#3D3D3D",
                  marginTop: -0.5,
                }}
              >
                {tik.tipo}
              </Typography>
            </Grid>

            {/****Tab Estado****/}
            <IconEstado />

            <Grid
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ marginLeft: 3 }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#212121",
                  fontStyle: "italic",
                  marginTop: 0,
                  width: 100,
                  textAlign: "end",
                }}
              >
                Estado
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  width: 100,
                  fontWeight: 700,
                  color: "#3D3D3D",
                  marginTop: -0.5,
                  textAlign: "end",
                }}
              >
                {tik.estado}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      );
    });
  };

  const llenarTecnicos = () => {
    return tecnicos.map((tecni) => {
      return (
        <div key={tecni.nombre} onClick={(e) => manejoTecnicos(tecni.nombre)}>
          <Box
            width={200}
            height={64}
            boxShadow={3}
            border={1}
            borderColor={"#F28A9A"}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 8,
              marginRight: 10,
              padding: 0.5,
              marginBottom: 3,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid xs={4}>
                <Avatar sx={{ height: 54, width: 54 }}> Lr </Avatar>
              </Grid>

              <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 1 }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  {" "}
                  {tecni.nombre}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#EC1B3B",
                    fontStyle: "italic",
                    marginTop: -0.5,
                  }}
                >
                  {" "}
                  {tecni.tipo}{" "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </div>
      );
    });
  };


 
 
  useEffect(() => {
    var array = new Array();
    fire
      .firestore()
      .collection("tecnicos")
      .get()
      .then((documentos) => {
        documentos.forEach((tecnico) => {
          var tecni = {
            nombre: tecnico.data().nombre,
            tipo: tecnico.data().tipo,
          };

          array.push(tecni);
        });

        setTecnicos(array);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const array = new Array();
    fire
      .firestore()
      .collection("tikets")
      .where("asignado", "==", nombre)
      .get()
      .then((documentos) => {
        documentos.forEach((tik) => {
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
          let current_datetime = tik.data().fechaCreacion.toDate();
          let formatted_date =
            current_datetime.getDate() +
            "-" +
            months[current_datetime.getMonth()] +
            "-" +
            current_datetime.getFullYear();

          var tikete = {
            id: tik.data().id,
            numero: tik.data().id,
            nombre: tik.data().nombre,
            tipo: tik.data().tipo,
            fechaCreacion: formatted_date,
            estado: tik.data().estado,
            direccion: tik.data().direccion,
            celular: tik.data().numero,
            ciudad: tik.data().cuidad,
            factura: tik.data().factura,
            maquinas: tik.data().maquinas,
            falla: tik.data().falla,
            asignado: tik.data().asignado,
            email: tik.data().email,
            anexos: tik.data().anexos,
            idCliente: tik.data().idCliente,
            legalizacion: tik.data().legalizacion,
            fecTimestamp: tik.data().fechaCreacion,
            
          };

          console.log(tikete.maquinas);

          array.push(tikete);
          console.log(tik.data().nombre);
        });

        setTikets(array);
        setOpenTikets(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nombre]);

  return (
    <div>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          {open ? llenarTecnicos() : llenarEsqueleto()}

          {escogido ? llenarEscogido() : <div></div>}
        </Grid>

        <Grid item xs={12} paddingLeft={12} paddingRight={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {openTikets ? llenarTikets() : <div></div>}
          </Grid>
        </Grid>
      </Grid>

      <ThemeProvider theme={TemaDialog}>
        <Dialog open={openDialog} onClose={manejoCerrarDialog}>

          <Tiket tiketDetalle={tiketDetalle}/>

     
        </Dialog>
      </ThemeProvider>
    
    
    </div>
  );
};

export default HistorialTrabajo;
