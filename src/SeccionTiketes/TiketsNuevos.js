import { React, useState, useEffect } from "react";
import { Grid, Box, Typography, TableContainer } from "@material-ui/core";
import IconAlert from "../Iconos/icalerttik";
import { makeStyles } from "@material-ui/core/styles";
import fire from "../fire";
import TiketNuevoCompo from "../Componentes/TiketsNuevosCompó";
import { tiket } from "../Entidades/tikets";

const useRowStyles = makeStyles({
  table: {
    marginTop: 18,
  },
});

const TiketsNuevos = (props) => {
  const { setNumNuevos } = props;
  const [tiketes, setTiketes] = useState([]);
  const [numTikets, setNumTikets] = useState("");

  const classes = useRowStyles();
  var num = 0;

  const actualizarNuevosTikets = (numero) => {
    fire
      .firestore()
      .collection("contadores")
      .doc("nuevosTikets")
      .update("numero", numero)
      .then(() => {
        console.log("actualizamos contador");
      });
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("tikets")
      .where("estado", "==", "nuevo")
      .onSnapshot((snap) => {
        var array = [];
        setTiketes(array);
        snap.forEach((tik) => {
          var tikete = new tiket(tik);
          setTiketes((array) => array.concat(tikete));
          array.push(tikete);
        });
        setNumTikets(array.length);
        actualizarNuevosTikets(array.length);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        {/****Boton superior****/}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            sx={{
              width: 280,
              height: 52,
              borderRadius: 2.5,
              border: 1,
              borderColor: "#F58D9D",
              backgroundColor: "#ffffff",
              boxShadow: 4,
              padding: 0.8,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-start"
              alignItems="center"
            >
              <IconAlert />

              <Typography
                sx={{
                  fontSize: 15,
                  color: "#EC1B3B",
                  fontWeight: 600,
                  marginLeft: 2,
                }}
              >
                ( {numTikets} ) Tickets sin gestionar
              </Typography>
            </Grid>
          </Box>
        </Grid>

        {/**** Tikets Nuevos****/}
        <TableContainer className={classes.table}>
          {tiketes.map((tiket) => {
            num++;
            return <TiketNuevoCompo tiket={tiket} />;
          })}
        </TableContainer>
      </Grid>
    </div>
  );
};

export default TiketsNuevos;
