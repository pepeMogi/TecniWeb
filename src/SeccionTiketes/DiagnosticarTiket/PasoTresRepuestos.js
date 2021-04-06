import {
  Grid,
  Button,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Checkbox,
} from "@material-ui/core";
import { React, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Completo } from "./../../Componentes/NavegaFormu";
import { ReactEasyNotify, notify } from "react-easy-notify";
import CheckboxGroup from "react-checkbox-group";
import { repuestoCrear } from "../../Entidades/repuestoCrear";

/****Sin Diagnostico****/
const option = {
  type: "danger",
  title: "Tipo y Nombre",
  status: true,
  timeout: 8000,
  message: "Tipo y nombre del repuestos son obligatorios",
  position: "bottom-right",
  animationType: "vibration",
};

const useStyles = makeStyles((theme) => ({
  editPeq: {
    height: 40,
    borderRadius: 10,
    width: 110,
    padding: 15,
    borderWidth: 10,
  },

  editValor: {
    height: 40,
    borderRadius: 10,
    width: 150,
    padding: 15,
    borderWidth: 10,
  },

  editNombre: {
    height: 40,
    borderRadius: 10,
    width: 220,
    padding: 15,
    borderWidth: 10,
  },
}));

const PasoTresRepuestos = (props) => {
  const { avanzar, retroceder, solucion, setSolucion, repuestos, setRepuestos } = props;
 
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [can, setCan] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");

  const classes = useStyles();

  const llenarRepuesto = () => {
    if (tipo != null && tipo != "" && nombre != null && nombre != "") {
      var rep = new repuestoCrear(tipo, nombre, "estse", can, valor);
      setRepuestos((repuestos) => repuestos.concat(rep));
      setCodigo("");
      setNombre("");
      setValor("");
      setCan("");
      setTipo("");
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
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {/****Cod Siggo****/}
            <Box boxShadow={5} borderRadius={2}>
              <TextField
                label="Cod Siggo"
                variant="outlined"
                size="small"
                autoFocus
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                InputProps={{
                  className: classes.editPeq,
                }}
              />
            </Box>

            {/****Nombre****/}
            <Box
              boxShadow={5}
              borderRadius={2}
              sx={{ marginTop: 4, marginLeft: 2, marginTop: 0 }}
            >
              <TextField
                label="Nombre del Repuesto"
                variant="outlined"
                size="small"
            
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                InputProps={{
                  className: classes.editNombre,
                }}
              />
            </Box>

            {/****Cantidad****/}
            <Box
              boxShadow={5}
              borderRadius={2}
              sx={{ marginTop: 0, marginLeft: 2 }}
            >
              <TextField
                label="Cant"
                variant="outlined"
                size="small"
              
                value={can}
                onChange={(e) => setCan(e.target.value)}
                InputProps={{
                  className: classes.editPeq,
                }}
              />
            </Box>

            {/****Valor****/}
            <Box
              boxShadow={5}
              borderRadius={2}
              sx={{ marginTop: 2, marginLeft: 0 }}
            >
              <TextField
                label="Valor"
                variant="outlined"
                size="small"
             
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                InputProps={{
                  className: classes.editValor,
                }}
              />
            </Box>

            <Grid sx={{ marginTop: 2, marginLeft: 2 }}>
              <CheckboxGroup name="fruits" value={tipo} onChange={setTipo}>
                {(Checkbox) => (
                  <>
                    <label>
                      <Checkbox value="Facturable" /> Fac
                    </label>
                    <label>
                      <Checkbox value="Cotilizacion" /> Cot
                    </label>
                    <label>
                      <Checkbox value="Garantia" /> Gar
                    </label>
                  </>
                )}
              </CheckboxGroup>
            </Grid>

            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 2, marginLeft: 4 }}
              onClick={() => llenarRepuesto()}
            >
              Agregar
            </Button>

            <TableContainer component={Paper} sx={{ marginTop: 3, marginBottom: 4, minHeight: 180, maxHeight: 180 }}>
              <Table size="small" aria-label="a dense table">
                <TableHead sx={{ backgroundColor: "#C8C8C8" }}>
                  <TableRow>
                    <TableCell>Tipo</TableCell>
                    <TableCell align="left">Ref</TableCell>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="right">Unds</TableCell>
                    <TableCell align="right">Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {repuestos.map((row) => (
                    <TableRow key={row.nombre}>
                      <TableCell component="th" scope="row">
                        {row.tipo}
                      </TableCell>
                      <TableCell align="left">{row.referencia}</TableCell>
                      <TableCell align="left">{row.nombre}</TableCell>
                      <TableCell align="right">{row.cantidad}</TableCell>
                      <TableCell align="right">{row.valor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Completo siguiente={avanzar} atras={retroceder} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoTresRepuestos;
