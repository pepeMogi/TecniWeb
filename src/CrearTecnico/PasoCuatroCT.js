import { Grid, Paper, Button, Avatar } from "@material-ui/core";
import { React, useState, createRef, useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "../fire";
import TemaFormu from "../Temas/TemaFormu";
import IcAbajoCinco from "../Iconos/icFabajoCinco";


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
    retroceder,
    nombre,
    cc,
    rh,
    tipo,
    bodega,
    celular,
    email,
    pass,
  } = props;
  const [progress, setProgress] = useState(0);
  const [img, setImg] = useState("");
  const [tecnico, setTecnico] = useState("");
  const hiddenFileInput = createRef(null);

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
              setImg(url);
              //  anexos.push(url);
              setProgress(0);
            });
        }
      );
    } else {
      //setError("Error please choose an image to upload");
    }
  };

  const crearTecnico = () => {
    var nombre = tecnico.nombre;
    var sin = nombre.split(' ').join('');
    var id = sin.toLowerCase();
    tecnico.id = id;
    tecnico.img = img;
    fire
      .auth()
      .createUserWithEmailAndPassword(tecnico.email, tecnico.pass)
      .then((user) => {
        fire
          .firestore()
          .collection("tecnicos")
          .doc(id)
          .set(tecnico)
          .then(() => {
            alert("todo bien, todo correcto y yo que me alegro");
          }).catch((err) =>{
              alert(err);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const subir = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    var tecnico = {
      id: "",
      nombre: nombre,
      img: "",
      cc: cc,
      rh: rh,
      tipo: tipo,
      bodega: bodega,
      celular: celular,
      email: email,
      pass: pass,
    };

    setTecnico(tecnico);
  }, []);

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper className={classes.paper} elevation={0}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar src={img} sx={{ height: 120, width: 120 }} />

              <Button
                variant="contained"
                color="primary"
                onClick={(e) => subir(e)}
                sx={{ marginTop: 1, fontSize: 12, marginTop: 6 }}
              >
                Escoger Imagen
              </Button>
              <input
                type="file"
                onChange={manejoCambio}
                style={{ display: "none" }}
                ref={hiddenFileInput}
              />
            </Grid>

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
                onClick={(e) => crearTecnico()}
                className={classes.boton}
                sx={{ fontSize: 14, marginTop: 6 }}
              >
                Guardar Cambios
              </Button>
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
      </ThemeProvider>
    </div>
  );
};

export default PasoCuatrof;
