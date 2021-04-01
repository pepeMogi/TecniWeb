import {
  TextField,
  Grid,
  Button,
  Paper,
  Dialog,
  Avatar,
  Typography,
  Box,
  Grow,
  Fade,
  CircularProgress,
} from "@material-ui/core";
import algoliasearch from "algoliasearch";
import { React, useRef, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import fire from "../fire";
import TemaFormu from "../Temas/TemaFormu";
import TemaDialog from "../Temas/TemaDialog";
import IcAbajo from "../Iconos/icFabajo";
import IcAbajoMin from "../Iconos/icFabajoMin";
import IcCliente from "./../Iconos/icCliente";
import IcClienteMin from "./../Iconos/icClienteMin";
import LogoLimpio from "../logolimpio";
import { ReactEasyNotify, notify } from "react-easy-notify";
import "react-easy-notify/dist/index.css";
import { cliente } from "./../Entidades/cliente";
import { clienteNuevo } from "./../Entidades/clienteNuevo";

/****Para Experiencia de usuario****/
const options = {
  type: "danger",
  title: "Contraseñas no coinciden",
  status: true,
  timeout: 6000,
  message: "Las contraseñas ingresadas no coinciden, favor verifiquelas",
  position: "top-right",
  animationType: "vibration",
};

const correoEnviado = {
  type: "success",
  title: "Se envió enlace a tu correo",
  status: true,
  timeout: 10000,
  message: "Hemos enviado los pasos para recuperar tu contraseña a tu correo",
  position: "top-right",
  animationType: "vibration",
};

const correoMal = {
  type: "danger",
  title: "Formato de Correo",
  status: true,
  timeout: 6000,
  message: "El Correo Electronico no corresponde a un formato de correo valido",
  position: "top-right",
  animationType: "vibration",
};

const correoRepetido = {
  type: "danger",
  title: "Correo Electronico Repetido",
  status: true,
  timeout: 6000,
  message: "El Correo Electronico ya esta siendo usado por otro usuario",
  position: "top-right",
  animationType: "vibration",
};

const correoGeneral = {
  type: "danger",
  title: "Error inesperado",
  status: true,
  timeout: 6000,
  message: "revisa los datos ingresados o tu conexion de internet",
  position: "top-right",
  animationType: "vibration",
};

const correoNoEncontrado = {
  type: "danger",
  title: "Correo de Usuario",
  status: true,
  timeout: 6000,
  message:
    "correo no en contrado, verifique su correo o registrece como cliente",
  position: "top-right",
  animationType: "vibration",
};

const errorEncontrasena = {
  type: "danger",
  title: "Contraseña incorrecta",
  status: true,
  timeout: 6000,
  message: "Si olvido su contraseña de click en ¿olvidaste tu contraseña?",
  position: "top-right",
  animationType: "vibration",
};

const errorDesconocido = {
  type: "danger",
  title: "Error en Correo y Contraseña",
  status: true,
  timeout: 6000,
  message:
    "Un error desconocido ocurrio al ingresar a su cuenta, favor comunique se con el administrador",
  position: "top-right",
  animationType: "vibration",
};

const useStyles = makeStyles((theme) => ({
  editDialogLar: {
    height: 40,
    borderRadius: 10,
    width: 350,
    padding: 15,
    borderWidth: 10,
  },
  editDialogRecuperar: {
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 10,
  },

  editDialog: {
    height: 40,
    borderRadius: 10,
    width: 250,
    padding: 15,
    borderWidth: 10,
  },
  paperUno: {
    height: 350,
    width: 500,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  boton: {
    width: 190,
    height: 50,
  },

  paperTiket: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },

  gridLogin: {
    padding: 50,
  },

  paperLogin: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    margin: 25,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// Gneral Focus Hook
const UseFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const PasoUnof = (props) => {
  const {
    avanzar,
    nombre,
    setNombre,
    email,
    setEmail,
    direccion,
    setDireccion,
    celular,
    setCelular,
    celularDos,
    setCelularDos,
    ciudad,
    setCiudad,
    maquinasCliente,
    setIdCliente,
    setSolicitante,
  } = props;

  const [open, setOpen] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [emailP, setEmailP] = useState("");
  const [passP, setPassP] = useState("");
  const [passPDos, setPassPDos] = useState("");
  const [recuperar, setRecuperar] = useState(false);

  /*******Experiencia de Usuario********/

  const [inpCorrRef, setInpCorrRef] = UseFocus();
  const [inpPassRef, setInpPassRef] = UseFocus();
  const [inpButRef, setInpButRef] = UseFocus();

  const [inpNomRef, setInpNomRef] = UseFocus();
  const [inpDirRef, setInpDirRef] = UseFocus();
  const [inpCiuRef, setInpCiuRef] = UseFocus();
  const [inpCelUnoRef, setInpCelUnoRef] = UseFocus();
  const [inpCelDosRef, setInpCelDosRef] = UseFocus();
  const [inpEmaRef, setInpEmaRef] = UseFocus();
  const [inpPassUnoRef, setInpPassUnoRef] = UseFocus();
  const [inpPassDosRef, setInpPassDosRef] = UseFocus();
  const [inpBtnRef, setInpBtnRef] = UseFocus();
  const [prog, setProg] = useState(false);

  const escucharTecla = (e) => {
    console.log("precionado");

    if (e.key == "Enter") {
      console.log("Enter precionado");
      switch (e.target.value) {
        case emailP:
          console.log("Eamil");

          setInpPassRef();

          break;
        case passP:
          console.log("EPass");
          if (passPDos) {
            verificarDatos();
          } else {
            setInpPassRef();
          }
          setInpButRef();
          break;
        // para cliente nuevo
        case nombre:
          setInpDirRef();
          break;
        case direccion:
          setInpCelUnoRef();
          break;
        case celular:
          setInpEmaRef();
          break;
        case emailP:
          setInpPassUnoRef();
          break;
        case passP:
          setInpPassDosRef();
          break;
        case passPDos:
          verificarDatos();
          break;
      }
    }
  };

  const verificarDatos = () => {
    console.log("verificando datos");
    if (passP === passPDos) {
      if (!nombre) {
        setInpNomRef();
      } else if (!direccion) {
        setInpDirRef();
      } else if (!celular) {
        setInpCelUnoRef();
      } else if (!emailP) {
        setInpEmaRef();
      } else if (!passP) {
        setInpPassRef();
      } else {
        crearUsuario();
      }
    } else {
      notify(options);
      setInpPassRef();
    }
  };

  const manejoOpenOpen = () => {
    setOpen(true);
  };

  const manejoOpenNew = () => {
    setOpenNew(true);
  };

  const manejoClose = () => {
    setOpen(false);
  };

  const manejoCloseNew = () => {
    setOpenNew(false);
  };

  const abrirRecuperar = () => {
    setRecuperar(true);
  };

  const cerrarRecuperar = () => {
    setRecuperar(false);
  };

  /*******************************
   * Logerar Usuario
   */
  const LogearUsuario = (e) => {
    e.preventDefault();
    console.log("logenado usuario");
    setProg(true);
    fire
      .auth()
      .signInWithEmailAndPassword(emailP, passP)
      .then((user) => {
        console.log("se encontro algo");

        fire
          .firestore()
          .collection("clientes")
          .where("email", "==", emailP.toLowerCase())
          .get()
          .then((snap) => {
            snap.forEach((doc) => {
              var cli = new cliente(doc);

              setNombre(cli.nombre);
              setSolicitante(cli.nombre);
              setEmail(cli.email);
              setDireccion(cli.direccion);
              setCelular(cli.celular);
              setCiudad(cli.ciudad);
              setIdCliente(cli.id);
              setProg(false);
              llenarMaquinas(cli.id);
            });
          })
          .catch((err) => {
            alert(err.code);
            setProg(false);
          });
      })
      .catch((err) => {
        console.log(err.code);
        setProg(false);

        switch (err.code) {
          case "auth/user-not-found":
            notify(correoNoEncontrado);
            break;
          case "auth/wrong-password":
            notify(errorEncontrasena);
            break;
          default:
            notify(errorDesconocido);
        }
      });
  };

  const recuperarContrasena = () => {
    fire
     
      .auth()
      .sendPasswordResetEmail(emailP)
      .then(function () {
        notify(correoEnviado);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  /****************************************
   * Llenar Maquinas
   * consulta las maquinas que tengan como
   * propietario el Id del Cliesnte
   */
  const llenarMaquinas = (idCliente) => {
    console.log(idCliente);
    fire
      .firestore()
      .collection("maquinas")
      .where("cliente", "==", idCliente)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          const maquina = {
            id: doc.data().id,
            nombre: doc.data().nombre,
            marca: doc.data().marca,
            img: doc.data().img,
            modelo: doc.data().modelo,
          };
          maquinasCliente.push(maquina);
        });
        manejoClose();
        avanzar();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const client = algoliasearch(
    "BSGVLDWAAA",
    "a6a2592069708d0523908a39c1860f24"
  );

  const index = client.initIndex("clientes");

  const crearClienteAlgolia = (clienteSubir) => {
    var cliAlgolia = {
      objectID: clienteSubir.id,
      email: clienteSubir.email,
      cc: clienteSubir.cc,
      celular: clienteSubir.celular,
      direccion: clienteSubir.direccion + " " + clienteSubir.ciudad,
      img: clienteSubir.img,
      nombre: clienteSubir.nombre,
    };

    index
      .saveObject(cliAlgolia, {
        // All the following parameters are optional
        autoGenerateObjectIDIfNotExist: false,
        // any other requestOptions
      })
      .then((resul) => {
        console.log("subido a algolia => " + resul);
      });
  };

  /*******************************
   * Crear Usuario
   */
  const crearUsuario = () => {
    console.log("Creando Usuario");
    console.log(emailP, passP + "creando usuario");

    setProg(true);
    fire
      .auth()
      .createUserWithEmailAndPassword(emailP, passP)
      .then((user) => {
        var cliente = new clienteNuevo(
          new Date().getTime().toString(),
          nombre,
          direccion,
          celular,
          emailP
        );

        var clienteSubir = {
          cc: cliente.cc,
          celular: cliente.celular,
          ciudad: cliente.ciudad,
          direccion: cliente.direccion,
          email: cliente.email,
          id: cliente.id,
          img: cliente.img,
          nombre: cliente.nombre,
          rut: cliente.rut,
        };

        fire
          .firestore()
          .collection("clientes")
          .doc(clienteSubir.id)
          .set(clienteSubir)
          .then((user) => {
            setNombre(nombre);
            setSolicitante(nombre);
            setEmail(emailP);
            setDireccion(direccion);
            setCelular(celular);
            setIdCliente(clienteSubir.id);

            manejoCloseNew();
            setProg(false);
            crearClienteAlgolia(clienteSubir);
            avanzar();
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        console.log(err.code);
        switch (err.code) {
          case "auth/invalid-email":
            notify(correoMal);
            break;
          case "auth/email-already-in-use":
            notify(correoRepetido);
            break;
          default:
            notify(correoGeneral);
        }

        setProg(false);
      });
  };

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
              <Button
                variant="contained"
                color="primary"
                onClick={manejoOpenOpen}
                className={classes.boton}
                sx={{ marginTop: 8, fontSize: 16 }}
              >
                SOY CLIENTE
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={manejoOpenNew}
                className={classes.boton}
                sx={{ marginTop: 6, fontSize: 16 }}
              >
                SOY NUEVO
              </Button>

              <IcAbajo sx={{ marginTop: 55 }} />
            </Grid>
          </Paper>
        </Grid>

        {/****Dialog para Cliente****/}
        <ThemeProvider theme={TemaDialog}>
          <Dialog open={open} onClose={manejoClose} TransitionComponent={Grow}>
            <ThemeProvider theme={TemaFormu}>
              <Paper
                sx={{
                  width: 420,
                  height: 570,
                }}
              >
                <Fade
                  in={prog}
                  style={{
                    transitionDelay: "800ms",
                    position: "absolute",
                  }}
                  unmountOnExit
                  sx={{ marginLeft: 45, marginTop: 2 }}
                >
                  <CircularProgress />
                </Fade>
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
                    <IcCliente />
                  </Avatar>

                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Cliente
                  </Typography>
                  {/******Caja para TextFiled de Corrreo */}
                  <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                    <TextField
                      label="Correo Electronico"
                      variant="outlined"
                      size="small"
                      autoFocus
                      inputRef={inpCorrRef}
                      value={emailP}
                      onChange={(e) => setEmailP(e.target.value)}
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
                      value={passP}
                      inputRef={inpPassRef}
                      onChange={(e) => setPassP(e.target.value)}
                      onKeyPress={(e) => escucharTecla(e)}
                      type="password"
                      InputProps={{
                        className: classes.editDialog,
                      }}
                    />
                  </Box>

                  {/****txt olvidaste yu contraseña****/}
                  <Typography
                    color="primary"
                    sx={{ margin: 4 }}
                    onClick={() => abrirRecuperar()}
                  >
                    ¿Olvidaste tu contraseña?
                  </Typography>

                  {/****Btn Entrar Admin****/}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => LogearUsuario(e)}
                    ref={inpButRef}
                    sx={{ height: 40, width: 120, marginTop: 2 }}
                  >
                    Ingresar
                  </Button>
                </Grid>
              </Paper>
            </ThemeProvider>
          </Dialog>
        </ThemeProvider>

        {/****Dialog para Cliente Nuevo****/}
        <ThemeProvider theme={TemaDialog}>
          <ReactEasyNotify />
          <Dialog
            open={openNew}
            onClose={manejoCloseNew}
            TransitionComponent={Grow}
          >
            <ThemeProvider theme={TemaFormu}>
              <Paper
                sx={{
                  width: 460,
                  height: 620,
                }}
              >
                <Fade
                  in={prog}
                  style={{
                    transitionDelay: "800ms",
                    position: "absolute",
                  }}
                  unmountOnExit
                  sx={{ marginLeft: 50, marginTop: 2 }}
                >
                  <CircularProgress />
                </Fade>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      marginTop: 3,
                      backgroundColor: "#3D3D3D",
                      marginRight: 4,
                    }}
                  >
                    <IcClienteMin />
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{ marginTop: 3, alignSelf: "center" }}
                  >
                    Registrarme como cliente
                  </Typography>
                </Grid>

                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/******Caja para TextFiled de Nombres y apellidos */}
                  <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 4 }}>
                    <TextField
                      label="Nombres y apellidos"
                      variant="outlined"
                      required
                      size="small"
                      autoFocus
                      value={nombre}
                      inputRef={inpNomRef}
                      onKeyPress={(e) => escucharTecla(e)}
                      onChange={(e) => setNombre(e.target.value)}
                      InputProps={{
                        className: classes.editDialogLar,
                      }}
                    />
                  </Box>

                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    {/******Caja para TextFiled de Dirección */}
                    <Box
                      boxShadow={5}
                      borderRadius={2}
                      sx={{ marginTop: 3, marginLeft: 7 }}
                    >
                      <TextField
                        label="Dirección"
                        required
                        variant="outlined"
                        size="small"
                        value={direccion}
                        inputRef={inpDirRef}
                        onKeyPress={(e) => escucharTecla(e)}
                        onChange={(e) => setDireccion(e.target.value)}
                        InputProps={{
                          className: classes.editDialogLar,
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    {/******Caja para TextFiled de Número de contacto */}
                    <Box
                      boxShadow={5}
                      borderRadius={2}
                      sx={{ marginTop: 3, marginLeft: 7 }}
                    >
                      <TextField
                        label="Celular uno"
                        variant="outlined"
                        required
                        size="small"
                        value={celular}
                        inputRef={inpCelUnoRef}
                        onKeyPress={(e) => escucharTecla(e)}
                        onChange={(e) => setCelular(e.target.value)}
                        InputProps={{
                          className: classes.editDialogLar,
                          shrink: false,
                        }}
                      />
                    </Box>
                  </Grid>

                  {/******Caja para TextFiled de Corrreo */}
                  <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 3 }}>
                    <TextField
                      label="Correo Electronico"
                      required
                      variant="outlined"
                      size="small"
                      value={emailP}
                      inputRef={inpEmaRef}
                      onKeyPress={(e) => escucharTecla(e)}
                      onChange={(e) => setEmailP(e.target.value)}
                      InputProps={{
                        className: classes.editDialogLar,
                      }}
                    />
                  </Box>

                  {/******Caja para TextFiled de Contraseña */}
                  <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 3 }}>
                    <TextField
                      label="Contraseña"
                      required
                      variant="outlined"
                      size="small"
                      type="password"
                      value={passP}
                      inputRef={inpPassRef}
                      onKeyPress={(e) => escucharTecla(e)}
                      onChange={(e) => setPassP(e.target.value)}
                      InputProps={{
                        className: classes.editDialogLar,
                      }}
                    />
                  </Box>

                  {/******Caja para TextFiled de Confirmar contraseña */}
                  <Box boxShadow={5} borderRadius={2} sx={{ marginTop: 3 }}>
                    <TextField
                      label="Confirmar contraseña"
                      variant="outlined"
                      size="small"
                      type="password"
                      value={passPDos}
                      inputRef={inpButRef}
                      onKeyPress={(e) => escucharTecla(e)}
                      onChange={(e) => setPassPDos(e.target.value)}
                      InputProps={{
                        className: classes.editDialogLar,
                      }}
                    />
                  </Box>

                  {/****Btn Crear Usario****/}
                  <Button
                    variant="contained"
                    color="primary"
                    ref={inpBtnRef}
                    onClick={(e) => verificarDatos(e)}
                    sx={{ height: 34, width: 130, marginTop: 4 }}
                  >
                    Ingresar
                  </Button>

                  <IcAbajoMin />
                </Grid>
              </Paper>
            </ThemeProvider>
          </Dialog>

          {/***Recuperar Contraseña****/}
          <Dialog open={recuperar} onClose={(e) => cerrarRecuperar(e)}>
            <ThemeProvider theme={TemaFormu}>
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
                    Escribe tu correo electronico de usuario
                  </Typography>

                  <Box
                    boxShadow={5}
                    borderRadius={2}
                    paddingLeft={2}
                    paddingRight={2}
                    paddingTop={1}
                    sx={{ width: 240, marginTop: 4 }}
                  >
                    <TextField
                      label="Correo electronico"
                      variant="standard"
                      multiline
                      rows={3}
                      fullWidth
                      value={emailP}
                      onChange={(e) => setEmailP(e.target.value)}
                      InputProps={{
                        className: classes.editDialogRecuperar,
                      }}
                    />
                  </Box>

                  <Button
                    onClick={(e) => recuperarContrasena(e)}
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 4 }}
                  >
                    Continuar
                  </Button>
                </Grid>
              </Box>
            </ThemeProvider>
          </Dialog>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};

export default PasoUnof;
