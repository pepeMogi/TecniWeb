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
        <Box sx={{ borderRadius: 1, boxShadow: 2, padding: 1.5, width: 500, marginBottom: 2 }}>
          <Typography
            sx={{
              fontSize: 13,
              fontStyle: "italic",
              fontWeight: 500,
              color: "#EC1B3B",
              marginBottom: 1,
            }}
          >
            Para facturar
          </Typography>

          {repFacturar.map((rep) => {
            return (
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                sx={{ marginTop: -2 }}
              >
                <Typography sx={{ width: 430, fontSize: 14, fontWeight: 500 }}>
                  {rep.substring(3)}
                </Typography>
                <Checkbox />
              </Grid>
            );
          })}
        </Box>
      </div>
    );
  };


  const llenarGarantia = () => {
    return (
      <div>
        <Box sx={{ borderRadius: 1, boxShadow: 2, padding: 1.5, width: 500, marginBottom: 2 }}>
          <Typography
            sx={{
              fontSize: 13,
              fontStyle: "italic",
              fontWeight: 500,
              color: "#EC1B3B",
              marginBottom: 1,
            }}
          >
            Por garantia
          </Typography>

          {repGarantia.map((rep) => {
            return (
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                sx={{ marginTop: -2 }}
              >
                <Typography sx={{ width: 430, fontSize: 14, fontWeight: 500 }}>
                  {rep.substring(3)}
                </Typography>
                <Checkbox />
              </Grid>
            );
          })}
        </Box>
      </div>
    );
  };

  const llenarCotizacion = () => {
    return (
      <div>
        <Box sx={{ borderRadius: 1, boxShadow: 2, padding: 1.5, width: 500, marginBottom: 2 }}>
          <Typography
            sx={{
              fontSize: 13,
              fontStyle: "italic",
              fontWeight: 500,
              color: "#EC1B3B",
              marginBottom: 1,
            }}
          >
            Por cotizacion
          </Typography>

          {repCotizacion.map((rep) => {
            return (
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                sx={{ marginTop: 0.8 }}
              >
                <Typography sx={{ width: 430, fontSize: 14, fontWeight: 500 }}>
                  {rep.substring(3)}
                </Typography>                
              </Grid>
            );
          })}
        </Box>
      </div>
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
