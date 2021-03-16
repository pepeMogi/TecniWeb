import {
  TextField,
  Grid,
  Button,
  Paper,
  Dialog,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Link,
  Box,
  Grow,
} from "@material-ui/core";
import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import fire from "../fire";
import TemaFormu from "../Temas/TemaFormu";
import TemaDialog from "../Temas/TemaDialog";
import IcAbajo from "../Iconos/icFabajo";
import IcAbajoMin from "../Iconos/icFabajoMin";
import IcCliente from "../Iconos/icCliente";
import IcClienteMin from "../Iconos/icClienteMin";
import LogoLimpio from "../logolimpio";
import IcAbajoTres from "../Iconos/icFabajoTres";

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 42,
    borderRadius: 10,
    width: 350,
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
    celular,
    setCelular,
    retroceder,
  } = props;
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
                  value={nombre}
            
              onChange={(e) => setNombre(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

              {/******Caja para TextFiled de Dirección del servicio */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                <TextField
                  label="Dirección del servicio"
                  variant="outlined"
                  size="small"
                  value={direccion}
                 
                  onChange={(e) => setDireccion(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

              {/******Caja para TextFiled de Número de contacto */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                <TextField
                  label="Número de contacto"
                  variant="outlined"
                  size="small"
                  value={celular}
               
                  onChange={(e) => setCelular(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

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
                sx={{ marginTop: 6, fontSize: 14, marginRight: 0 }}
              >
                Atras
              </Button>
              <IcAbajoTres />

              {/****Btn Siguiente****/}
              <Button
                variant="contained"
                color="primary"
                onClick={avanzar}
                className={classes.botonAtras}
                sx={{ marginTop: 6, fontSize: 14, marginRight: 0 }}
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
