import { React, useState, useEffect } from "react";
import { Grid, Box, Typography, Dialog, Grow, ThemeProvider } from "@material-ui/core";
import TikestGlobal from "../Componentes/TiketsGlobal";
import fire from "../fire";
import { PARA_LEGALIZAR, TIKETS } from "../constantes";
import { tiket } from "../Entidades/tikets";
import TiketLeg from "./../Componentes/TiketLeg";
import PasosLegalizar from "./LegalizarForm/PasosLegalizar";
import TemaDialog from './../Temas/TemaDialog';

const TiketsLegalizar = () => {
  const [tikets, setTikets] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [tik,setTik] = useState();

  const abrirLegalizar = (tik) => {
    setTik(tik);
    setAbrir(true);
  };

  const cerrarLegalizar = () => {
    setAbrir(false);
  };

  useEffect(() => {
    var array = [];
    fire
      .firestore()
      .collection("tikets")
      .where("estado", "==", "Para Legalizar")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var tik = new tiket(doc);
          array.push(tik);
        });

        setTikets(array);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Box sx={{ width: 250, height: 40, backgroundColor: "#E8E7E7" }}>
          <Typography>Tines 4 tiketw</Typography>
        </Box>

        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          {/**llenar tikets****/}

          {tikets.map((tik) => {
            return (
              <div onClick={(e) => abrirLegalizar(tik)}>
                <TiketLeg tik={tik} />
              </div>
            );
          })}
        </Grid>
      </Grid>

      {/***Legalizar formulario****/}
      <ThemeProvider theme={TemaDialog}>
      <Dialog
        fullWidth={true}
        open={abrir}
        sx={{ justifyContent: "center" }}
        TransitionComponent={Grow}
        onClose={(e) => cerrarLegalizar(e)}
      >
        <PasosLegalizar tik={tik}/>
      </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TiketsLegalizar;
