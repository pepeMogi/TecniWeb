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
} from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "./../../fire";
import IcAbajoCuatro from "./../../Iconos/icFabajoCuatro";
import TemaFormu from "./../../Temas/TemaFormu";

const useStyles = makeStyles((theme) => ({
  boton: {
    width: 190,
    height: 50,
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

const PasoDosMaquinas = (props) => {
  const { avanzar, tiketDiag, retroceder, idCliente } = props;
  const [open, setOpen] = useState(false);
  const [idMaquina, setIdMaquina] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [contadorBN, setContadorBN] = useState("");
  const [contadorColor, setContadorColor] = useState("");
  const [serial, setSerial] = useState("");
  const [inactivo, setInActivo] = useState(false);

  const [maquinasCliente, setMaquinasCliente] = useState([]);

  var maquinasSelec = [];

  /***************************************
   * Mostrar Lista:
   * muestra dimanicamente los items de la lista
   * llenos con un array que llega de props
   */
  const mostrarLista = () => {
    return maquinasCliente.map((maquina) => {
      var check = false;
      for (var i = 0; i < tiketDiag.maquinas.length; i++) {
        console.log("bus");
        if (maquina.id === tiketDiag.maquinas[i]) {
          console.log("esta=>" + tiketDiag.maquinas[i]);
          check = true;
        }
      }

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

              <Checkbox
                edge="end"
                value={maquina.id}
                checked={check}
                onChange={(e) => manejoArray(e.target.checked, e.target.value)}
              />
            </Grid>
          </Box>
        </ListItem>
      );
    });
  };

  const manejoArray = (escogida, maquina) => {
    if (!inactivo) {
      setInActivo(true);
    }

    if (escogida) {
      console.log("se agrego " + maquina);
      maquinasSelec.push(maquina);
  
    } else {
      let pos = maquinasSelec.indexOf(maquina);
      if (pos != null) {
        maquinasSelec.splice(pos, 1);
        console.log("se quito " + maquina);

        if (maquinasSelec.length == 0) {
          setInActivo(false);
      
        }
      }
    }
  };

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

  const crearMaquina = (e) => {
    e.preventDefault();

    var id = getIdMaquina();
    var docData = {
      id: id,
      marca: marca,
      modelo: modelo,
      contadorBN: contadorBN ? contadorBN : "0",
      contadorColor: contadorColor ? contadorColor : "0",
      serial: serial ? serial : "0",
      //  cliente: idCliente,
    };

    fire
      .firestore()
      .collection("maquinas")
      .doc(id)
      .set(docData)
      .then((doc) => {
        maquinasSelec.push(id);
        avanzar();
        manejoCerra();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const manejoAbrir = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const manejoCerra = (e) => {
    setOpen(false);
  };

  const classes = useStyles();

  useEffect(() => {
    var array = [];
    fire
      .firestore()
      .collection("maquinas")
      .where("cliente", "==", idCliente)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var maquina = {
            cliente: doc.data().cliente,
            contadorBN: doc.data().contadorBN,
            contadorColor: doc.data().contadorColor,
            id: doc.data().id,
            marca: doc.data().marca,
            modelo: doc.data().modelo,
            serial: doc.data().serial,
          };

          array.push(maquina);
        });

        setMaquinasCliente(array);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

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
              {/****Txt no tengo info de maquina****/}
              <Typography
                color="secondary"
                sx={{ marginTop: 3, fontSize: 18, color: "#9A9797" }}
              >
                Maquina Referenciada: La que esta atras de la puerta
              </Typography>

              {/****Lista de Maquinas****/}
              <List className={classes.root}>{mostrarLista()}</List>

              {/****Btn Crear Maquina****/}
              <Button
                variant="contained"
                color="primary"
                disabled={inactivo}
                onClick={avanzar}
                className={classes.boton}
                sx={{ marginTop: 3, fontSize: 14, marginRight: 2 }}
              >
                CREAR MÁQUINA
              </Button>
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
                onClick={avanzar}
                className={classes.botonAtras}
                sx={{ marginTop: 1, fontSize: 14, marginRight: 0 }}
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

export default PasoDosMaquinas;
