import {
  Grid,
  Button,
  Paper,
  Typography,
  Box,
  Checkbox,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableBody,
  TableHead,
} from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Completo } from "./../../Componentes/NavegaFormu";

const PasoDosRepuestos = (props) => {
  const { avanzar, retroceder, diagnosticoLocal } = props;
  const [repFacturar, setRepFacturar] = useState([]);
  const [repCotizacion, setRepCotizacion] = useState([]);
  const [repGarantia, setRepGarantia] = useState([]);

  const siguiente = () => {
    avanzar();
  };

  const atras = () => {
    retroceder();
  };

  const Repuesto = (props) => {
    return (
      <Box maxWidth>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          sx={{ backgroundColor: "pink", width: 400 }}
        >
          <Typography sx={{ width: 20 }}>1</Typography>

          <Checkbox>Hola</Checkbox>
        </Grid>
      </Box>
    );
  };

  const llenarFacturar = () => {
    return (
      <div>
        <TableContainer component={Paper} >
          <Table size="small" aria-label="a dense table"  >
            <TableHead>
              <TableRow sx={{backgroundColor: "#C8C8C8"}} >
                <TableCell>Siigo</TableCell>
                <TableCell align="left">Cant.</TableCell>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repFacturar.map((row) => (
                <TableRow key={row.referencia}>
                  <TableCell component="th" scope="row">
                    {row.referencia}
                  </TableCell>
                  <TableCell align="left"> {row.cantidad}</TableCell>
                  <TableCell align="left"> {row.nombre}</TableCell>
                  <TableCell align="right"> {row.valor}</TableCell>
                  <TableCell align="right"> <Checkbox sx={{margin: -0.8}} /> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  
  );
  };

  const llenarGarantia = () => {
    return (
      <div>
        <TableContainer component={Paper} >
          <Table size="small" aria-label="a dense table"  >
            <TableHead>
              <TableRow sx={{backgroundColor: "#C8C8C8"}} >
                <TableCell>Siigo</TableCell>
                <TableCell align="left">Cant.</TableCell>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repGarantia.map((row) => (
                <TableRow key={row.referencia}>
                  <TableCell component="th" scope="row">
                    {row.referencia}
                  </TableCell>
                  <TableCell align="left"> {row.cantidad}</TableCell>
                  <TableCell align="left"> {row.nombre}</TableCell>
                  <TableCell align="right"> {row.valor}</TableCell>
                  <TableCell align="right"> <Checkbox sx={{margin: -0.8}} /> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  
   );
  };

  const llenarCotizacion = () => {
    return (
      <div>
      <TableContainer component={Paper} >
        <Table size="small" aria-label="a dense table"  >
          <TableHead>
            <TableRow sx={{backgroundColor: "#C8C8C8"}} >
              <TableCell>Siigo</TableCell>
              <TableCell align="left">Cant.</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repCotizacion.map((row) => (
              <TableRow key={row.referencia}>
                <TableCell component="th" scope="row">
                  {row.referencia}
                </TableCell>
                <TableCell align="left"> {row.cantidad}</TableCell>
                <TableCell align="left"> {row.nombre}</TableCell>
                <TableCell align="right"> {row.valor}</TableCell>
                <TableCell align="right"> <Checkbox sx={{margin: -0.8}} /> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

   );
  };

  useEffect(() => {
    var facurar = [];
    var cotizacion = [];
    var garantia = [];

    diagnosticoLocal.repuestos.forEach((elm) => {
      console.log("ordenando");
      if (elm.tipo === "facturable") {
        facurar.push(elm);
      } else if (elm.tipo === "cotizacion") {
        cotizacion.push(elm);
      } else if (elm.tipo === "garantia") {
        garantia.push(elm);
      }
    });

    setRepFacturar(facurar);
    setRepGarantia(garantia);
    setRepCotizacion(cotizacion);
  }, []);

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Paper
            elevation={0}
            sx={{ borderRadius: 5, width: 500, height: 330 }}
          >
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              {/***Contenido de Formulario****/}

              {repFacturar.length > 0 ? llenarFacturar() : ""}

              {repGarantia.length > 0 ? llenarGarantia() : ""}

              {repCotizacion.length > 0 ? llenarCotizacion() : ""}
            </Grid>
          </Paper>

          <Completo siguiente={siguiente} atras={atras} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoDosRepuestos;
