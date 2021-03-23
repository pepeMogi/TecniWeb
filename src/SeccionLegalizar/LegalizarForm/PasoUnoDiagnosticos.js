import {
  Grid,
  Paper,  
} from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Completo } from "./../../Componentes/NavegaFormu";
import fire from "./../../fire";
import { diagnostico } from "../../Entidades/diagnostico";
import DiagnosticoCard from "../../Componentes/DiagnosticoCard";

const PasoUnoDiagnosticos = (props) => {
  const { avanzar, retroceder, tik, setDiagnosticoLocal } = props;
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [completo, setCompleto] = useState([]);

  const siguiente = (diag) => {
        console.log(diag.id);
        setDiagnosticoLocal(diag);
        avanzar();
  };

  const atras = () => {
    retroceder();
  };

  useEffect(() => {
    var array = [];
    tik.diagnostico.forEach((element) => {
      console.log(element);
      array.push(element);
    });

    setDiagnosticos(array);
  }, []);

  useEffect(() => {
    if (diagnosticos.length > 0) {
      console.log("Buscando diagnosticos");
      var array = [];
      setCompleto(array);
      diagnosticos.forEach((idDiag) => {
        fire
          .firestore()
          .collection("diagnosticos")
          .doc(idDiag)
          .get()
          .then((doc) => {
            var diag = new diagnostico(doc);
            console.log("lleno " + diag.id);
            // array.push(diag);
            setCompleto((array) => array.concat(diag));
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, [diagnosticos]);
  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Paper
            elevation={0}
            sx={{ borderRadius: 5, width: 500, minHeight: 330, maxWidth: 500 }}
          >
            {/***Contenido de Formulario****/}
            {completo.map((diag) => {
              return (
                <div onClick={(e) => siguiente(diag)}>
                  <DiagnosticoCard diag={diag} />
                </div>
              );
            })}
          </Paper>

          <Completo siguiente={siguiente} atras={atras} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoUnoDiagnosticos;
