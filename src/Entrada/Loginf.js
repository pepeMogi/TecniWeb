import { React, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Input,
  Fab,
  TextField,
  Grid,
  Avatar,
  Dialog,
  Paper,
  Grow,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fondoImage from "../Img/fondologin.jpg";
import Icadmin from "../Iconos/Icadminmin";
import TemaFormu from "../Temas/TemaFormu";
import TemaDialog from "../Temas/TemaDialog";
import LogoLimpio from "../logolimpio";
import IconAdmin from "../Iconos/icadmin";
import fondoDialog from "../Img/fondodialog.jpg";
import fire from "../fire";
import Lottie from "react-lottie";
import DataLottie from "../Anim/load.json";
import Pasosf from "../FNServicio/Pasosf";
import { ReactEasyNotify, notify } from "react-easy-notify";
import "react-easy-notify/dist/index.css";
import TiketDetalleNoEdit from "../Componentes/TiketsDetalle/TiketDetalleNoEdit";
import { tiket } from "./../Entidades/tikets";

/****Para Experiencia de usuario****/
const options = {
  type: "danger",
  title: "Ningun tiket asociado",
  status: true,
  timeout: 8000,
  message:
    "con este numero no hemos encontrado ningun tiket activo o inactivo, verifica el numero de tiket",
  position: "bottom-right",
  animationType: "vibration",
};

/***********Diseño***********/
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  editDialog: {
    height: 40,
    borderRadius: 10,
    width: 250,
    padding: 15,
    borderWidth: 10,
  },

  paper: {
    //backgroundColor: theme.palette.text.secondary,
  },
  editText: {
    marginTop: 10,
    justifySelf: "center",
    textOrientation: "center",
    textAlign: "center",
  },
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${fondoImage})`,
    width: "100%",
  },
};

// Gneral Focus Hook
const UseFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const Login = (props) => {
  const {
    email,
    setEmail,
    pass,
    setPass,
    logearUsuario,
    crearUsuario,
    cargando,
    setCargando,
  } = props;
  const [open, setOpen] = useState(false);
  const [abrirNT, setAbrirNT] = useState(false);
  const [opentiket, setOpenTiket] = useState(false);
  const [numTiket, setNumTiket] = useState("");
  const [tiketAqui, setTiketAqui] = useState("");
  const [openNew, setOpenNew] = useState("");
  const [user, setUser] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [tiketDetalle, setTiketeDetalle] = useState("");

  /*******Experiencia de Usuario********/

  const [inpCorrRef, setInpCorrRef] = UseFocus();
  const [inpPassRef, setInpPassRef] = UseFocus();
  const [inpButRef, setInpButRef] = UseFocus();

  const [inpNumRef, setInpNumRef] = UseFocus();
  const [inpBtnRef, setInpBtnRef] = UseFocus();

  const escucharTecla = (e) => {
    console.log("precionado");

    if (e.key == "Enter") {
      console.log("Enter precionado");
      switch (e.target.value) {
        case email:
          console.log("Eamil");
          setInpPassRef();
          break;
        case pass:
          console.log("EPass");
          setInpButRef();
          break;
        // para consultar tiket
        case numTiket:
          setInpBtnRef();
          break;
      }
    }
  };

  /****************************************** */

  const classes = useStyles();

  /************Funcionalidad*******************/

  /*******************************************
   * Manejo de Clikc abrir:
   * maneja el evento de abrir el dialogo
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /******************************************
   * Manejo de Cierre:
   * maneja el evento de cerrar el Dialogo,
   * verifica si se ha ingresado algun email;
   * si es asi ejecuta la funcion
   * pasada por props logearUsuario.
   */
  const handleClose = (e) => {
    e.preventDefault();
    if (email != "") {
      setCargando(true);
      logearUsuario();
    }

    setOpen(false);
  };

  
  const imprimir = () => {
    window.print();
  };

  /*******************************************
   * Manejo de Clikc abrir:
   * maneja el evento de abrir el dialogo
   */
  const handleClickOpenTiket = () => {
    setOpenDialog(true);
    console.log("abriendo Tiket...");
  };

  /******************************************
   * Manejo de Cierre:
   * maneja el evento de cerrar el Dialogo,
   * verifica si se ha ingresado algun email;
   * si es asi ejecuta la funcion
   * pasada por props logearUsuario.
   */
  const handleCloseTiket = () => {
    setOpenTiket(false);
  };

  /*******************************************
   * manejo de dialogo apertura solicitar servicio
   */
  const handleOpenNew = () => {
    setOpenNew(true);
  };

  /********************************************
   * manejo cierre dialogo solicitar servicio
   */
  const handleCloseNew = () => {
    setOpenNew(false);
  };

  const manejoCerrarDialog = () => {
    setOpenDialog(false);
  };

  /************************************************
   * consultar tikets:
   * verifica si numTiket tiene un valor, consulta
   * en firestores = tikets/numTiket si existe,
   * abre el dialogo que contiene el valor del }
   * documento con id numTiket
   */
  const consultarTiket = (e) => {
    if (numTiket != "") {
      var numero = numTiket;
      if (numTiket.charAt(0) == "T" || numTiket.charAt(0) == "t") {
      } else {
        numero = "t" + numTiket;
        console.log(numero);
      }

      fire
        .firestore()
        .collection("tikets")
        .doc(numero)
        .get()
        .then((doc) => {
          if (doc.exists) {
            var tik = new tiket(doc);
            setTiketeDetalle(tik);

            handleClickOpenTiket();
          } else {
            options.message =
              "con el numero [" +
              numTiket +
              "] no hemos encontrado ningun tiket activo o inactivo, verifica el numero de tiket";
            notify(options);
          }
        });
    } else {
      alert("no hay numero de tiket");
    }
  };

  const abrirDialogo = () => {
    setAbrirNT(true);
  };

  const cerrarDialog = () => {
    setAbrirNT(false);
  };

  /*********Diseño***********************/

  /***Anim Lottie****/
  const defaultOptions = {
    autoplay: true,
    animationData: DataLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={styles.paperContainer} className={classes.fondo}>
      <ReactEasyNotify />
      {/****Anim Cargando */}

      {/***pendiente retirar****/}
      {false ? (
        <Lottie
          options={defaultOptions}
          height={350}
          width={350}
          style={{ zIndex: 15, position: "absolute", marginLeft: 1100 }}
          Hola
        />
      ) : (
        <div />
      )}

      {/****grid para Fab ingresar admin****/}
      <Box
        sx={{
          display: "grid", // tipo de sx
          p: 2, // padding
          //    bgcolor: "#E4E4E4",  color fondo
          color: "white", // color texto
          justifyContent: "flex-end", // alineacion de contenido
        }}
      >
        <Fab
          aria-label="add"
          onClick={handleClickOpen}
          sx={{
            marginRight: 1,
            backgroundColor: "#3D3D3D",
            borderRadius: 15,
            justifySelf: "center",
            color: "#FDFDFD",
            borderColor: "#FDFDFD",
            "&:hover": {
              borderColor: "#EC1B3B",
            },
          }}
        >
          <Icadmin />
        </Fab>
      </Box>

      {/****Contenedor de forma Columna****/}
      <Container className={classes.paper}>
        <Box
          sx={{
            display: "grid", // tipo de sx
            p: 2, // padding
            //  bgcolor: "#CBCBCB",  color fondo
            color: "white", // color texto
            justifyContent: "center", // alineacion de contenido
          }}
        >
          {/****Tit Solicita nuestro servicios****/}
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{
              width: 400,
              marginTop: 1,
              justifySelf: "center", // alinea el contenido
              fontWeight: 600,
            }}
          >
            Solicita nuestros servicios para tener el gusto de atenderte
          </Typography>

          {/****Btn Solicitar servicio****/}
          <Button
            variant="outlined"
            onClick={(e) => abrirDialogo(e)}
            sx={{
              marginTop: 6,
              width: 200,
              justifySelf: "center",
              color: "#FDFDFD",
              borderColor: "#FDFDFD",
              "&:hover": {
                borderColor: "#EC1B3B",
              },
            }}
          >
            Solicitar Servicio
          </Button>

          {/****Tit ya eres cliente****/}
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              width: 700,
              marginTop: 16,
              justifySelf: "center",
              fontWeight: 900,
            }}
          >
            ¿YA ERES CLIENTE?
          </Typography>

          {/****Tit ingresa Codigo****/}
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{
              width: 800,
              marginTop: 2,
              justifySelf: "center",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Ingresa el codigo de tu tiket para conocer el estado de tu servicio
          </Typography>

          {/****Edit Numero de Tiket****/}
          <Input
            placeholder="Ingresar Codigo"
            className={classes.editText}
            inputRef={inpNumRef}
            value={numTiket}
            onChange={(e) => setNumTiket(e.target.value)}
            onKeyPress={(e) => escucharTecla(e)}
            inputProps={{
              style: {
                textAlign: "center",
                fontSize: 24,
                color: "#FDFDFD",
                borderColor: "#FDFDFD",
              },
            }}
          />

          {/****Btn Cunsultar Tiket****/}
          <Button
            variant="contained"
            color="primary"
            ref={inpBtnRef}
            onClick={(e) => consultarTiket(e)}
            sx={{
              marginTop: 5,
              width: 190,
              justifySelf: "center",
              backgroundColor: "#EC1B3B",
              height: 40,
              borderRadius: 0,
              fontWeight: 800,
              fontSize: 20,
              "&:hover": {
                backgroundColor: "#3D3D3D",
                color: "#EC1B3B",
              },
            }}
          >
            Cosultar
          </Button>

          {/****tit Somos La empresa****/}
          <Typography
            variant="h8"
            component="h2"
            align="center"
            fontWeight={900}
            sx={{
              width: 1000,
              marginTop: 13,
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 3,
            }}
          >
            SOMOS LA EMPRESA LÍDER EN LA REGIÓN EN COMERCIALIZACIÓN Y
            MANTENIMIENTO DE EQUIPOS PARA IMPRESIÓN
          </Typography>
        </Box>
      </Container>

      {/****Dialog para Admin****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog
          open={open}
          style={{ backgroundImage: `url(${fondoDialog})` }}
          onClose={handleClose}
          TransitionComponent={Grow}
        >
          <ThemeProvider theme={TemaFormu}>
            <Paper
              sx={{
                width: 420,
                height: 570,
              }}
            >
              <LogoLimpio />
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    marginTop: 4,
                    backgroundColor: "#3D3D3D",
                  }}
                >
                  <IconAdmin />
                </Avatar>

                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Administradores
                </Typography>
                {/******Caja para TextFiled de Corrreo */}
                <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                  <TextField
                    label="Correo Electronico"
                    variant="outlined"
                    size="small"
                    autoFocus
                    inputRef={inpCorrRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => escucharTecla(e)}
                    InputProps={{
                      className: classes.editDialog,
                    }}
                  />
                </Box>
                {/******Caja para TextFiled de Constraseña  */}
                <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                  <TextField
                    label="Cotraseña"
                    variant="outlined"
                    size="small"
                    inputRef={inpPassRef}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    onKeyPress={(e) => escucharTecla(e)}
                    type="password"
                    InputProps={{
                      className: classes.editDialog,
                    }}
                  />
                </Box>

                {/****txt olvidaste yu contraseña****/}
                <Typography color="primary" sx={{ margin: 4 }}>
                  ¿Olvidaste tu contraseña?
                </Typography>

                {/****Btn Entrar Admin****/}
                <Button
                  variant="contained"
                  color="primary"
                  ref={inpButRef}
                  onClick={(e) => handleClose(e)}
                  sx={{ height: 40, width: 120, marginTop: 2 }}
                >
                  Ingresar
                </Button>
              </Grid>
            </Paper>
          </ThemeProvider>
        </Dialog>

        {/****Dialog Nuevo Tiket****/}
        <Dialog
          fullWidth={true}
          open={abrirNT}
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          onClose={(e) => cerrarDialog(e)}
        >
          <Pasosf cerrarDialog={cerrarDialog} />
        </Dialog>
      </ThemeProvider>

      {/****Dialog Consultar Tiket****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog open={openDialog} onClose={manejoCerrarDialog}>
        <ThemeProvider theme={TemaFormu}>
        <Grid container direction="column" padding={2} justify="center">
            <Grid
              container
              direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
            >
              

              <Button
                variant="outlined"
                color="primary"
                onClick={(e) => imprimir(e)}
              >
                Imprimir
              </Button>
            </Grid>

            <TiketDetalleNoEdit tiketDetalle={tiketDetalle} />
          </Grid>
          </ThemeProvider>
        </Dialog>
       


        
      </ThemeProvider>
    </div>
  );
};

export default Login;
