import { React, useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Dialog } from "@material-ui/core";
import TemaDialog from "../Temas/TemaDialog";
import { ThemeProvider } from "@material-ui/core/styles";
import fire from "./../fire";
import PasosDiagnostico from "./DiagnosticarTiket/PasosDiagnostico";

const getFecha = (times) => {
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
  let current_datetime = times.toDate();
  let formatted_date =
    current_datetime.getDate() +
    "-" +
    months[current_datetime.getMonth()] +
    "-" +
    current_datetime.getFullYear();

  return formatted_date;
};

const TikestPropios = () => {
  const [tikets, setTikets] = useState([]);
  const [openDiagnostico, setOpenDiagnostico] = useState(false);
  const [tiketDiag,setTiketDiag] = useState("");
  const [num, setNum] = useState("");

  const manejoDiagnostico = (tik) => {
    setTiketDiag(tik);
    setOpenDiagnostico(true);
  };

  
  const Tikets = (props) => {
    const { tik } = props;

    var text = "";
    for (var i = 0; i < tik.maquinas.length; i++) {
      text += tik.maquinas[0] + "\n";
    }

    return (
      <div>
        <Box
          sx={{
            width: 300,
            borderRadius: 2,
            boxShadow: 4,
            marginTop: 2,
            marginLeft: 2,
            padding: 2,
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Urgente</Typography>
              <Typography>Estado</Typography>
            </Grid>

            <Typography>{tik.id}</Typography>
            <Typography>
              Solicitado por:
              {tik.nombre}
            </Typography>
            <Typography>Direccion: {tik.direccion}</Typography>
            <Typography>Ciudad: {tik.ciudad} </Typography>
            <Typography>Maquinas: </Typography>
            <Typography sx={{ marginLeft: 4 }}>{text}</Typography>
            <Typography>Falla: {tik.falla}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => manejoDiagnostico(tik)}
            >
              Diagnosticar
            </Button>
          </Grid>
        </Box>
      </div>
    );
  };



  useEffect(() => {
    fire
      .firestore()
      .collection("tikets")
     //.where("asignado", "==", "Luis Rosero")
      .onSnapshot((snap) => {
        var array = [];
        setTikets(array);
        snap.forEach((tik) => {
          var tikete = {
            id: tik.data().id,
            numero: tik.data().id,
            nombre: tik.data().nombre,
            tipo: tik.data().tipo,
            fechaCreacion: getFecha(tik.data().fechaCreacion),
            estado: tik.data().estado,
            direccion: tik.data().direccion,
            celular: tik.data().numero,
            ciudad: tik.data().ciudad,
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

          setTikets((array) => array.concat(tikete));
          array.push(tikete);
        });
        setNum(array.length);
        console.log("numero=>" + num);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        {/****Boton superior****/}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            sx={{
              width: 500,
              height: 62,
              borderRadius: 2.5,
              border: 2,
              borderColor: "#F58D9D",
              backgroundColor: "#ffffff",
              boxShadow: 2,
              padding: 0.5,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-start"
              alignItems="center"
            >
              <Typography sx={{ marginLeft: 4 }}>Nombre del tecnico</Typography>
              <Typography sx={{ marginLeft: 4 }}>tikest asignados</Typography>
              <Typography sx={{ marginLeft: 4 }}>Bodega #5</Typography>
            </Grid>
          </Box>
        </Grid>

        {/****Tabla de Tikets****/}

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {tikets.map((tik) => {
            return <Tikets tik={tik} />;
          })}
        </Grid>
      </Grid>

      {/****Detalle Tikets****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog open={openDiagnostico}>
          <PasosDiagnostico tiketDiag={tiketDiag}  />
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TikestPropios;
