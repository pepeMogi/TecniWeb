import { React, useState, useEffect } from "react";
import ListaTiketes from "./ListaTiketes";
import fire from "../fire";
import { Box, Avatar, Typography, Grid, Skeleton } from "@material-ui/core";
import IcBodega from "../Iconos/icbodega";

class Tecnico {
  constructor(id, nombre, tipo, img, bodega, correo, celular) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.img = img;
    this.bodega = bodega;
    this.correo = correo;
    this.celular = celular;
  }
}

const CargaLab = () => {
  const [open, setOpen] = useState("");
  const [tecnicosList, setTecnicosList] = useState([]);

  const llenarTecnicos = () => {
    return tecnicosList.map((tecnico) => {
      return (
        <Box
          width={258}
          boxShadow={5}
          borderRadius={1}
          padding={1}
          sx={{ backgroundColor: "#3D3D3D", marginRight: 6, marginBottom: 4 }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid xs={4}>
              <Avatar sx={{ width: 60, height: 60 }}> LR </Avatar>
            </Grid>
            <Grid xs={8}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: -1 }}
              >
                <Typography
                  sx={{ fontSize: 14, fontWeight: 700, color: "#ffffff" }}
                >
                  {tecnico.nombre}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontStyle: "italic",
                    fontWeight: 500,
                    marginTop: -0.5,
                    color: "#EC1B3B",
                  }}
                >
                  {tecnico.tipo}
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <IcBodega />
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#ffffff",
                      marginLeft: 1,
                      marginTop: -0.5,
                    }}
                  >
                    Bodega # {tecnico.bodega}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <ListaTiketes tecnico={tecnico.nombre} key={tecnico.id}/>
          </Grid>
        </Box>
      );
    });
  };



  const mostrarEsqueleto = () => {

    var array = new Array();
    array.push(0);
    array.push(1);
    array.push(2);
    array.push(3);

    return array.map((tecnico) => {
      return (
        <Box
          width={258}
          boxShadow={5}
          borderRadius={1}
          padding={1}
          sx={{ backgroundColor: "#ffffff", marginRight: 6, marginBottom: 4 }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid xs={4}>
              <Skeleton variant="circular" width={60}  height={60 }/>
            </Grid>
            <Grid xs={8} sx={{marginBottom: -2}}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                sx={{ marginLeft: -1 }}
              >
                <Skeleton
                variant="text"
                width={150}
                sx={{marginTop: 40}}
                />
              
              <Skeleton
                variant="text"
                width={110}
                />
                
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <IcBodega />
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#ffffff",
                      marginLeft: 1,
                      marginTop: -0.5,
                    }}
                  >
                    Bodega # {tecnico.bodega}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {/***Aqui Va la Lista****/}
          </Grid>
        </Box>
      );
    });
  };




  useEffect(() => {
    var hola = new Array();
    fire
      .firestore()
      .collection("tecnicos")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          var tecnico = new Tecnico(
            doc.data().id,
            doc.data().nombre,
            doc.data().tipo,
            doc.data().img,
            doc.data().bodega,
            doc.data().correo,
            doc.data().celular
          );

          hola.push(tecnico);
        });

        console.log("numero de tecnico " + hola.length);
        setTecnicosList(hola);
        setOpen(true);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {open ? llenarTecnicos() : mostrarEsqueleto()}
      </Grid>
    </div>
  );
};

export default CargaLab;
