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
  Typography,
  Fade,
  CircularProgress
} from "@material-ui/core";
import { React, useState, createRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "../fire";
import TemaFormu from "../Temas/TemaFormu";
import IcAbajoCinco from "../Iconos/icFabajoCinco";
import TiketNuevo from "./../Tiket/TiketNuevo";
import algoliasearch from "algoliasearch";



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
    falla,
    setFalla,
    anexos,
    nombre,
    email,
    direccion,
    cuidad,
    celular,
    celularDos,
    maquinasSelec,
    cerrarDialog,
    retroceder,
  } = props;

  const [progress, setProgress] = useState(0);
  const [prog,setProg] = useState(false);
  const [progFin,setProgFin] = useState(false);
  const [open, setOpen] = useState(false);
  const hiddenFileInput = createRef(null);
  const [tiketDetalle, setTiketeDetalle] = useState("");

  const client = algoliasearch(
    "BSGVLDWAAA",
    "a6a2592069708d0523908a39c1860f24"
  );
  const index = client.initIndex("tikets");

  const classes = useStyles();

  /*****************************************
   * Manejo Cambio:
   * obtiene el cambion de estado en el input,
   * valida si es una image
   */
  const manejoCambio = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProg(true);
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
              setProg(false);
            });
        }
      );
    } else {
      //setError("Error please choose an image to upload");
    }
  };

  const subirAlgolia = (tiket) => {
    console.log("subiendo a algolia...");

    var text = "";
    tiket.maquinas.forEach((id) => {
      text += " " + id;
    });

    var tiket = {
      objectID: tiket.id,
      nombre: tiket.nombre,
      asignado: tiket.asignado,
      ciudad: tiket.ciudad,
      estado: tiket.estado,
      factura: tiket.factura,
      fechaCreacion: getFecha(tiket.fechaCreacion), // new Date();
      prioridad: tiket.prioridad,
      tipo: tiket.tipo,

      maquinas: text,
      nit: "",
      factura: "",
    };

    index
      .saveObject(tiket, {
        // All the following parameters are optional
        autoGenerateObjectIDIfNotExist: false,
        // any other requestOptions
      })
      .then((resul) => {
        console.log("subido a algolia => " + resul);
      });
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

  const imprimir = () => {
    window.print();
  };

  const getFecha = (timestamp) => {
    const months = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    let current_datetime = timestamp;
    let formatted_date =
      current_datetime.getDate() +
      "-" +
      months[current_datetime.getMonth()] +
      "-" +
      current_datetime.getFullYear();

    return formatted_date;
  };

  /*****************************************************
   * Solicitar
   */
  const solicitar = (e) => {
    e.preventDefault();
    setProgFin(true);
    fire
      .firestore()
      .collection("contadores")
      .doc("numTikets")
      .get()
      .then((doc) => {
        var cosecutivo = parseInt(doc.data().numero);
        cosecutivo += 1;

        var idTiket = "t" + cosecutivo;

        const tiket = {
          id: idTiket,
          celular: celular,
          celularDos: celularDos ? celularDos : "",
          nombre: nombre,
          tipo: "",
          fechaCreacion: new Date(),
          estado: "nuevo",
          direccion: direccion,
          ciudad: cuidad,
          factura: "0",
          maquinas: maquinasSelec,
          falla: falla,
          diagnostico: new Array(),
          asignado: "",
          email: email,
          anexos: anexos,
          idCliente: id,
          legalizacion: new Date("00000000000"),
          prioridad: 0,
          ultimaVisita: new Date("00000000000"),
        };

        fire
          .firestore()
          .collection("tikets")
          .doc(idTiket)
          .set(tiket)
          .then((doc) => {
            subirAlgolia(tiket);

            var fecha = getFecha(tiket.fechaCreacion);
            tiket.fechaCreacion = fecha;
            tiket.legalizacion = "0";
            setTiketeDetalle(tiket);
            
            fire
              .firestore()
              .collection("contadores")
              .doc("numTikets")
              .update({ numero: cosecutivo })
              .then((doc) => {
                setOpen(true);
                setProgFin(false);
              })
              .catch((err) => {
                alert("intentar otra vez");
                setProgFin(false);
              });
          })
          .catch((err) => {
            alert("Error");
            setProgFin(false);
          });
      })
      .catch((err) => {
        alert("get numero " + err.message);
        setProgFin(false);
      });
  };

  const subir = (e) => {
    e.preventDefault();
    
    hiddenFileInput.current.click();
  };

  const cerrarDialogCinco = () => {
    setOpen(false);
    cerrarDialog();
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
            
            <Fade
                  in={prog}
                  style={{
                    transitionDelay: "800ms",
                   position: "absolute",
                  }}
                  unmountOnExit
                  sx={{ marginLeft: 0, marginTop: 17.5 }}
                >
                  <CircularProgress size={20} />
                </Fade>
           

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
                  Adjuntar imagenes de fallo (esto de agilizara el servicio)
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
                  sx={{ marginLeft: 30, marginTop: 39 }}
                >
                  <CircularProgress size={36} />
                </Fade>
              

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
                  SOLICITAR SERVICIO
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
          <Grid container direction="column" padding={2} justify="center">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontSize: 16, fontWeight: 600, marginLeft: 2 }}>
                Servicio Solicitado Correctamente
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                onClick={(e) => imprimir(e)}
              >
                Imprimir
              </Button>
            </Grid>

            <TiketNuevo tiketDetalle={tiketDetalle}  />
          </Grid>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default PasoCuatrof;
