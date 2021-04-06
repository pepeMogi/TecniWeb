import {
  Grid,
  Button,
  Box,
  Typography,
  TextField,
  Checkbox,
} from "@material-ui/core";
import { React, createRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import IcAbajoCuatro from "./../../Iconos/icFabajoCuatro";
import IconoMaquina from "./../IconosDiagnosticar/IconoMaquina";
import IconoFalla from "../IconosDiagnosticar/IconoFalla";
import { Completo } from "./../../Componentes/NavegaFormu";
import { ReactEasyNotify, notify } from "react-easy-notify";
import CheckboxGroup from "react-checkbox-group";
import { diagnosticoCrea } from "../../Entidades/diagnosticoCrea";

/****Sin Diagnostico****/
const option = {
  type: "danger",
  title: "Ninguna Solucion",
  status: true,
  timeout: 8000,
  message:
    "se debe agregar una solucion para continuar en la gestion del tiket",
  position: "bottom-right",
  animationType: "vibration",
};

const options = {
  name: "permissions",
  label: "Permissions",
  error: "",
  value: "",
  getOptionLabel: "name",
  getOptionValue: "id",
  getChildOptionLabel: "description",
  getChildOptionValue: "id",
};

const PasoSieteFinalizar = (props) => {
  const { avanzar, retroceder, solucion, repuestos, anexos, comentario, tiketDiag, diagnostico  } = props;

  const seguir = () => {
    if (solucion != null && solucion != "") {
      avanzar();
    } else {
      notify(option);
    }
  };

  const subirDiagnostico = () => {
    var diag = new diagnosticoCrea(
      tiketDiag.asignado,
      diagnostico,
      solucion,
      repuestos,
      anexos,
      comentario,
   
    );

    console.log(diag);
  };

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <ReactEasyNotify />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          sx={{ paddingLeft: 6, paddingRight: 6 }}
        >
          <Button
          onClick={() => subirDiagnostico()}
            variant="contained"
            color="primary"
            sx={{ width: 250, height: 90, marginTop: 12, marginBottom: 8 }}
          >
            Generar Reporte
          </Button>

          <Completo siguiente={seguir} atras={retroceder} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoSieteFinalizar;
