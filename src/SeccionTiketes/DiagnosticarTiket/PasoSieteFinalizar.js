import { Grid, Button } from "@material-ui/core";
import { React, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Completo } from "./../../Componentes/NavegaFormu";
import { ReactEasyNotify, notify } from "react-easy-notify";
import { diagnosticoCrea } from "../../Entidades/diagnosticoCrea";
import fire from "../../fire";
import firebase from 'firebase';
import algoliasearch from 'algoliasearch';

// subir reporte en firestore
// actualizar tiket (estado, nit, fecha de ultima visita, idreporte, prioridad)
// actializar tiket algolia ( nit, estado, prioridad)

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

const PasoSieteFinalizar = (props) => {
  const {
    avanzar,
    retroceder,
    solucion,
    repuestos,
    anexos,
    comentario,
    tiketDiag,
    diagnostico,
    estado,
    nitTiket,
    contaBN,
    contaColor,
  } = props;
  const [reporte, setReporte] = useState("");

  const seguir = () => {
    if (solucion != null && solucion != "") {
      avanzar();
    } else {
      notify(option);
    }
  };

  const subirDiagnostico = () => {
    var diag = new diagnosticoCrea(
      tiketDiag.asignado,
      diagnostico,
      solucion,
      repuestos,
      anexos,
      comentario
    );
    setReporte(diag);
    console.log(diag);
    console.log(reporte.id);
    subirReporte(diag);
  };

  const subirReporte = (diag) => {
    fire
      .firestore()
      .collection("diagnosticos")
      .doc(diag.id)
      .set(Object.assign({}, diag))
      .then(() => {
        console.log("reporte subido con exito");
        actualizarTiket(diag);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const actualizarTiket = (diag) =>{
    fire.firestore().collection("tikets").doc(tiketDiag.id).update({
      estado: estado,
      ultimaVisita: new Date(),
      nit: nitTiket,
      diagnosticos: firebase.firestore.FieldValue.arrayUnion(diag.id),
      prioridad: 0,
      contadorBN: contaBN ? contaBN : "0",
      contadorColor: contaColor ? contaColor : "0",
    }).then(() =>{
      actualizarMotor();
    }).catch((err) =>{
      console.log(err);
    })
  }

  const actualizarMotor = () =>{
    console.log("actualizando motor...");
    const client = algoliasearch("BSGVLDWAAA", "a6a2592069708d0523908a39c1860f24");
    const index = client.initIndex("tikets");

    const objects = [
      {
        estado: estado,       
        nit: nitTiket,     
        prioridad: 0,
        objectID: tiketDiag.id,
      },
    ];

    index.partialUpdateObjects(objects).then(({ objectIDs }) => {
      console.log("actualizado");
    });
  }

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <ReactEasyNotify />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          sx={{ paddingLeft: 6, paddingRight: 6 }}
        >
          <Button
            onClick={() => subirDiagnostico()}
            variant="contained"
            color="primary"
            sx={{ width: 250, height: 90, marginTop: 12, marginBottom: 8 }}
          >
            Generar Reporte
          </Button>

          <Completo siguiente={seguir} atras={retroceder} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoSieteFinalizar;
