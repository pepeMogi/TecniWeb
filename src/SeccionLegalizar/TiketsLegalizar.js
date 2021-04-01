import { React, useState, useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";

import fire from "../fire";

import { tiket } from "../Entidades/tikets";
import TiketLegalizar from "../Componentes/TiketLegalizar";

const TiketsLegalizar = () => {
  const [tikets, setTikets] = useState([]);
  const [num,setNum] = useState(""); 

  useEffect(() => {
    fire
      .firestore()
      .collection("tikets")
      .where("estado", "==", "para legalizar")
      .onSnapshot((snap) => {
        var array = [];
        setTikets(array);
        snap.forEach((doc) => {
          var tik = new tiket(doc);
          setTikets((array) => array.concat(tik));
          array.push(tik);
          setNum(array.length);
        });
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
        <Box
          sx={{
            width: 280,
            height: 40,
            backgroundColor: "#FFFFFF",
            borderRadius: 2,
            boxShadow: 5,
            padding: 1,
            marginLeft: 1,
            marginBottom: 2
          }}
        >
           <Typography
                sx={{
                  fontSize: 15,
                  color: "#EC1B3B",
                  fontWeight: 600,
                  marginLeft: 2,
                  marginTop: 0.2
                }}
              >
                ( {num} ) Tickets listos para legalizar
              </Typography>
        </Box>

        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          {/**llenar tikets****/}

          {tikets.map((tik) => {
            return <TiketLegalizar tiket={tik} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default TiketsLegalizar;
