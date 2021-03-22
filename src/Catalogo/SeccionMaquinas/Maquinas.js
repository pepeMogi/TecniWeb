import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import fire from "../../fire";


// IMPORTACION DE ICONOS
import Iconoimpresora from "../../Iconos/iconoimpresora";
// IMPORTACION DE ELEMENTOS
import {Button, Typography, Box, Grid, Card, CardHeader, CardMedia,CardContent } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Maquinas = () => {
    const classes = useStyles();
    // const [banner, setBanner] = useState([]);

    const Maquinaslista = () => {
        // const {ban}=props
        return(
        <>  
            {/* BANNERLISTA PRESENTADOS EN FORMA DE CARD */}
            <Card 
            sx={{
                width:"300px",        
                background: 'transparent',
                my: "20px",
                ml: "40px"

            }}
            >
                <CardHeader
                    title="Multifuncional CAnon 2021"
                    subheader="Referencia"
                />
                {/* IMAGEN CON TAMAÑO DEFINIDO */}
                <CardMedia
                    component="img"
                    height= "200px"
                    alt="Banner"
                    image="https://topesdegama.com/app/uploads-topesdegama.com/2020/04/impresoras.jpg"
                    title="Banner"
                />
                {/* CONTENIDO DEL TEXTO */}
                <CardContent 
                    sx={{
                        padding: "0px !important",
                    }}
                >
                    <Typography  variant="subtitle1" fontWeight="fontWeightBold" pl={1}>
                      Descripcion
                    </Typography>
                </CardContent>
                
                </Card>
        </>
        );
    }

    // useEffect(() => {
    //     fire
    //       .firestore()
    //       .collection("banners")
    //     //   .where("asignado", "==", "Luis Ro")
    //       .onSnapshot((snap) => {
    //         var array = [];
    //         setBanner(array);
    //         snap.forEach((ban) => {
    //           var banner = {
    //             id: ban.data().id,
    //             nombre: ban.data().nombre,
    //             img: ban.data().img,
               
    //           };
    
    //           setBanner((array) => array.concat(banner));
    //           array.push(banner);
    //         });
    //         // setNum(array.length);
    //         // console.log("numero=>" + num);
    //       });
    //   }, []);

    return (
        // CONTENEDOR PRINCIPAL DE LOS BANNERS
        <Grid container >

            {/* CONTENEDOR FILA DEL BOTON AGREGAR BANER CON TAMAÑO DE 3VH */}
            <Grid container>
                <Grid item xs={3} my={0} > 
                    <Button variant="contained" fullWidth startIcon={<Iconoimpresora />} m={0} 
                        sx={{
                            fontSize: "15px",
                            bgcolor: "rgb(236,27,59)", 
                        }}
                    >
                        Agregar Equipo
                    </Button>
                    <Box>
                        <Typography variant="subtitle1" color="initial" py={3}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: "rgb(236,27,59)", 
                            }}  
                        >
                            (10) Maquinas publicadass
                        </Typography>
                    </Box>

                </Grid >
            </Grid>
            
            {/* CONTENEDOR DE LA LISTA DE LOS BANNERSLISTA */}
            <Grid container 
            sx={{
                display: 'flex',
                // justifyContent: 'center',
            }}
            >

                {/* {banner.map((ban) => {
                    return <Maquinaslista ban={ban}/>;
                })} */}
                 <Maquinaslista/>
               
            </Grid>
        </Grid>
            
    );
  };
  export default Maquinas;
