import {
  Grid,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
    height: 40,
    paddingTop: 13,
  },

  formControlDos: {
    margin: theme.spacing(1),
    minWidth: 100,
    height: 40,
    paddingTop: 13,
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

  
 

 
}));

const PasoDosf = (props) => {
  const { avanzar, setTipo, tipo, bodega, setBodega, retroceder } = props; 


 
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
              justifyContent="center"
              alignItems="center"
            >
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Tipo</InputLabel>
                <Select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  label="Age"
                >
                  <MenuItem value={"Normal"}>Normal</MenuItem>
                  <MenuItem value={"Entrenando"}>Entrenando</MenuItem>
                  <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
                </Select>
              </FormControl>

              {/***Bodega de Tecnico */}
              <FormControl
                variant="outlined"
                className={classes.formControlDos}
              >
                <InputLabel>Bodega</InputLabel>
                <Select
                  value={bodega}
                  onChange={(e) => setBodega(e.target.value)}
                  label="Bodega"
                >
                  <MenuItem value={"0"}>0</MenuItem>
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                  <MenuItem value={"5"}>5</MenuItem>
                </Select>
              </FormControl>

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
