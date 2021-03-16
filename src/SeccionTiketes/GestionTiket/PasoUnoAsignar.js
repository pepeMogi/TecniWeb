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
import IcAbajoCuatro from "./../../Iconos/icFabajoCuatro";
import IcTipo from "./../../Iconos/ictipodtik";

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
    maxHeight: 280,
    height: 280,
  },
}));

const PasoUnoAsignar = (props) => {
  const { avanzar, retroceder, setAsignado } = props;

  const [tecnicos, setTecnicos] = useState([]);

  const asignarTecnico = (nombre) => {
    setAsignado(nombre);
    avanzar();
  };

  const mostrarLista = () => {
    return tecnicos.map((tecni) => {
      return (
        <ListItem onClick={(e) => asignarTecnico(tecni.nombre)} button>
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
                    {tecni.nombre}
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
                  sx={{ fontSize: 12, fontStyle: "italic",  }}
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
        snap.forEach((tec) => {
          var tecnico = {
            nombre: tec.data().nombre,
            cc: tec.data().cc,
            tipo: tec.data().tipo,
            img: tec.data().img,
          };

          array.push(tecnico);
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
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {/****Btn Atras****/}
              <Button
                variant="contained"
                color="secondary"
                onClick={retroceder}
                className={classes.botonAtras}
                sx={{ marginTop: 1, fontSize: 14, marginRight: 0 }}
              >
                Atras
              </Button>
              <IcAbajoCuatro />
            </Grid>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoUnoAsignar;
