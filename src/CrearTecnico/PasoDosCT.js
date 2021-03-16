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
import IcAbajoTres from "../Iconos/icabajoCT";

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 42,
    borderRadius: 10,
    width: 350,
    padding: 15,
    borderWidth: 10,
  },
  editDialogCc: {
    height: 42,
    borderRadius: 10,
    width: 200,
    padding: 15,
    borderWidth: 10,
  },
  editDialogRh: {
    height: 42,
    borderRadius: 10,
    width: 140,
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
  const { avanzar, email, setEmail, pass, setPass, retroceder } = props;
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
              {/******Caja para TextFiled de Correo */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 2 }}>
                <TextField
                  label="Correo"
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

              {/******Caja para TextFiled de Constraseña */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                <TextField
                  label="Contraseña"
                  variant="outlined"
                  size="small"
                  type="password"
                    value={pass}

                  onChange={(e) => setPass(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

              {/******Caja para TextFiled de Contraseña 2 */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                <TextField
                  label="Repite Constraseña"
                  variant="outlined"
                  size="small"
                  type="password"
                  //  value={direccion}

                  // onChange={(e) => setDireccion(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ marginTop: 4 }}
            >
              {/****Btn Atras****/}
              <Button
                variant="contained"
                color="secondary"
                onClick={retroceder}
                className={classes.botonAtras}
                sx={{ marginBottom: 8, marginLeft: 4 }}
              >
                atras
              </Button>

              <IcAbajoTres />

              {/****Btn Siguiente****/}
              <Button
                variant="contained"
                color="primary"
                onClick={avanzar}
                className={classes.botonAtras}
                sx={{ marginBottom: 8, marginRight: 4 }}
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
