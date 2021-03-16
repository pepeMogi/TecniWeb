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

const useStyles = makeStyles((theme) => ({
  editDialogLar: {
    height: 40,
    borderRadius: 10,
    width: 350,
    padding: 15,
    borderWidth: 10,
  },

  editDialogDir: {
    height: 42,
    borderRadius: 10,
    width: 220,
    padding: 15,
    borderWidth: 10,
  },

  editDialogCiu: {
    height: 42,
    borderRadius: 10,
    width: 114,
    padding: 15,
    borderWidth: 10,
  },

  editDialogPeq: {
    height: 42,
    borderRadius: 10,
    width: 166,
    padding: 15,
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
    setIdCliente
  } = props;

  const [open, setOpen] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [emailP, setEmailP] = useState("");
  const [passP, setPassP] = useState("");
  const [passPDos, setPassPDos] = useState("");

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
          setInpButRef();
          break;
        // para cliente nuevo
        case nombre:
          setInpDirRef();
          break;
        case direccion:
          setInpCiuRef();
          break;
        case ciudad:
          setInpCelUnoRef();
          break;
        case celular:
          setInpCelDosRef();
          break;
        case celularDos:
          setInpEmaRef();
          break;
        case emailP:
          setInpPassUnoRef();
          break;
        case passP:
          setInpPassDosRef();
          break;
        case passPDos:
          setInpBtnRef();
          break;
      }
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

  const getId = (correo) => {
    let id = correo.replaceAll(".", "_");
    let minus = id.replaceAll("@", "-");
    let path = minus.toLowerCase();
    return path;
  };

  /*******************************
   * Logerar Usuario
   */
  const LogearUsuario = (e) => {
    e.preventDefault();
    console.log("logenado usuario");
    setProg(true)
    fire
      .auth()
      .signInWithEmailAndPassword(emailP, passP)
      .then((user) => {
        var camino = getId(emailP);
        console.log("se encontro algo");
        fire
          .firestore()
          .collection("clientes")
          .doc(camino)
          .get()
          .then((cliente) => {
            setProg(false);
            console.log("se encontro algo");
            setNombre(cliente.data().nombre);
            setEmail(emailP);
            setDireccion(cliente.data().direccion);
            setCelular(cliente.data().celular);
            console.log(cliente.data().celular);
            setCiudad(cliente.data().ciudad);
            console.log(cliente.data().celularDos);
            setCelularDos(cliente.data().celularDos);
            setIdCliente(cliente.data().id)

            llenarMaquinas(camino);
          })
          .catch((err) => {
            alert(err.message);
            setProg(false);
          });
      })
      .catch((err) => {
        alert(err.message);
        setProg(false);
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

  /*******************************
   * Crear Usuario
   */
  const crearUsuario = (e) => {
    e.preventDefault();

    console.log("Creando Usuario");
    console.log(emailP, passP + "creando usuario");
    if (passP === passPDos) {
      setProg(true);
      fire
        .auth()
        .createUserWithEmailAndPassword(emailP, passP)
        .then((user) => {
          setNombre(nombre);
          setEmail(emailP);
          setDireccion(direccion);
          setCelular(celular);

          var path = getId(emailP);
          var docData = {
            id: path,
            nombre: nombre,
            email: emailP,
            direccion: direccion,
            celular: celular,
            celularDos: celularDos,
            ciudad: ciudad,
            cedula: "",
          };

          fire
            .firestore()
            .collection("clientes")
            .doc(path)
            .set(docData)
            .then((user) => {
              setIdCliente(path);
              manejoCloseNew();
              setProg(false);
              avanzar();
            })
            .catch((err) => {
              alert(err.message);
            });
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      notify(options);
      setInpPassRef();
    }
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
                  <Typography color="primary" sx={{ margin: 4 }}>
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
                          className: classes.editDialogDir,
                        }}
                      />
                    </Box>

                    {/******Caja para TextFiled de Ciudad */}
                    <Box
                      boxShadow={5}
                      borderRadius={2}
                      sx={{ marginTop: 3, marginLeft: 2 }}
                    >
                      <TextField
                        label="Ciudad"
                        variant="outlined"
                        size="small"
                        value={ciudad}
                        inputRef={inpCiuRef}
                        onKeyPress={(e) => escucharTecla(e)}
                        onChange={(e) => setCiudad(e.target.value)}
                        InputProps={{
                          className: classes.editDialogCiu,
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
                          className: classes.editDialogPeq,
                          shrink: false,
                        
                          
                        }}
                      />
                    </Box>

                    {/******Caja para TextFiled de Número de celular Dos */}
                    <Box
                      boxShadow={5}
                      borderRadius={2}
                      sx={{ marginTop: 3, marginLeft: 2 }}
                    >
                      <TextField
                        label="Celular Dos"
                        variant="outlined"
                        size="small"
                        value={celularDos}
                        inputRef={inpCelDosRef}
                        onKeyPress={(e) => escucharTecla(e)}
                        onChange={(e) => setCelularDos(e.target.value)}
                        InputProps={{
                          className: classes.editDialogPeq,
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
                    onClick={(e) => crearUsuario(e)}
                    sx={{ height: 34, width: 130, marginTop: 4 }}
                  >
                    Ingresar
                  </Button>

                  <IcAbajoMin />
                </Grid>
              </Paper>
            </ThemeProvider>
          </Dialog>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};

export default PasoUnof;
