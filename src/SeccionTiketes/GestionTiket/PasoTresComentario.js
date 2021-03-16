import {
  TextField,
  Grid,
  Button,
  Paper,
  Box,  
  Slider,
} from "@material-ui/core";
import { React } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "../../fire";
import TemaFormu from "../../Temas/TemaFormu";
import IcAbajoCinco from "../../Iconos/icFabajoCinco";

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
    manejoCerrarDialogAsig,
    prioridad,
    setPrioridad,
    tipo
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

  const subirAsignacion = () => {
    fire
      .firestore()
      .collection("tikets")
      .doc(tiketId)
      .update({
        asignado: asignado,
        estado: "asignado",
        comentario: comentario,
        prioridad: prioridad,
        tipo: tipo
      })
      .then(() => {
        manejoCerrarDialogAsig();
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
                sx={{ marginLeft: 4, marginRight: 4, marginTop: 6 }}
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
                  sx={{ marginTop: 0, fontSize: 14, marginTop: 6 }}
                >
                  Terminar
                </Button>
              </Grid>
            </Grid>
          </Paper>
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
            sx={{ marginTop: 0, fontSize: 14, marginLeft: 6 }}
          >
            Atras
          </Button>
          <IcAbajoCinco />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoTresComentario;
