import { Grid, Typography, Divider, Box, Dialog } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import IconoCompleto from "../IconosDetalle/IconoCompleto";
import IconoTipo from "../IconosDetalle/IconoTipo";
import TextoNivelDos from "./TextoNivelDos";
import TextoNivelUno from "./TextoNivelUno";
import IconoCalendario from "./../IconosDetalle/IconoCalendario";
import IconoSolicitante from "../IconosDetalle/IconoSolicitante";
import IconoCelular from "./../IconosDetalle/IconoCelular";
import IconoCiudad from "../IconosDetalle/IconoCiudad";
import IconoDireccion from "../IconosDetalle/IconoDireccion";
import TextoNivelTres from "./TextoNivelTres";
import IconoMaquina from "../IconosDetalle/IconoMaquina";
import Iconofalla from "../IconosDetalle/IconoFalla";
import IconoTecnico from "../IconosDetalle/IconoTecnico";
import ListaImagenes from "../ListaImagenes";
import DiagnosticoCardCliente from "./../DiagnosticoCardCliente";
import fire from "./../../fire";
import { diagnostico } from "./../../Entidades/diagnostico";
import IconoEditar from './../IconosDetalle/IconoEditar';
import { ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from './../../Temas/TemaFormu';
import Imprimible from './../Imprimible';

const TiketDetalleCompleto = (props) => {
  const { tiket } = props;
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [imprimir,setImprimir] = useState(false);

  const abrirImprimir =  () =>{
    console.log("imprimir");
    setImprimir(true);
  }

  const cerrarImprimir = () =>{
    setImprimir(false);
  }
  var fact = "";
  if (tiket.facturas != null && tiket.facturas.length > 0) {
    for (var i = 0; i < tiket.facturas.length; i++) {
      fact += " - " + tiket.facturas[i];
    }
  }

  useEffect(() => {
    var array = [];
    if (tiket.diagnosticos != null && tiket.diagnosticos.length > 0) {
      for (var i = 0; i < tiket.diagnosticos.length; i++) {
        fire
          .firestore()
          .collection("diagnosticos")
          .doc(tiket.diagnosticos[i])
          .get()
          .then((doc) => {
            var diagn = new diagnostico(doc);
            setDiagnosticos((array) => array.concat(diagn));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [tiket]);

  return (
    <div>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      sx={{ paddingLeft: 4, paddingRight: 4, paddingTop: 5 }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          position: "absolute",
          marginRight: 66,
          marginTop: -3.5,
          borderRadius: 1,
          boxShadow: 3,
          padding: 0.5
        }}
      >

        <IconoEditar/>
      </Box>

      <Box
        sx={{
          width: 30,
          height: 30,
          position: "absolute",
          marginRight: 56,
          marginTop: -3.5,
          borderRadius: 1,
          boxShadow: 3,
          padding: 0.5
        }}
        onClick={() => abrirImprimir()}
      >   <IconoEditar/></Box>
      {/****Encaebzado****/}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                color: "#EC1B3B",
              }}
            >
              {"Facturas N° " + fact}
              <Divider sx={{ borderTop: 2 }} />
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 500,
                color: "#EC1B3B",
                fontStyle: "italic",
              }}
            >
              {"Nit: " + tiket.nit}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-end"
          >
            <IconoCompleto />

            <Box
              sx={{
                backgroundColor: "#EC1B3B",
                borderRadius: 0.2,
                boxShadow: 1,
                paddingTop: 0.5,
                paddingBottom: 0.5,
                paddingLeft: 1,
                paddingRight: 1,
                marginTop: 1,
              }}
              fullWidth={false}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {"Estado:  " + tiket.estado}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/****Tipo Creacion Solicitante****/}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        sx={{ marginTop: 4 }}
      >
        <Grid item xs={4}>
          <TextoNivelUno
            titulo={"Tipo"}
            contenido={tiket.tipo}
            Icono={IconoTipo}
          />
        </Grid>
        <Grid item xs={4}>
          <TextoNivelUno
            titulo={"Fecha Creacion"}
            contenido={tiket.fechaCreacion}
            Icono={IconoCalendario}
          />
        </Grid>
        <Grid item xs={4}>
          <TextoNivelUno
            titulo={"Solicitante"}
            contenido={tiket.nombre}
            Icono={IconoSolicitante}
          />
        </Grid>
      </Grid>

      <Divider
        sx={{
          borderTop: 0.5,
          width: 530,
          color: "#E65D72 !important",
          marginTop: 1,



        }}
        fullWidth
      />

      {/****Direccion Ciudad Celular****/}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={4}>
          <TextoNivelDos
            titulo={"Direccion"}
            contenido={tiket.direccion}
            Icono={IconoDireccion}
          />
        </Grid>
        <Grid item xs={4}>
          <TextoNivelDos
            titulo={"Ciudad"}
            contenido={tiket.ciudad}
            Icono={IconoCiudad}
          />
        </Grid>
        <Grid item xs={4}>
          <TextoNivelDos
            titulo={"Celulares"}
            contenido={tiket.celularCliente}
            Icono={IconoCelular}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        sx={{ marginTop: 4 }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#EC1B3B",
            marginBottom: 2,
          }}
        >
          Detalle
        </Typography>
        {/***Detalles****/}
        <Box sx={{ marginLeft: 2 }}>
          <TextoNivelTres
            titulo={"Maquina"}
            contenido={tiket.idMaquina.replaceAll("_", " ")}
            Icono={IconoMaquina}
          />

          <Box sx={{ marginTop: 1 }} />

          <TextoNivelTres
            titulo={"Detalle Fallo"}
            contenido={tiket.falla}
            Icono={Iconofalla}
          />

          <Box sx={{ marginTop: 1 }} />
          <TextoNivelTres
            titulo={"Tecnico asignado"}
            contenido={tiket.asignado}
            Icono={IconoTecnico}
          />
        </Box>
      </Grid>

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        sx={{ marginTop: 2 }}
      >
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: "#EC1B3B",
            marginBottom: 2,
          }}
        >
          Imagenes Anexadas
        </Typography>

        <Box sx={{ marginLeft: 2 }}>
          <ListaImagenes imagenes={tiket.anexos} />
        </Box>

        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          sx={{ marginTop: 2 }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "#EC1B3B",
              marginBottom: 2,
            }}
          >
            Diagnosticos
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} fullWidth>
          {diagnosticos.map((diag) => {
            return <DiagnosticoCardCliente diag={diag} />;
          })}
        </Grid>
      </Grid>
    </Grid>

    <ThemeProvider theme={TemaFormu}>
    <Dialog fullScreen open={imprimir} elevation={0} onClose={cerrarImprimir} sx={{boxShadow: 0}} >

      <Imprimible tiket={tiket} cerrarImprimir={cerrarImprimir} />
      
    </Dialog>
    </ThemeProvider>

    </div>
  );
};

export default TiketDetalleCompleto;
