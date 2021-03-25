import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import fire from "../../fire";


// IMPORTACION DE ICONOS
import Iconobanner from "../../Iconos/iconoagregarbanner";
// IMPORTACION DE ELEMENTOS
import {Button, Typography, Box, Grid, Card, CardMedia,CardContent,Alert } from '@material-ui/core/';
//IMPORTACION DE DIALOG FORMBANNER
import Formbanner  from "./Formbanner";


const useStyles = makeStyles((theme) => ({
  root: {},
}));


const Bannner = () => {
    const classes = useStyles();
    const [banner, setBanner] = useState([]);


    const Bannerlista = (props) => {
        const {ban}=props
        return(
        <>  
            {/* BANNERLISTA PRESENTADOS EN FORMA DE CARD */}
            <Card 
            sx={{
                width:"400px",        
                background: 'transparent',
                my: "20px",
                ml: "40px"

            }}
            >
                {/* IMAGEN CON TAMAÑO DEFINIDO */}
                <CardMedia
                    component="img"
                    height= "200px"
                    alt="Banner"
                    image={ban.img}
                    title="Banner"
                />
                {/* CONTENIDO DEL TEXTO */}
                <CardContent 
                    sx={{
                        padding: "0px !important",
                    }}
                >
                    <Typography  variant="subtitle1" fontWeight="fontWeightBold" pl={1}>
                       {ban.nombre}
                    </Typography>
                </CardContent>
                
                </Card>
        </>
        );
    }

    useEffect(() => {
        fire
          .firestore()
          .collection("banners")
        //   .where("asignado", "==", "Luis Ro")
          .onSnapshot((snap) => {
            var array = [];
            setBanner(array);
            snap.forEach((ban) => {
              var banner = {
                id: ban.data().id,
                nombre: ban.data().nombre,
                img: ban.data().img,
              };
    
              setBanner((array) => array.concat(banner));
              array.push(banner);
            });
            // setNum(array.length);
            // console.log("numero=>" + num);
          });
      }, []);


    const abrirform = () => {
        
        
        return(
            <div>

                {console.log('Form Banner')}
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Formbanner></Formbanner>
            </div>
        );
    }
    

    return (
        // CONTENEDOR PRINCIPAL DE LOS BANNERS
        <Grid container >

            {/* CONTENEDOR FILA DEL BOTON AGREGAR BANER CON TAMAÑO DE 3VH */}
            <Grid container>
                <Grid item xs={3} my={0} > 
                    <Button variant="contained" fullWidth startIcon={<Iconobanner/>} m={0} onClick={abrirform}
                            
                        sx={{
                            fontSize: "15px",
                            bgcolor: "rgb(236,27,59)", 
                        }}
                    >
                        Agregar Banner
                    </Button>
                    <Box>
                        <Typography variant="subtitle1" color="initial" py={3}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: "rgb(236,27,59)", 
                            }}  
                        >
                            (10) Banners publicados
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
                {banner.map((ban) => {
                    return <Bannerlista ban={ban}/>;
                })}
               
            </Grid>
        </Grid>
            
    );
  };
  export default Bannner;
