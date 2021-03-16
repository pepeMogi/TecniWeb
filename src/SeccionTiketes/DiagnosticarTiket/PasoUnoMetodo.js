import { Grid, Button, Paper } from "@material-ui/core";
import { React, createRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import IcAbajoCuatro from "./../../Iconos/icFabajoCuatro";

const useStyles = makeStyles((theme) => ({
  boton: {
    width: 190,
    height: 50,
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

const PasoUnoMetodo = (props) => {
  const { avanzar, retroceder, tiketId, setDiagExport } = props;
  const hiddenFileInput = createRef(null);
  let fileReder;

  const classes = useStyles();

  const subir = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const manejo = () => {
    // lee el resultado
    console.log(fileReder.result);
    // parsea el resultado txt a json
    var json = JSON.parse(fileReder.result);
    console.log(json);

    var nombre = json.tecnico;
    console.log(nombre);

    var diagnosticotExport = {
      id: json.id,
      tecnico: json.tecnico,
      diagnostico: json.diagnostico,
      repuestos: json.repuestos,
      imgs: json.imgs,
      comentario: json.comentario,
      fecha: json.fecha,

      idTiket: json.idTiket,
      estado: json.estado,
    };


    if (diagnosticotExport.idTiket == tiketId) {
      console.log("Tiket correcto");
        setDiagExport(diagnosticotExport);
        avanzar();


    }else{
      console.log(diagnosticotExport.id + "!=" + tiketId );
      alert("El archivo no corresponde al tiket seleccionado");
    }

  };

  // lee el txt
  const leerArchivo = (archivo) => {
    fileReder = new FileReader();
    fileReder.onloadend = manejo;
    fileReder.readAsText(archivo);
  };

  // manejo subida
  const manejoSubida = (e) => {
    var array = e.target.files;
    console.log(array);

    // saber cual es el txt
    for (var i = 0; i < array.length; i++) {
      if (array[i].type === "text/plain") {
        console.log(array[i].name + " es el texto");
        leerArchivo(array[i]);
      } else {
        var file = array[i];

        // subirImagen(file);
      }
    }
  };

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
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => subir(e)}
                sx={{ width: 250, height: 50, marginTop: 8 }}
              >
                Importar Reporte
              </Button>

              <input
                // type="file"
                // onChange={manejoCambio}
                onChange={(e) => manejoSubida(e)}
                directory=""
                webkitdirectory=""
                type="file"
                style={{ display: "none" }}
                ref={hiddenFileInput}
              />

              <Button
                variant="contained"
                color="primary"
                sx={{ width: 250, height: 50, marginTop: 8 }}
              >
                Manualmente
              </Button>
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
                sx={{ marginTop: 1, fontSize: 14, marginRight: 0 }}
              >
                Atras
              </Button>
              <IcAbajoCuatro />
            </Grid>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoUnoMetodo;
