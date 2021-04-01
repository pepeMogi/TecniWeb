import {
  Grid,
  Button,
  Paper,
  Avatar,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "./../../fire";
import TemaFormu from "./../../Temas/TemaFormu";
import IcTipo from "./../../Iconos/ictipodtik";
import { Isquierdo } from "../../Componentes/NavegaFormu";
import { tecnico } from "../../Entidades/tecnico";

const useStyles = makeStyles((theme) => ({
  boton: {
    width: 190,
    height: 50,
  },

  botonAtras: {
    width: 120,
    height: 40,
  },
  root: {
    position: "relative",
    overflow: "auto", // para que virtualize la lista
    maxHeight: 305,
    minHeight: 305,
    height: 280,
  },
}));

const PasoUnoAsignar = (props) => {
  const { avanzar, cerrarGestion, setAsignado, setTecnico } = props;

  const [tecnicos, setTecnicos] = useState([]);

  const asignarTecnico = (tecni) => {
    setAsignado(tecni.alias);
    setTecnico(tecni)
    avanzar();
  };

  const mostrarLista = () => {
    return tecnicos.map((tecni) => {
      return (
        <ListItem onClick={(e) => asignarTecnico(tecni)} button>
          <Box boxShadow={0} width={450} borderRadius={1} padding={0}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Avatar
                alt="Remy Sharp"
                src={tecni.img}
                sx={{ width: 56, height: 56, marginRight: 2 }}
              />

              <div>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{
                      maxWidth: 210,
                      width: 210,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#3D3D3D",
                      marginTop: -1,
                    }}
                  >
                    {tecni.alias}
                  </Typography>

                  <Typography
                    color="primary"
                    sx={{
                      maxWidth: 210,
                      width: 210,
                      fontSize: 12,
                      fontStyle: "italic",
                    }}
                  >
                    {tecni.cc}
                  </Typography>
                </Grid>
              </div>

              <div>
                <IcTipo />
              </div>
              <div>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#3D3D3D",
                    marginTop: -1,
                  }}
                >
                  Tipo de Tecnico
                </Typography>

                <Typography
                  color="primary"
                  sx={{ fontSize: 12, fontStyle: "italic" }}
                >
                  {tecni.tipo}
                </Typography>
              </div>
            </Grid>

            <Divider sx={{ width: 450, border: 0.5, marginTop: 1 }} />
          </Box>
        </ListItem>
      );
    });
  };

  const classes = useStyles();

  useEffect(() => {
    var array = [];
    fire
      .firestore()
      .collection("tecnicos")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var tecni = new tecnico(doc)
          array.push(tecni);
        });
        setTecnicos(array);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper
            className={classes.paperUno}
            elevation={0}
            sx={{ borderRadius: 5 }}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {/****Lista de Maquinas****/}
              <List className={classes.root}>{mostrarLista()}</List>

              
            <Isquierdo atras={cerrarGestion} />
            </Grid>

          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoUnoAsignar;
