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
  const { avanzar, nombre, setNombre, celular, setCelular, cc, setCc, rh, setRh, } = props;
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
                  label="Nombre Completo"
                  variant="outlined"
                  size="small"
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
                {/******Caja para TextFiled de Cc */}
                <Box
                  boxShadow={5}
                  borderRadius={2}
                  sx={{ marginTop: 4, marginRight: 2, marginLeft: 9 }}
                >
                  <TextField
                    label="Numero CC"
                    variant="outlined"
                    size="small"
                      value={cc}

                   onChange={(e) => setCc(e.target.value)}
                    InputProps={{
                      className: classes.editDialogCc,
                    }}
                  />
                </Box>

                {/******Caja para TextFiled Tipo Sangre */}
                <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                  <TextField
                    label="Tipo de Sangre"
                    variant="outlined"
                    size="small"
                       value={rh}

                     onChange={(e) => setRh(e.target.value)}
                    InputProps={{
                      className: classes.editDialogRh,
                    }}
                  />
                </Box>
              </Grid>

              {/******Caja para TextFiled de Celular */}
              <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                <TextField
                  label="Celular"
                  variant="outlined"
                  size="small"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{marginTop: 4}}
            >
              <IcAbajoTres />

              {/****Btn Siguiente****/}
              <Button
                variant="contained"
                color="primary"
                onClick={avanzar}
                className={classes.botonAtras}
                sx={{ marginTop: 2, fontSize: 14, marginRight: 4, marginLeft: 6, marginBottom: 8 }}
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
