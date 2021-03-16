import { Grid, Button, Paper, Container } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "../Temas/TemaFormu";
import IcAbajoCuatro from "../Iconos/icFabajoCuatro";

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

const PasoDosf = (props) => {
  const { avanzar, setTipo, tipo, retroceder } = props;
  const [colorREP, setColorREP] = useState("primary");
  const [colorREV, setColorREV] = useState("primary");
  const [colorI, setColorI] = useState("primary");
  const [colorM, setColorM] = useState("primary");
  const [colorE, setColorE] = useState("primary");
  const [siguiente, setSiguiente] = useState(false);

  const insertarCategoria = (cat) => {
    setTipo(cat);
    //avanzar();
  };

  /******Diseño*******/

  const classes = useStyles();

  useEffect(() => {
    console.log(tipo);
    switch (tipo) {
      case "mantenimiento":
        setColorE("primary");
        setColorI("primary");
        setColorREP("primary");
        setColorREV("primary");
        setColorM("secondary");
        break;
      case "equipo":
        setColorE("secondary");
        setColorI("primary");
        setColorREP("primary");
        setColorREV("primary");
        setColorM("primary");
        break;
      case "instalacion":
        setColorE("primary");
        setColorI("secondary");
        setColorREP("primary");
        setColorREV("primary");
        setColorM("primary");
        break;
      case "reparacion":
        setColorE("primary");
        setColorI("primary");
        setColorREP("secondary");
        setColorREV("primary");
        setColorM("primary");
        break;
      case "revision":
        setColorE("primary");
        setColorI("primary");
        setColorREP("primary");
        setColorREV("secondary");
        setColorM("primary");
        break;
    }
  }, [tipo]);
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
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Container sx={{ marginLeft: 2 }}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={6} sm={6}>
                    {/****Btn Mantenimiento****/}
                    <Button
                      variant="contained"
                      color={colorM}
                      onClick={() => insertarCategoria("mantenimiento")}
                      className={classes.boton}
                      sx={{ marginTop: 4, fontSize: 16 }}
                    >
                      Mantenimiento
                    </Button>
                    {/****Btn Revisión****/}
                    <Button
                      variant="contained"
                      color={colorREV}
                      onClick={() => insertarCategoria("revision")}
                      className={classes.boton}
                      sx={{ marginTop: 4, fontSize: 16 }}
                    >
                      Revisión
                    </Button>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    {/****Btn Instalación****/}
                    <Button
                      variant="contained"
                      color={colorI}
                      onClick={() => insertarCategoria("instalacion")}
                      className={classes.boton}
                      sx={{ marginTop: 4, fontSize: 16 }}
                    >
                      Instalación
                    </Button>
                    {/****Btn Equipo****/}
                    <Button
                      variant="contained"
                      color={colorE}
                      onClick={() => insertarCategoria("equipo")}
                      className={classes.boton}
                      sx={{ marginTop: 4, fontSize: 16 }}
                    >
                      Equipo
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {/****Btn Reparación****/}
              <Button
                variant="contained"
                color={colorREP}
                onClick={() => insertarCategoria("reparacion")}
                className={classes.boton}
                sx={{ marginTop: 4, fontSize: 16 }}
              >
                Reparación
              </Button>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >


             
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

              {/****Btn Siguiente****/}
              <Button
                variant="contained"
                color="primary"
                disabled={siguiente}
                onClick={avanzar}
                className={classes.botonAtras}
                sx={{ marginTop: 1, fontSize: 14, marginRight: 0 }}
              >
                siguiente
              </Button>
              
            </Grid>


            </Grid>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoDosf;
