import {
  Grid,
  Button,
  Paper,
  Typography,
  Box,
  Checkbox,
} from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Completo } from "./../../Componentes/NavegaFormu";

const PasoDosRepuestos = (props) => {
  const { avanzar, retroceder, tik, diagnosticoLocal } = props;
  const [repuestos, setRepuestos] = useState([]);
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

  useEffect(() => {
    var facurar = [];
    var cotizacion = [];
    var garantia = [];

    diagnosticoLocal.repuestos.forEach((elm) => {
      console.log("ordenando");
      if (elm.substring(0, 3) === "Fac") {
        facurar.push(elm);
      } else if (elm.substring(0, 3) === "Cot") {
        cotizacion.push(elm);
      } else if (elm.substring(0, 3) === "Gar") {
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
         alignItems="flex-start"
            >
              {/***Contenido de Formulario****/}

              {repFacturar.length > 0 ? "hola" : ""}
              {repFacturar.map((rep) => {
                return (
                  <Box sx={{ boxShadow: 2, padding: 1, borderRadius: 1 }}>
                    <Typography>{rep}</Typography>
                  </Box>
                );
              })}

              {repGarantia.length > 0 ? "hola" : ""}
              {repGarantia.map((rep) => {
                return (
                  <Box sx={{ boxShadow: 2, padding: 1, borderRadius: 1 }}>
                    <Typography>{rep}</Typography>
                  </Box>
                );
              })}

              

              {repCotizacion.length > 0 ? "hola" : ""}
              {repCotizacion.map((rep) => {
                return (
                  <Box sx={{ boxShadow: 2, padding: 1, borderRadius: 1 }}>
                    <Typography>{rep}</Typography>
                  </Box>
                );
              })}
            </Grid>
          </Paper>

          <Completo siguiente={siguiente} atras={atras} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoDosRepuestos;
