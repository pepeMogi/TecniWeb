import { React, useEffect, useState } from "react";
import { Avatar, Box, Grid, Dialog, Typography, Grow } from "@material-ui/core";
import { tiket } from "../Entidades/tikets";
import fire from "../fire";
import TiketCard from "./TiketCard";
import { ThemeProvider } from "@material-ui/core/styles";
import TemaDialog from "../Temas/TemaDialog";
import TecnicoDetalle from "./Tecnicos/TecnicoDetalle";
import TiketDetalleNoEdit from "./TiketsDetalle/TiketDetalleNoEdit";
import TemaFormu from "./../Temas/TemaFormu";

const CabeceraTecnico = (props) => {
  const { tecnico } = props;
  const [tiketes, setTiketes] = useState([]);
  const [este, setEste] = useState(false);

  const abrirDetalle = (e) => {
    e.preventDefault();
    setEste(true);
  };

  const cerrarEste = () => {
    setEste(false);
    console.log("cerrando..");
    console.log(este);
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("tikets")
      .where("asignado", "==", tecnico.alias)
      .where("estado", "!=", "finalizado")
      .onSnapshot((snap) => {
        var array = [];
        setTiketes(array);
        snap.forEach((doc) => {
          var tik = new tiket(doc);
          setTiketes((array) => array.concat(tik));
          array.push(tik);
        });
      });
  }, []);

  return (
    <div  key={tecnico.id}>
      <Grid item>
        <Box
          sx={{
            width: 310,
            border: 2,
            borderColor: "#EC1B3B",
            boxShadow: 5,
            borderRadius: 2,
            marginTop: 2,
            marginRight: 6,
            paddingBottom: 2,
          }}
        >
          <Box
            maxWidth
            sx={{
              backgroundColor: "#3D3D3D",
              borderRadius: 2,
              padding: 1,
              boxShadow: 10,
              margin: 1,
            }}
            onClick={(e) => abrirDetalle(e)}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Avatar
                src={tecnico.img}
                sx={{ width: 55, height: 55, marginRight: 2, marginLeft: 1 }}
              />
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{ fontSize: 12, fontWeight: 500, color: "#ffffff" }}
                  >
                    {tecnico.alias}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 300,
                      fontStyle: "italic",
                      marginTop: -0.2,
                      color: "#EC1B3B",
                    }}
                  >
                    {tecnico.tipo}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, marginTop: -0.2, color: "#ffffff" }}
                  >
                    Bodega # {tecnico.bodega}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {tiketes.map((tiket) => {
            return <TiketCard tiket={tiket} />;
          })}
        </Box>
      </Grid>

      {/****Dialog Tecnico Detalle****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog
          open={este}
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          onClose={(e) => cerrarEste(e)}
        >
          <ThemeProvider theme={TemaFormu}>
            <TecnicoDetalle tecnico={tecnico} />
          </ThemeProvider>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default CabeceraTecnico;
