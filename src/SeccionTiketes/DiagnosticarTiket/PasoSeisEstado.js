import {
  Grid,
  Button,
  Box,
  Typography,
  TextField,
  Checkbox,
} from "@material-ui/core";
import { React, useState, useEffect, createRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Isquierdo } from "./../../Componentes/NavegaFormu";
import { ReactEasyNotify, notify } from "react-easy-notify";
import fire from "../../fire";
import { cliente } from "./../../Entidades/cliente";
import algoliasearch from 'algoliasearch';

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
  editNombre: {
    height: 40,
    borderRadius: 10,
    width: 200,
    padding: 15,
    borderWidth: 10,
  },
  img: {
    maxWidth: 200,
    borderRadius: 10,
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

const PasoSeisEstado = (props) => {
  const {
    avanzar,
    retroceder,
    solucion,
    tiketDiag,
    diagnostico,
    repuestos,
    anexos,
    comentario,
    setEstado,
    setNitTiket,
  } = props;


  const [paraLeg, setParaLeg] = useState(true);
  const [actCliente, setActCliente] = useState(false);
  const [nit, setNit] = useState("");
  const [rut, setRut] = useState("");
  const hiddenFileInput = createRef(null);

  const classes = useStyles();

  const escribirNit = (e) => {
    setNit(e);
    setNitTiket(e)
    setActCliente(true);
  };

  const abrirNit = () => {
    setParaLeg(!paraLeg);
  };

  const actualizarCliente = () => {
    if (actCliente) {
      console.log("actualizando cliente...");
      fire
        .firestore()
        .collection("clientes")
        .doc(tiketDiag.idCliente)
        .update({
          cc: nit,
          rut: rut,
        })
        .then(() => {
          console.log("listo actualizado");
          actualizarAlgolia();
        }).catch((err) =>{
          console.log("errob en conexion");
        })
    }
    setEstado("para legalizar");
    avanzar();
  };


  const actualizarAlgolia = () => {
    console.log("actualizando motor...");
    const client = algoliasearch("BSGVLDWAAA", "a6a2592069708d0523908a39c1860f24");
    const index = client.initIndex("clientes");

    const objects = [
      {
        cc: nit,
        objectID: tiketDiag.idCliente,
      },
    ];

    index.partialUpdateObjects(objects).then(({ objectIDs }) => {
      avanzar()
    });
  }

  const siguiente = (est) => {
    setEstado(est);
    avanzar();
  };

  /****************************************
   * Subir Imagen:
   * sube la imagen a storage y genera el url para que
   * se pueda visualizar en el List Imagen
   */
  const subirImagen = (image) => {
    if (image) {
      // add to image folder in firebase
      const uploadTask = fire.storage().ref(`rut/${image.name}`).put(image);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // setProgress(progress);
        },
        (error) => {
          // error function ....
          console.log(error);
          // setError(error);
        },
        () => {
          // complete function ....
          fire
            .storage()
            .ref("images")
            .child(image.name) // Upload the file and metadata
            .getDownloadURL() // get download url
            .then((url) => {
              console.log(url);
              //setUrl(url);
              // anexos.push(url);
              setRut(url);
              // setProgress(0);
              //setProgFin(false);
            });
        }
      );
    } else {
      //setError("Error please choose an image to upload");
    }
  };

  /*****************************************
   * Manejo Cambio:
   * obtiene el cambion de estado en el input,
   * valida si es una image
   */
  const manejoCambio = (e) => {
    const file = e.target.files[0];

    if (file) {
      //setProgFin(true);
      const fileType = file["type"];
      const validImageTypes = ["image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        // setError("");
        // setImage(file);
        subirImagen(file);
      } else {
        console.log("error");
        // setError("error please upload a image file");
      }
    }
  };

  const subir = (e) => {
    e.preventDefault();
    setActCliente(true);
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("clientes")
      .doc(tiketDiag.idCliente)
      .get()
      .then((doc) => {
        var cli = new cliente(doc);
        setNit(cli.cc);
        setRut(cli.rut);
        setNitTiket(cli.cc);
      });
  }, []);

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
            variant="contained"
            color="primary"
            onClick={abrirNit}
            sx={{ width: 200, height: 55, marginTop: 2 }}
          >
            Para Legalizar
          </Button>

          {/****CC / Nit****/}
          <Box
            boxShadow={5}
            borderRadius={2}
            sx={{ marginTop: 4, marginLeft: 0, marginTop: 2 }}
            hidden={paraLeg}
          >
            <TextField
              label="Cc / Nit"
              variant="outlined"
              size="small"
              autoFocus
              value={nit}
              onChange={(e) => escribirNit(e.target.value)}
              InputProps={{
                className: classes.editNombre,
              }}
            />
          </Box>

          <Box
            hidden={paraLeg}
            sx={{
              borderRadius: 2,
              boxShadow: 5,
              marginTop: 2,
              padding: 1,
            }}
          >
            <img src={rut} className={classes.img} onClick={subir}></img>
            <input
              type="file"
              onChange={manejoCambio}
              style={{ display: "none" }}
              ref={hiddenFileInput}
            />
          </Box>

          <Box hidden={paraLeg}>
            <Button
              hidden={paraLeg}
              variant="contained"
              color="secondary"
              sx={{ marginTop: 2 }}
              onClick={() => actualizarCliente()}
            >
              Finalizar
            </Button>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => siguiente("en espera")}
            sx={{ width: 200, height: 55, marginTop: 2 }}
          >
            En espera de repuesto
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => siguiente("reasignar")}
            sx={{ width: 200, height: 55, marginTop: 2 }}
          >
            Reasignar
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => siguiente("en pausa")}
            sx={{ width: 200, height: 55, marginTop: 2, marginBottom: 4 }}
          >
            En pausa
          </Button>

          <Isquierdo atras={retroceder} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoSeisEstado;
