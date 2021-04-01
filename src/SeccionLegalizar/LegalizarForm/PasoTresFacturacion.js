import {
  Grid,
  Button,
  Paper,
  Typography,
  Box,
  Link,
  TextField,
} from "@material-ui/core";
import { React, createRef, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import {
  Completo,
  CompletoFinal,
  Isquierdo,
} from "./../../Componentes/NavegaFormu";
import firebase from 'firebase'
import algoliasearch from "algoliasearch";
import fire from "../../fire";
import { notify, ReactEasyNotify } from "react-easy-notify";


const options = {
  type: "danger",
  title: "Datos incompletos",
  status: true,
  timeout: 8000,
  message:
    "imagen de factura y numero de factura son necesarios para terminar de legalizar el tiket",
  position: "top-right",
  animationType: "vibration",
};

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 40,
    borderRadius: 10,
    width: 200,
    padding: 15,
    borderWidth: 10,
  },
  img: {
    maxHeight: 220,
    borderRadius: 10,
  },
}));

const PasoTresFacturacion = (props) => {
  const { retroceder, diagnosticoLocal, tiket } = props;
  const hiddenFileInput = createRef(null);
  const [fac, setFac] = useState("");
  const [numFac, setNumFac] = useState("");

  const atras = () => {
    retroceder();
  };

  const final = () => {
    if (fac && numFac) {
      subirLegalizacion();
    } else {
      notify(options);
    }
  };

  const subirLegalizacion = () => {
    fire
      .firestore()
      .collection("tikets")
      .doc(tiket.id)
      .update({
        legalizacion: new Date(),
        estado: "finalizado",
        facturas: firebase.firestore.FieldValue.arrayUnion(numFac),
        prioridad: 0
      })
      .then((doc) => {
        console.log("actualizado correctamenre");

        adicionarFactura();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const adicionarFactura = () => {
    fire
      .firestore()
      .collection("diagnosticos")
      .doc(diagnosticoLocal.id)
      .update({
        imgs: firebase.firestore.FieldValue.arrayUnion(fac),
       
     
      })
      .then((ac) => {
        console.log("actrualizado diagnostico");
        actualizatMotor();
      });
  };

  const actualizatMotor = () => {

    console.log("actyalizadno algolia");

    const client = algoliasearch(
      "BSGVLDWAAA",
      "a6a2592069708d0523908a39c1860f24"
    );
    const index = client.initIndex("tikets");

    var facts = "";
    for(var i = 0; i < tiket.facturas.length; i++){
      facts += tiket.facturas[i] + " ";
    }

    facts += numFac;

    const objects = {
      factura: facts,
      objectID: tiket.id,
      estado: "finalizado",
      prioridad: 0,
    }

   

    index.partialUpdateObject(objects).then((esto) =>{
      console.log("actualizado");
    })

  }

  const subir = (e) => {
    e.preventDefault();

    hiddenFileInput.current.click();
  };

  const manejoCambio = (e) => {
    const file = e.target.files[0];

    if (file) {
      // setProg(true);
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

  const subirImagen = (image) => {
    if (image) {
      // add to image folder in firebase
      const uploadTask = fire
        .storage()
        .ref(`facturas/${image.name}`)
        .put(image);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          //setProgress(progress);
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
              setFac(url);
              // anexos.push(url);
              // setProgress(0);
              // setProg(false);
            });
        }
      );
    } else {
      //setError("Error please choose an image to upload");
    }
  };

  const classes = useStyles();

  return (
    <div>
      <ReactEasyNotify />
      <ThemeProvider theme={TemaFormu}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Paper
            elevation={0}
            sx={{ borderRadius: 5, width: 500, height: 330 }}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <TextField
                label="Numero de Factura"
                variant="outlined"
                size="small"
                value={numFac}
                onChange={(e) => setNumFac(e.target.value)}
                InputProps={{
                  className: classes.editDialog,
                }}
              />

              <Box className={classes.caja} sx={{ marginTop: 2 }}>
                <img src={fac} className={classes.img} />
              </Box>

              <Link
                underline="always"
                color="primary"
                href="#"
                onClick={(e) => subir(e)}
                sx={{ fontSize: 14 }}
              >
                Agregar Imagen de factura
              </Link>
              <input
                type="file"
                onChange={manejoCambio}
                style={{ display: "none" }}
                ref={hiddenFileInput}
              />
            </Grid>
          </Paper>

          <CompletoFinal atras={atras} final={final} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoTresFacturacion;
