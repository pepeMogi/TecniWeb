import { Grid, Button, Paper, Container } from "@material-ui/core";
import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "../../Temas/TemaFormu";
import IcAbajoDos from "../../Iconos/icFabajoDos";
import { Isquierdo } from "../../Componentes/NavegaFormu";

const useStyles = makeStyles((theme) => ({
  editDialogLar: {
    height: 40,
    borderRadius: 10,
    width: 320,
    padding: 15,
    borderWidth: 10,
  },
  editDialog: {
    height: 40,
    borderRadius: 10,
    width: 250,
    padding: 15,
    borderWidth: 10,
  },
  paperUno: {
    height: 350,
    width: 500,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  boton: {
    width: 190,
    height: 50,
  },

  botonAtras: {
    width: 120,
    height: 40,
  },

  paperTiket: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },

  gridLogin: {
    padding: 50,
  },

  paperLogin: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    margin: 25,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PasoDosTipo = (props) => {
  const { avanzar, setTipo, retroceder } = props;

  const insertarCategoria = (cat) => {
    setTipo(cat);
    avanzar();
  };

  /******Diseño*******/

  const classes = useStyles();
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
              {/****Btn Facturable****/}
              <Button
                variant="contained"
                color="primary"
                onClick={() => insertarCategoria("Facturable")}
                className={classes.boton}
                sx={{ marginTop: 4, fontSize: 16 }}
              >
                Facturable
              </Button>
              {/****Btn Garantia****/}
              <Button
                variant="contained"
                color="primary"
                onClick={() => insertarCategoria("Garantia")}
                className={classes.boton}
                sx={{ marginTop: 4, fontSize: 16 }}
              >
                Garantia
              </Button>

              {/****Btn Instalación****/}
              <Button
                variant="contained"
                color="primary"
                onClick={() => insertarCategoria("Instalacion")}
                className={classes.boton}
                sx={{ marginTop: 4, fontSize: 16, marginBottom: 8 }}
              >
                Instalación
              </Button>
              <Isquierdo atras={retroceder} />
            </Grid>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoDosTipo;
