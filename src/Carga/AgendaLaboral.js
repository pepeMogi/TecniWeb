import { React, useState, useEffect } from "react";
import ListaTiketes from "./ListaTiketes";
import fire from "../fire";
import { Box, Avatar, Typography, Grid, Skeleton } from "@material-ui/core";
import IcBodega from "../Iconos/icbodega";
import CabeceraTecnico from "../Componentes/CabeceraTecnicos";
import { tecnico } from "../Entidades/tecnico";


const AgendaLaboral = () => {
  const [open, setOpen] = useState("");
  const [tecnicos, setTecnicos] = useState([]);
/*
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
            
          </Grid>
        </Box>
      );
    });
  };

*/


  useEffect(() => {

    fire
      .firestore()
      .collection("tecnicos")
      .onSnapshot((snap) =>{
        var array = [];
        setTecnicos(array);
        snap.forEach((doc) =>{
         var tecni = new tecnico(doc);
         setTecnicos((array) => array.concat(tecni));
         array.push(tecni);
        });
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
        
       {tecnicos.map((tecnico) =>{
         return(
           <CabeceraTecnico tecnico={tecnico} />
         )
       })} 

      </Grid>
    </div>
  );
};

export default AgendaLaboral;
