import {
  Grid,
  Link,
  Box, 
  ImageListItem,
  ImageList,
  TextField,
  Checkbox,
  Fade,
  CircularProgress,
} from "@material-ui/core";
import { React, createRef, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Completo  } from "./../../Componentes/NavegaFormu";

import fire from "./../../fire";
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

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 80,
    borderRadius: 10,
    width: 480,
    marginBottom: 20,
    borderWidth: 10,
  },
  rootImagenes: {
    height: 120,
    maxWidth: 470,
  },
  img: {
    maxHeight: 100,
    borderRadius: 15,
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

const PasoCincoAnexos = (props) => {
  const {
    avanzar,
    retroceder,
    anexos,
    setAnexos,
    comentario,
    setComentario,

  } = props;
  const hiddenFileInput = createRef(null);
  const [progFin, setProgFin] = useState(false);

  const classes = useStyles();

  /*****************************************
   * Manejo Cambio:
   * obtiene el cambion de estado en el input,
   * valida si es una image
   */
  const manejoCambio = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProgFin(true);
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

  /****************************************
   * Subir Imagen:
   * sube la imagen a storage y genera el url para que
   * se pueda visualizar en el List Imagen
   */
  const subirImagen = (image) => {
    if (image) {
      // add to image folder in firebase
      const uploadTask = fire.storage().ref(`images/${image.name}`).put(image);
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
              setAnexos((anexos) => anexos.concat(url));
              // setProgress(0);
              setProgFin(false);
            });
        }
      );
    } else {
      //setError("Error please choose an image to upload");
    }
  };

  /**************************************
   * Llenar Imagen:
   * llena imagen desde un array de dos valores
   */
  const llenarImagen = () => {
    return anexos.map((item) => (
      <ImageListItem key={item}>
        <Box className={classes.caja}>
          <img src={item} className={classes.img} />
        </Box>
      </ImageListItem>
    ));
  };

  const subir = (e) => {
    e.preventDefault();

    hiddenFileInput.current.click();
  };



  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
     
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
            sx={{ marginBottom: 0, marginTop: 0 }}
          >
            <TextField
              label="Comentario Adicional"
              variant="standard"
              multiline
              rows={3}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
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
            <Link
              underline="always"
              color="primary"
              href="#"
              onClick={(e) => subir(e)}
              sx={{ marginTop: 1, marginLeft: 3, fontSize: 12 }}
            >
              Adjuntar imagenes
            </Link>
            <input
              type="file"
              onChange={manejoCambio}
              style={{ display: "none" }}
              ref={hiddenFileInput}
            />
          </Grid>

          <ImageList
            cols={10}
            rowHeight={5}
            fullWidth
            className={classes.rootImagenes}
          >
            {llenarImagen()}
          </ImageList>

          <Fade
            in={progFin}
            style={{
              transitionDelay: "800ms",
              position: "absolute",
            }}
            unmountOnExit
            sx={{ marginLeft: -60, marginTop: 16 }}
          >
            <CircularProgress size={20} />
          </Fade>

          <Completo siguiente={avanzar} atras={retroceder} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoCincoAnexos;
