import { TextField, Grid, Button, Paper, Box, Slider } from "@material-ui/core";
import { React } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "../../fire";
import TemaFormu from "../../Temas/TemaFormu";
import { Isquierdo } from "../../Componentes/NavegaFormu";
import algoliasearch from 'algoliasearch';

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 90,
    borderRadius: 10,
    width: 450,
    marginBottom: 20,
    borderWidth: 10,
  },

  boton: {
    width: 190,
    height: 40,
  },
  rootImagenes: {
    height: 120,
    maxWidth: 470,
  },

  paper: {
    height: 350,
    width: 500,
  },

  botonAtras: {
    width: 120,
    height: 40,
  },
  root: {
    position: "relative",
    overflow: "auto", // para que virtualize la lista
    maxHeight: 180,
    height: 180,
  },
}));

const PasoTresComentario = (props) => {
  const {
    asignado,
    retroceder,
    comentario,
    setComentario,
    tiketId,
    cerrarGestion,
    prioridad,
    setPrioridad,
    tipo,
    tecnico,
  } = props;

  const classes = useStyles();

  const marks = [
    {
      value: 1,
      label: "Nula",
    },
    {
      value: 2,
      label: "Baja",
    },
    {
      value: 3,
      label: "Normal",
    },
    {
      value: 4,
      label: "Urgente",
    },

    {
      value: 5,
      label: "Rellamada",
    },
  ];

  const enviarNotificacion = () => {
    console.log("enviando notificacion...");

    fetch("https://fcm.googleapis.com/fcm/send", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "key=AAAAgoHWsk8:APA91bEB-8lk3e2wsLGzOBIFVhm-4_2oo13RDpY7BSgMpyUZbgryu8HdzpZn5KqQsKLfw1beNnd8-oSyG46zxWuzT7Go0v_B9-wCg5fh_8gus6BZcqTupi8LjKYZxbY9vEQuYqU7RF6-",
      },
      body: JSON.stringify({
        notification: {
          body: comentario,
          title: "Servicio Asignado " + tiketId.toUpperCase(),
        },

        to: tecnico.token,
      }),
    }).then(function (response) {
      return response.json();
    });
  };

  const actualizaMotor = () => {

    const client = algoliasearch("BSGVLDWAAA", "a6a2592069708d0523908a39c1860f24");
    const index = client.initIndex("tikets");

    const objects = [
      {
        asignado: asignado,
        tipo: tipo,
        estado: "asignado",
        objectID: tiketId,
        prioridad: prioridad - 1
      },
    ];

    index.partialUpdateObjects(objects).then(({ objectIDs }) => {
      cerrarGestion();
    });
  };

  const subirAsignacion = () => {
    fire
      .firestore()
      .collection("tikets")
      .doc(tiketId)
      .update({
        asignado: asignado,
        estado: "asignado",
        prioridad: prioridad - 1 ,
        tipo: tipo,
      })
      .then(() => {
        enviarNotificacion();

        actualizaMotor();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper
            className={classes.paper}
            elevation={0}
            sx={{ borderRadius: 5 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              {/****Caja para TextFiled de Falla****/}
              <Box
                boxShadow={5}
                borderRadius={2}
                paddingLeft={2}
                paddingRight={2}
                paddingTop={1}
              >
                <TextField
                  label="Comentario para Tecnico"
                  variant="standard"
                  multiline
                  rows={3}
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

              <Slider
                valueLabelDisplay="auto"
                step={1}
                marks
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
                min={1}
                max={5}
                marks={marks}
                sx={{ marginLeft: 4, marginRight: 4, marginTop: 4 }}
              />

              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                {/****Btn Solicitar****/}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => subirAsignacion(e)}
                  className={classes.boton}
                  sx={{
                    marginTop: 0,
                    fontSize: 14,
                    marginTop: 4,
                    marginBottom: 3,
                  }}
                >
                  Terminar
                </Button>
              </Grid>
              <Isquierdo atras={retroceder} />
            </Grid>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoTresComentario;
