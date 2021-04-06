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

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 150,
    borderRadius: 10,
    width: 480,
    marginBottom: 20,
    borderWidth: 10,
  },


}));

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

const PasoDosSolucion = (props) => {
  const { avanzar, retroceder, solucion, setSolucion } = props;

  const classes = useStyles();

  const seguir = () => {
    if (solucion != null && solucion != "") {
      avanzar();
    } else {
      notify(option);
    }
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
          {/****Caja Diagnostico****/}
          <Box
            boxShadow={5}
            borderRadius={2}
            paddingLeft={2}
            paddingRight={2}
            paddingTop={1}
            sx={{marginBottom: 10, marginTop: 6}}
          >
            <TextField
              label="Solucion"
              variant="standard"
              multiline
              rows={3}
              value={solucion}
              onChange={(e) => setSolucion(e.target.value)}
              InputProps={{
                className: classes.editDialog,
              }}
            />
          </Box>

          <Completo siguiente={seguir} atras={retroceder} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoDosSolucion;
