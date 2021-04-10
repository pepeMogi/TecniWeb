import {
  Grid,
  Box,
  Typography,
  TextField,
  Checkbox,
  Avatar,
} from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import { Completo } from "./../../Componentes/NavegaFormu";
import { ReactEasyNotify, notify } from "react-easy-notify";
import fire from "./../../fire";
import { maquinaDoc } from "./../../Entidades/maquina";

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

const useStyles = makeStyles((theme) => ({
  editDialog: {
    height: 150,
    borderRadius: 10,
    width: 480,
    marginBottom: 20,
    borderWidth: 10,
  },
  editNombre: {
    height: 40,
    borderRadius: 10,
    width: 150,
    padding: 15,
    borderWidth: 10,
    color: "#ffffff",
    outlineColor: "#ffffff",
  },
}));

const PasoCuatroMaquina = (props) => {
  const { avanzar, retroceder, idMaquina, maquina, setMaquina, setContaBn, setContaColor } = props;
  const [maquinaP, setMaquinaP] = useState("");
  const [conBn,setConBn] = useState("");
  const [conColor,setConColor] = useState("");
  const [actConta,setActConta] = useState(false);

  var nom = idMaquina;
  if(maquinaP != null && maquinaP != ""){
    nom = maquinaP.id;
  }



  const classes = useStyles();


  const cambioBn = (e) =>{
    setConBn(e);
    setContaBn(e);
    setActConta(true);
  }

  const cambioColor = (e) =>{
    setConColor(e);
    setContaColor(e);
    setActConta(true);
  }

  const siguiente = () =>{
    if(actConta){
      fire.firestore().collection("maquinas").doc(maquinaP.id).update({
        contadorBN: parseInt(conBn),
        contadorColor: parseInt(conColor),
      }).then(() =>{
        console.log("actualizado Correctamente");
      })
    }

    avanzar()
  }

  useEffect(() => {
    fire
      .firestore()
      .collection("maquinas")
      .where("id", "==", idMaquina)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var maq = new maquinaDoc(doc);
          setMaquinaP(maq);
          setMaquina(maq);
          setConBn(maq.contadorBN);
          setConColor(maq.contadorColor);
          console.log("encontrada");
        });
      });
  }, []);

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
          <Box
            sx={{
              width: 450,
              boxShadow: 6,
              borderRadius: 2,
              padding: 2,
              marginBottom: 12,
              marginTop: 4
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Avatar src={maquinaP.img}  sx={{ width: 170, height: 170 }} />

              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                  sx={{ marginLeft: 2 }}
                >
                  <Typography sx={{ fontSize: 18, fontWeight: 600, maxWidth: 220, }}>
                    {nom.replaceAll("_"," ")}
                  </Typography>

                  <TextField
                    label="Cont BN"
                    variant="outlined"
                    size="small"                    
                    sx={{ color: "#ffffff" }}
                    value={conBn}
                    onChange={(e) => cambioBn(e.target.value)}
                    InputProps={{
                      className: classes.editNombre,
                    }}
                    sx={{ marginTop: 2 }}
                  />

                  <TextField
                    label="Cont Color"
                    variant="outlined"
                    size="small"                   
                    sx={{ color: "#ffffff" }}
                    value={conColor}
                    onChange={(e) => cambioColor(e.target.value)}
                    InputProps={{
                      className: classes.editNombre,
                    }}
                    sx={{ marginTop: 2 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Completo siguiente={siguiente} atras={retroceder} />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default PasoCuatroMaquina;
