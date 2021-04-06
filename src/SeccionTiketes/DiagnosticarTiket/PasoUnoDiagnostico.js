import { Grid, Button, Box, Typography, TextField } from "@material-ui/core";
import { React, createRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import IcAbajoCuatro from "./../../Iconos/icFabajoCuatro";
import IconoMaquina from "./../IconosDiagnosticar/IconoMaquina";
import IconoFalla from "../IconosDiagnosticar/IconoFalla";
import { Completo } from "./../../Componentes/NavegaFormu";
import { ReactEasyNotify, notify } from "react-easy-notify";

/****Sin Diagnostico****/
const options = {
  type: "danger",
  title: "Ningun Diagnostico",
  status: true,
  timeout: 8000,
  message:
    "se debe agregar un diagnostico",
  position: "bottom-right",
  animationType: "vibration",
};


const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 90,
    borderRadius: 10,
    width: 480,
    marginBottom: 20,
    borderWidth: 10,
  },
}));

const PasoUnoDiagnostico = (props) => {
  const { avanzar, cerrarDiagnostico, setDiagnostico, diagnostico, diag } = props;

  const classes = useStyles();

  const seguir = () =>{
    if(diagnostico != null && diagnostico != ""){
      avanzar();
    }else{
      notify(options);
    }
  }

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <ReactEasyNotify/>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          sx={{ paddingLeft: 6, paddingRight: 6 }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <IconoMaquina />
            <Typography sx={{ marginLeft: 2, fontWeight: 600 }}>
              {diag.idMaquina.replaceAll("_"," ")}
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="start"
            sx={{ marginTop: 2, height: 100 }}
          >
            <IconoFalla />
            <Typography sx={{ marginLeft: 2 }}>
              {diag.falla}
            </Typography>
          </Grid>

          {/****Caja Diagnostico****/}
          <Box
            boxShadow={5}
            borderRadius={2}
            paddingLeft={2}
            paddingRight={2}
            paddingTop={1}
            sx={{ marginBottom: 5 }}
          >
            <TextField
              label="Diagnostico"
              variant="standard"
              multiline
              rows={3}
                   value={diagnostico}
               onChange={(e) => setDiagnostico(e.target.value)}
              InputProps={{
                className: classes.editDialog,
              }}
            />
          </Box>

          <Completo siguiente={seguir} atras={cerrarDiagnostico} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoUnoDiagnostico;
