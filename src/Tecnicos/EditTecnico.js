import { React, useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputBase,
} from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import IcAbajoMin from "../Iconos/ictecnitec";
import IcCc from "../Iconos/iccctec";
import IconoNom from "../Iconos/icnomtec";
import IconoCelular from "../Iconos/iccelutec";
import IconoRh from "../Iconos/icrhtec";
import IconoEmail from "../Iconos/icemailtec";
import IconoBaja from "../Iconos/icbaja";
import TemaFormu from "../Temas/TemaFormu";
import fire from "../fire";

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  este: {
    borderColor: "#C8C8C8 !important",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
    height: 40,
    paddingTop: 13,
  },

  formControlDos: {
    margin: theme.spacing(1),
    minWidth: 100,
    height: 40,
    paddingTop: 13,
  },
}));

const NewTecnico = (props) => {
  const { detalleTecnico, cerrarDialog } = props;
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [img, setImg] = useState("");
  const [cc, setCc] = useState("");
  const [rh, setRh] = useState("");
  const [tipo, setTipo] = useState("");
  const [bodega, setBodega] = useState("");

  const manejoTipo = (e) => {
    setTipo(e);
  };

  const manejoBodega = (e) => {
    setBodega(e);
  };

  const classes = useStyles();

  const editarTecnico = () => {
    var tecni = {
      id: id,
      nombre: nombre,
      img: img,
      cc: cc,
      rh: rh,
      tipo: tipo,
      bodega: bodega,
      celular: celular,
      email: correo,
    };

    fire
      .firestore()
      .collection("tecnicos")
      .doc(tecni.id)
      .set(tecni)
      .then(() => {
        alert("listo");
        cerrarDialog();
      }).catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    setNombre(detalleTecnico.nombre);
    setId(detalleTecnico.id);
    setCc(detalleTecnico.cc);
    setRh(detalleTecnico.rh);
    setTipo(detalleTecnico.tipo);
    setBodega(detalleTecnico.bodega);
    setImg(detalleTecnico.img);
    setCelular(detalleTecnico.celular);
    setCorreo(detalleTecnico.email);
  }, [detalleTecnico]);
  return (
    <ThemeProvider theme={TemaFormu}>
      <Paper
        sx={{
          width: 470,
          height: 520,
          padding: 2,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IcAbajoMin />

            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              width={100}
              sx={{ marginTop: -2 }}
            >
              <IconoBaja />
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#EC1B3B",
                  fontWeight: 300,
                  marginLeft: 1,
                }}
              >
                Dar de Baja
              </Typography>
            </Grid>
          </Grid>

          {/***Foto de Tecnico */}
          <Avatar
            sx={{
              width: 90,
              height: 90,
              backgroundColor: "#3D3D3D",
            }}
            src={img}
          ></Avatar>

          {/***Tipo de Tecnico */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Tipo</InputLabel>
            <Select
              value={tipo}
              onChange={(e) => manejoTipo(e.target.value)}
              label="Tipo"
            >
              <MenuItem value={"Normal"}>Normal</MenuItem>
              <MenuItem value={"Entrenando"}>Entrenando</MenuItem>
              <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
            </Select>
          </FormControl>

          {/***Bodega de Tecnico */}
          <FormControl variant="outlined" className={classes.formControlDos}>
            <InputLabel>Bodega</InputLabel>
            <Select
              value={bodega}
              onChange={(e) => manejoBodega(e.target.value)}
              label="Bodega"
            >
              <MenuItem value={"0"}>0</MenuItem>
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
            </Select>
          </FormControl>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {/******Caja para TextFiled de Nombres y apellidos */}
            <Box
              boxShadow={5}
              borderRadius={1}
              sx={{
                marginTop: 2,
                padding: 0.5,
                border: 1,
                width: 250,
              }}
              className={classes.este}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <InputBase
                  className={classes.input}
                  placeholder="Nombre Completo"
                  sx={{ marginLeft: 1 }}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <IconoNom />
              </Grid>
            </Box>

            {/******Caja para TextFiled Cc */}
            <Box
              boxShadow={5}
              borderRadius={1}
              sx={{
                marginTop: 2,
                padding: 0.5,
                border: 1,
                width: 180,
                marginLeft: 1,
              }}
              className={classes.este}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <InputBase
                  className={classes.input}
                  placeholder="Cc"
                  value={cc}
                  sx={{ marginLeft: 1 }}
                  onChange={(e) => setCc(e.target.value)}
                />
                <IcCc />
              </Grid>
            </Box>

            {/******Caja para TextFiled Celular */}
            <Box
              boxShadow={5}
              borderRadius={1}
              sx={{
                marginTop: 1.5,
                padding: 0.5,
                border: 1,
                width: 210,
                marginRight: 1,
              }}
              className={classes.este}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <InputBase
                  className={classes.input}
                  placeholder="Celular"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  sx={{ marginLeft: 1 }}
                />
                <IconoCelular />
              </Grid>
            </Box>

            {/******Caja para TextFiled Rh */}
            <Box
              boxShadow={5}
              borderRadius={1}
              sx={{
                marginTop: 1.5,
                padding: 0.5,
                border: 1,
                width: 110,
                marginRight: 1,
              }}
              className={classes.este}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <InputBase
                  className={classes.input}
                  placeholder="Rh"
                  value={rh}                    
                  sx={{ marginLeft: 1 }}
                />
                <IconoRh />
              </Grid>
            </Box>

            {/******Caja para TextFiled Correo */}
            <Box
              boxShadow={5}
              borderRadius={1}
              sx={{
                marginTop: 1.5,
                padding: 0.5,
                border: 1,
                width: 310,
              }}
              className={classes.este}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <InputBase
                  className={classes.input}
                  placeholder="Correo"
                  value={correo}
                  
                  sx={{ marginLeft: 1 }}
                />
                <IconoEmail />
              </Grid>
            </Box>
          </Grid>

          {/****Btn Crear Usario****/}
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => editarTecnico()}
            sx={{ height: 40, width: 130, marginTop: 4 }}
          >
            GUARDAR
          </Button>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default NewTecnico;
