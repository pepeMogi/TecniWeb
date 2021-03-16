import {
  TextField,
  Grid,
  Button,
  Paper,
  Box,
  ImageList,
  Typography,
} from "@material-ui/core";
import { React, useState, createRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "./../../fire";
import TemaFormu from "./../../Temas/TemaFormu";
import IcAbajoCinco from "./../../Iconos/icFabajoCinco";
import TiketNuevo from "./../../Tiket/TiketNuevo";

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 90,
    borderRadius: 10,
    width: 450,
    marginBottom: 20,
    borderWidth: 10,
  },

  editDialogPeq: {
    height: 40,
    borderRadius: 10,
    width: 250,
    padding: 15,
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

const PasoTresDiagnostico = (props) => {
  const { retroceder, avanzar, tiketDiag } = props;

  const classes = useStyles();

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
                  label="Diagnostico de visita"
                  variant="standard"
                  multiline
                  rows={3}
                  //      value={comentario}
                  // onChange={(e) => setComentario(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography>Repuestos Utillizados: </Typography>

                {/****Esta parte esta sin funicion****/}
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <TextField
                    label="Codigo de repusto"
                    variant="outlined"
                    size="small"
                    autoFocus
                    InputProps={{
                      className: classes.editDialogPeq,
                    }}
                  />

                  <TextField
                    label="Nombre del repuesto"
                    variant="outlined"
                    size="small"
                    autoFocus
                    InputProps={{
                      className: classes.editDialogPeq,
                    }}
                  />

                  <TextField
                    label="Cantidad"
                    variant="outlined"
                    size="small"
                    autoFocus
                    InputProps={{
                      className: classes.editDialogPeq,
                    }}
                  />

                  <Button variant="contained" color="primary">
                    Agregar
                  </Button>
                </Grid>
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

export default PasoTresDiagnostico;
