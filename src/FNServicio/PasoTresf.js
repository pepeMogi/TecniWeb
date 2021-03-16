import {
  TextField,
  Grid,
  Button,
  Paper,
  Box, 
} from "@material-ui/core";
import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "../Temas/TemaFormu";
import IcAbajoTres from "../Iconos/icFabajoTres";

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 42,
    borderRadius: 10,
    width: 350,
    padding: 15,
    borderWidth: 10,
  },

  editDialogPeq: {
    height: 42,
    borderRadius: 10,
    width: 170,
    padding: 15,
    borderWidth: 10,
  },

  editDialogDir: {
    height: 42,
    borderRadius: 10,
    width: 220,
    padding: 15,
    borderWidth: 10,
  },

  editDialogCiu: {
    height: 42,
    borderRadius: 10,
    width: 114,
    padding: 15,
    borderWidth: 10,
  },
  paperUno: {
    height: 350,
    width: 500,
  },
  botonAtras: {
    width: 120,
    height: 40,
  },
}));

const PasoTresf = (props) => {
  const {
    avanzar,
    nombre,
    setNombre,
    email,
    setEmail,
    direccion,
    setDireccion,
    ciudad,
    setCiudad,
    celular,
    setCelular,
    celularDos,
    setCelularDos,
    retroceder,
  } = props;

  const verificar = () =>{

    if(nombre == "" || direccion == "" || celular == ""){
      alert("Los campos con * son requeridos");
    }else{
      avanzar();
    }

  }

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
              {/******Caja para TextFiled de Nombre */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 2 }}>
                <TextField
                  label="Nombre Solicitante"
                  variant="outlined"
                  size="small"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

             
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                 {/******Caja para TextFiled de Dirección del servicio */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4, marginLeft: 9 }}>
                <TextField
                  label="Dirección del servicio"
                  variant="outlined"
                  size="small"
                  required
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  InputProps={{
                    className: classes.editDialogDir,
                  }}
                />
              </Box>

                   {/******Caja para TextFiled de Ciudad del servicio */}
                   <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4, marginLeft: 2 }}>
                <TextField
                  label="Ciudad"
                  variant="outlined"
                  size="small"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  InputProps={{
                    className: classes.editDialogCiu,
                  }}
                />
              </Box>
               
              </Grid>
         
          
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                {/******Caja para TextFiled de Número de contacto */}
                <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4, marginLeft: 9 }}>
                  <TextField
                    label="Celular Uno"
                    variant="outlined"
                    size="small"
                    required
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    InputProps={{
                      className: classes.editDialogPeq,
                    }}
                  />
                </Box>

                {/******Caja para TextFiled de Número Dos de contacto */}
                <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4, marginLeft: 2}}>
                  <TextField
                    label="Celular Dos"
                    variant="outlined"
                    size="small"
                    value={celularDos}
                    onChange={(e) => setCelularDos(e.target.value)}
                    InputProps={{
                      className: classes.editDialogPeq,
                    }}
                  />
                </Box>
           
              </Grid>

              {/******Caja para TextFiled de Corrreo */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                <TextField
                  label="Correo Electronico"
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>
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
                sx={{ marginTop: 4, fontSize: 14, marginRight: 0 }}
              >
                Atras
              </Button>
              <IcAbajoTres />

              {/****Btn Siguiente****/}
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => verificar()}
                className={classes.botonAtras}
                sx={{ marginTop: 4, fontSize: 14, marginRight: 0 }}
              >
                siguiente
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoTresf;
