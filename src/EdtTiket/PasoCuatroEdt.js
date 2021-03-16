import {
  TextField,
  Grid,
  Button,
  Paper,
  Dialog,
  Link,
  Box,
  ImageList,
  ImageListItem,
} from "@material-ui/core";
import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "../fire";
import TemaFormu from "../Temas/TemaFormu";
import IcAbajoCinco from "../Iconos/icFabajoCinco";
import Pdf from "./Pdf";
import { PDFViewer } from "@react-pdf/renderer";

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 90,
    borderRadius: 10,
    width: 450,
    marginBottom: 20,
    borderWidth: 10,
  },

  boton: {
    width: 190,
    height: 40,
  },
  rootImagenes: {
    height: 120,
    maxWidth: 470,
  },

  img: {
    maxHeight: 100,
    borderRadius: 15,
  },
  paper: {
    height: 350,
    width: 500,
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
    id,
    idCliente,
    falla,
    setFalla,
    anexos,
    nombre,
    email,
    direccion,
    cuidad,
    celular,
    categoria,
    maquinasSelec,
    handleCloseNew,
    retroceder,
    asignado,
    fechaCreacion,
    estado,
    factura,
    legalizacion,
    prioridad,
    fecTimestamp,
  } = props;

  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const hiddenFileInput = React.createRef(null);

  const classes = useStyles();

  /*****************************************
   * Manejo Cambio:
   * obtiene el cambion de estado en el input,
   * valida si es una image
   */
  const manejoCambio = (e) => {
    const file = e.target.files[0];

    if (file) {
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
          setProgress(progress);
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
              anexos.push(url);
              setProgress(0);
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

  /*****************************************************
   * Actualizar
   */
  const solicitar = (e) => {
    e.preventDefault();

    const tiket = {
      id: id,
      idCliente: idCliente,
      nombre: nombre,
      tipo: categoria,
      numero: celular,
      email: email,
      direccion: direccion,
      cuidad: cuidad,
      fechaCreacion: fecTimestamp,
      falla: falla,
      anexos: anexos,
      estado: estado,
      maquinas: maquinasSelec,
      factura: factura,
      legalizacion: legalizacion,
      asignado: asignado,
      prioridad: parseInt(prioridad),
    };

    fire
      .firestore()
      .collection("tikets")
      .doc("t3010")
      .set(tiket)
      .then((doc) => {
        console.log("se actualizo")
      })
      .catch((err) => {
        alert("Error");
      });
  };

  const subir = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const cerrarDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper
            className={classes.paper}
            elevation={0}
            sx={{ borderRadius: 5 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              {/****Caja para TextFiled de Falla****/}
              <Box
                boxShadow={5}
                borderRadius={2}
                paddingLeft={2}
                paddingRight={2}
                paddingTop={1}
              >
                <TextField
                  label="Descripcion Fallo"
                  variant="standard"
                  multiline
                  rows={3}
                  value={falla}
                  onChange={(e) => setFalla(e.target.value)}
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
                  Adjuntar archivos de soporte
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

              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                {/****Btn Solicitar****/}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => solicitar(e)}
                  className={classes.boton}
                  sx={{ marginTop: 0, fontSize: 14, marginRight: 2 }}
                >
                  Guardar Cambios
                </Button>
              </Grid>
            </Grid>
          </Paper>
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
            sx={{ marginTop: 0, fontSize: 14, marginLeft: 6 }}
          >
            Atras
          </Button>
          <IcAbajoCinco />
        </Grid>

        <Dialog fullWidth open={open} onClose={cerrarDialog}>
          <Grid container direction="row" padding={2} justify="center">
            <Grid xs={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseNew}
              >
                Cerrar
              </Button>
              <h3>Servicio Solicitado Correctamente</h3>
            </Grid>
            <Grid xs={6} textAlign="end"></Grid>
            <PDFViewer width="550" height="500">
              <Pdf
                id={id}
                falla={falla}
                setFalla={setFalla}
                anexos={anexos}
                nombre={nombre}
                email={email}
                direccion={direccion}
                cuidad={cuidad}
                celular={celular}
                categoria={categoria}
                maquinasSelec={maquinasSelec}
              />
            </PDFViewer>
          </Grid>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default PasoCuatrof;
