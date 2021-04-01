import {
  Grid,
  Button,
  Paper,
  Avatar,
  Typography,
  Box,
  Checkbox,
  List,
  ListItem,
  Dialog,
  TextField,
} from "@material-ui/core";
import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "../fire";
import TemaFormu from "../Temas/TemaFormu";
import IcAbajoCuatro from "../Iconos/icFabajoCuatro";

const useStyles = makeStyles((theme) => ({
  boton: {
    width: 190,
    height: 60,
  },
  editDialog: {
    height: 90,
    borderRadius: 10,

    marginBottom: 20,
    borderWidth: 10,
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

const PasoCuatrof = (props) => {
  const {
    maquinasCliente,
    setMaquinaSelect,
    avanzar,
    idCliente,
    retroceder,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [idMaquina, setIdMaquina] = React.useState("");
  const [marca, setMarca] = React.useState("");
  const [modelo, setModelo] = React.useState("");
  const [contadorBN, setContadorBN] = React.useState("");
  const [contadorColor, setContadorColor] = React.useState("");
  const [serial, setSerial] = React.useState("");
  const [inactivo, setInActivo] = React.useState(false);
  const [siguiente, setSiguiente] = React.useState(true);
  const [referencia, setReferencia] = React.useState("");
  const [diaRef,setDiaRef] = React.useState(false);

  /***************************************
   * Mostrar Lista:
   * muestra dimanicamente los items de la lista
   * llenos con un array que llega de props
   */
  const mostrarLista = () => {
    return maquinasCliente.map((maquina) => {
      return (
        <ListItem>
          <Box boxShadow={4} width={450} borderRadius={2} padding={1}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50, marginRight: 2 }}
              />
              <Typography
                variant="h7"
                color="primary"
                sx={{ maxWidth: 210, width: 210 }}
              >
                {maquina.marca}
              </Typography>

              <Typography
                variant="h7"
                color="primary"
                sx={{ maxWidth: 120, width: 120, textAlign: "end" }}
              >
                {maquina.modelo}
              </Typography>

              
            </Grid>
          </Box>
        </ListItem>
      );
    });
  };

 

  const manejoDialogoCerrar = () =>{
    setDiaRef(false);
  }

  const manejoDialogoAbrir = () =>{
    setDiaRef(true);
  }

 

  const getIdMaquina = () => {
    var num = "";

    if (serial) {
      num = "S" + serial;
    } else {
      num = "NA" + Math.random * 10000;
    }

    var id = marca + modelo + num;
    return id.replaceAll(" ", "_");
  };



  const manejoAbrir = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const manejoCerra = (e) => {
    setOpen(false);
  };

  const llenarNoReferencia = (e) =>{
    e.preventDefault()
    setMaquinaSelect("REF: sin referencia");
    avanzar()

  }

  const llenarReferencia = (e) =>{
    e.preventDefault();
    setMaquinaSelect("REF: " + referencia);
    setDiaRef(false);
    avanzar()
    
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
              {/****Lista de Maquinas****/}
              <List className={classes.root}>{mostrarLista()}</List>

              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                {/****Btn No info****/}
                <Button
                  variant="contained"
                  color="primary"
                  disabled={inactivo}
                  onClick={(e) => llenarNoReferencia(e)}
                  className={classes.boton}
                  sx={{
                    marginTop: 3,
                    fontSize: 12,
                    marginRight: 2,
                    fontSizeAdjust: 10,
                  }}
                >
                  No tengo información de mi máquina
                </Button>

                {/****Btn referenciar****/}
                <Button
                  variant="contained"
                  color="primary"
                  disabled={inactivo}
                  onClick={(e) => manejoDialogoAbrir()}
                  className={classes.boton}
                  sx={{ marginTop: 3, fontSize: 12, marginRight: 2 }}
                >
                  Referenciar máquina
                </Button>
              </Grid>
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
                sx={{ marginTop: 1, fontSize: 14, marginRight: 0 }}
              >
                Atras
              </Button>
              <IcAbajoCuatro />

              {/****Btn Siguiente****/}
              <Button
                variant="contained"
                color="primary"
                disabled={siguiente}
                onClick={avanzar}
                className={classes.botonAtras}
                sx={{ marginTop: 1, fontSize: 14, marginRight: 0 }}
              >
                siguiente
              </Button>
            </Grid>
          </Paper>
        </Grid>

        <Dialog open={diaRef} onClose={(e) => manejoDialogoCerrar(e)} >
          <Box sx={{ width: 300, padding: 2 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                sx={{
                  color: "#EC1B3B",
                  fontSize: 16,
                  fontWeight: 500,
                  marginTop: 2,
                }}
              >
                Danos una referencia de tu maquina
              </Typography>

              <Box
                boxShadow={5}
                borderRadius={2}
                paddingLeft={2}
                paddingRight={2}
                paddingTop={1}
                sx={{width: 240, marginTop: 4}}
              >
                <TextField
                  label="fotocopiadora o impresora, modelo, marca.."
                  variant="standard"
                  multiline
                  rows={3}
                  fullWidth
                  value={referencia}
                  onChange={(e) => setReferencia(e.target.value)}
                  InputProps={{
                    className: classes.editDialog,
                  }}
                />
              </Box>

              <Button
                onClick={(e) => llenarReferencia(e)}
                variant="contained"
                color="primary"
                sx={{ marginTop: 4 }}
              >
                Continuar
              </Button>
            </Grid>
          </Box>
        </Dialog>
     
     
      </ThemeProvider>
    </div>
  );
};

export default PasoCuatrof;
