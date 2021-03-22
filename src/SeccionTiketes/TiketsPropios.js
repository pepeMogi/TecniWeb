import { React, useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Dialog } from "@material-ui/core";
import TemaDialog from "../Temas/TemaDialog";
import { ThemeProvider } from "@material-ui/core/styles";
import fire from "./../fire";
import PasosDiagnostico from "./DiagnosticarTiket/PasosDiagnostico";

// IMPORTAMOS COMPONENTES
import Iconopersona from "../Iconos/iconopersona";
import Iconoubicacion from "../Iconos/iconoubicacion";
import Iconocirculo from "../Iconos/iconocirculo";
import Iconomaquina from "../Iconos/iconomaquina";
import Iconofalla from "../Iconos/iconofalla";
import Iconoarchivo from "../Iconos/iconoarchivo";
import Iconodiagnostico from "../Iconos/iconodiagnostico";
import Iconotecnico from "../Iconos/iconotecnico";
import Iconobodega from "../Iconos/iconobodega";
import Iconoinformacion from "../Iconos/iconoinformacion";
import Icononivel from "../Iconos/icononivel";
import Iconorellamada from "../Iconos/iconorellamada";
import Iconourgente from "../Iconos/iconourgente";
import Iconomedia from "../Iconos/iconomedia";
import Iconobaja from "../Iconos/iconobaja";





const getFecha = (times) => {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  let current_datetime = times.toDate();
  let formatted_date =
    current_datetime.getDate() +
    "-" +
    months[current_datetime.getMonth()] +
    "-" +
    current_datetime.getFullYear();

  return formatted_date;
};

const TikestPropios = () => {
  const [tikets, setTikets] = useState([]);
  const [openDiagnostico, setOpenDiagnostico] = useState(false);
  const [tiketDiag,setTiketDiag] = useState("");
  const [num, setNum] = useState("");

  const manejoDiagnostico = (tik) => {
    setTiketDiag(tik);
    setOpenDiagnostico(true);
  };

  
  const Tikets = (props) => {
    const { tik } = props;

    var text = "";
    for (var i = 0; i < tik.maquinas.length; i++) {
      text += tik.maquinas[0] + "\n";
    }
     for (var i = 0; i < tik.maquinas.length; i++) {
      text += tik.maquinas[0] + "\n";
    }

    return (
      <div>
        <Box
          sx={{
            width: 360,
            borderRadius: 2,
            boxShadow: 4,
            marginTop: 2,
            marginLeft: 2,
            padding: 2,
            bgcolor: "rgb(200,200,200)"
          }}
        >
          {/* GRID CONTENEDOR DE LA CARD */}
          <Grid container >
            {/*8 FILAS CADA UNA CON  DIVICION DE 2 COLUMNAS PARA POSICIONAR TITULOS Y VARIABLES  */}
           
            {/* FILA 1 CODIGO  Y PRIORIDAD*/}
            <Grid item xs={5}>     
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',                        
                }}
              >                                                                                          
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin:"0px",
                    marginLeft: "14px",
                    color: "red"
                  }}
                >{tik.id}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7} >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',                    
                  }}
                >
                  
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      fontSize: "16px",
                      color: "red"
                    }}
                  >
                     Prioridad
                  </Typography>
                </Box>               
            </Grid>         
            
            {/* FILA 2 MANTENIMIENTO  Y CIRCULO DE COLOR*/}
            <Grid item xs={5}>     
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',                        
                }}
              >                                                                                          
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin:"0px",
                    marginLeft: "14px",
                    color: "red"
                  }}
                >Mantenimiento
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7} >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',                    
                  }}
                >
                  {tik.nombre == "Luis Rosero1" ? <Iconorellamada></Iconorellamada>
                    : tik.nombre == "Luis Rosero"?  <Iconourgente></Iconourgente>
                    : tik.nombre == "Luis Rosero2"?  <Iconomedia></Iconomedia>
                    : <Iconobaja></Iconobaja> 
                  }
                </Box>               
            </Grid>         
            
            {/*FILA 3 CLIENTE  */}
            <Grid item xs={5}>     
              <Box pt={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',                        
                }}
              >                        
                <Iconopersona
                  sx={{
                    display: 'inline',
                    margin:"0px"
                  }}
                ></Iconopersona>                                                                  
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin:"0px",
                    marginLeft: "10px"
                  }}
                >Cliente:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7} >
                <Box pt={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                    
                  }}
                >
                  
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      paddingTop:"1px",
                      fontSize: "16px"
                    }}
                  >
                     {tik.nombre}
                  </Typography>
                </Box>               
            </Grid>         
            
            {/* FILA 4 SOLICITANTE */}
            <Grid item xs={5}>     
              <Box pt={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',                        
                }}
              >                        
                <Iconopersona
                  sx={{
                    display: 'inline',
                    margin:"0px"
                  }}
                ></Iconopersona>                                                                  
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin:"0px",
                    marginLeft: "10px"
                  }}
                >Solicitante:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7} >
                <Box pt={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                    
                  }}
                >
                  
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      fontSize: "16px"
                    }}
                  >
                    no hay nada
                  </Typography>
                </Box>               
            </Grid>

            {/* FILA 5 MAQUINA */}
            <Grid item xs={5}>
              <Box pt={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',                                          
                }}
              >
                <Iconomaquina
                  sx={{
                    display: 'inline',
                    margin:"0px"
                  }}
                >
                </Iconomaquina>                                                                 
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin:"0px",
                    marginLeft: "10px"
                  }}
                >Maquina:
                </Typography>

              </Box>
            </Grid>
            <Grid item xs={7} >
                <Box pt={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center', 
                    // overflow: 'auto'  //  Posible scroll si el nombre es muy largo             
                  }}
                >
                  
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      fontSize: "16px"
                      
                    }}
                  >
                    {text}
                  </Typography>
                </Box>               
            </Grid>

            {/* FILA 6 FALLA */}
            <Grid item xs={5}>
              <Box pt={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',                                       
                }}
              >
                <Iconofalla
                  sx={{
                    display: 'inline',
                    margin:"0px"            
                  }}
                >
                </Iconofalla>
                                                                                 
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin: "0px",
                    marginLeft: "10px"
                  }}
                >Falla:
                </Typography>

              </Box>
            </Grid>
            <Grid item xs={7} >
                <Box pt={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                    
                  }}
                >
                  
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      fontSize: "16px"
                    }}
                  >
                   {tik.falla}
                  </Typography>
                </Box>               
            </Grid>
           
            {/* FILA 7 ARCHIVOS  */}
            <Grid item xs={5}>
              <Box pt={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                                          
                }}
              >
                <Iconoarchivo
                  sx={{
                    display: 'inline',
                    margin:"0px"
                  }}  
                >
                </Iconoarchivo>                                                                  
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin:"0px",
                    marginLeft: "10px"
                  }}
                >Archivos:
                </Typography>

              </Box>
            </Grid>
            <Grid item xs={7} >
                <Box pt={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                    
                  }}
                >
                  
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      fontSize: "16px"
                    }}
                  >
                   no hay nada
                  </Typography>
                </Box>               
            </Grid>
              
            {/* FILA 8 DIAGNOSTICO */}
            <Grid item xs={7}>
              <Box pt={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                                          
                }}
              >
                <Iconodiagnostico
                  sx={{
                    display: 'inline',
                    margin:"0px"
                  }}
                >
                </Iconodiagnostico>                                                                 
                <Typography 
                  sx={{
                    fontWeight: 'medium',
                    fontSize: "15px",
                    display: 'inline',
                    margin:"0px",
                    marginLeft: "10px"
                  }}
                >Diagnosticos:
                </Typography>

              </Box>
            </Grid>
            <Grid item xs={5} >
                <Box pt={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                    
                  }}
                >
                  
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      fontSize: "17px"
                    }}
                  >
                   no hay 
                  </Typography>
                </Box>               
            </Grid>

            <Grid item xs={12}>
              <Box pt={2}
                sx={{
                  display: 'flex',
                  // alignItems: 'center',
                  justifyContent: 'center',                       
                }}
              >
                <Button
                variant="contained"
                color="primary"
                onClick={(e) => manejoDiagnostico(tik)}
                >
                Diagnosticar
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </div>
    );
  };



  useEffect(() => {
    fire
      .firestore()
      .collection("tikets")
      .where("asignado", "==", "Luis Ro")
      .onSnapshot((snap) => {
        var array = [];
        setTikets(array);
        snap.forEach((tik) => {
          var tikete = {
            id: tik.data().id,
            numero: tik.data().id,
            nombre: tik.data().nombre,
            tipo: tik.data().tipo,
            fechaCreacion: getFecha(tik.data().fechaCreacion),
            estado: tik.data().estado,
            direccion: tik.data().direccion,
            celular: tik.data().numero,
            ciudad: tik.data().ciudad,
            factura: tik.data().factura,
            maquinas: tik.data().maquinas,
            falla: tik.data().falla,
            asignado: tik.data().asignado,
            email: tik.data().email,
            anexos: tik.data().anexos,
            idCliente: tik.data().idCliente,
            legalizacion: tik.data().legalizacion,
            fecTimestamp: tik.data().fechaCreacion,
          };

          setTikets((array) => array.concat(tikete));
          array.push(tikete);
        });
        setNum(array.length);
        console.log("numero=>" + num);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        pt={3}        
      >
          <Grid container > 
            {/* FILA ROJA TAMAÑO 9 */}
            <Grid item xs={9}>
              <Grid container  
                sx={{ 
                  bgcolor: "rgb(236,27,59)", 
                  borderRadius: '25px', 
                  p:"2px",                
                }}
              > 
                {/* COLUMNAS DENTRO DE LA FILA PARA POSICIONAR LOS ICONOS Y TEXTOS */}
                <Grid item xs={1}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: "15px"
                  }}
                >
                    <Iconotecnico></Iconotecnico>
                </Grid>
                <Grid item xs={3} 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                                    
                  }}                
                > 
                  <Box>
                    <Typography 
                      sx={{
                        color:"white",
                      }}
                    >
                      Juan Con Miedo Pitacuar</Typography>
                    <Typography>Tecnico</Typography> 
                  </Box> 
                </Grid>
                <Grid item xs={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end', 
                    alignItems: 'center',
                  }} 
                >
                  <Iconoinformacion></Iconoinformacion>
                  <Typography 
                    sx={{
                        display: 'inline',
                        margin:"0px",
                        fontSize: "16px",
                        color:"white",
                        marginLeft: "15px"
                    }}
                  >
                    7 Tickets por terminar
                  </Typography>
                </Grid>
                <Grid item xs={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',   
                    alignItems: 'center'                             
                  }}
                >
                  <Iconobodega></Iconobodega>
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      marginLeft: "15px",
                      fontSize: "16px",
                      color:"white",
                    }}
                  >
                  Bodega #5 
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            
            {/* FILA BLANCA PRIORIDADES */}
            <Grid item xs={9} mt={4} >
              <Grid container 
                sx={{
                  bgcolor: "rgb(255,255,255)",  
                  p:"10px",
                  borderRadius: '5px',
                  boxShadow: 3,   
                }}
              >
                {/* COLUMNAS DENTRO DE LA FILA BLANCA PARA POSICIONAR LOS NIVELES */}
                <Grid item xs={4}            
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                               
                  }}
                >
                  <Icononivel></Icononivel>
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      marginLeft: "15px",
                      fontSize: "16px",
                    }}
                  >
                  Nivel Prioridad 
                  </Typography>
                </Grid>
                <Grid item xs={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                               
                  }}
                >
                  <Iconorellamada></Iconorellamada>
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      marginLeft: "15px",
                      fontSize: "16px",
                    }}
                  >
                  Rellamada 
                  </Typography>
                </Grid>
                <Grid item xs={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                               
                  }}
                >
                  <Iconourgente></Iconourgente>
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      marginLeft: "15px",
                      fontSize: "16px",
                    }}
                  >
                  Alta 
                  </Typography>

                </Grid>
                <Grid item xs={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                               
                  }}
                >
                  <Iconomedia></Iconomedia>
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      marginLeft: "15px",
                      fontSize: "16px",
                    }}
                  >
                  Media
                  </Typography>

                </Grid>
                <Grid item xs={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',                               
                  }}
                >
                  <Iconobaja></Iconobaja>
                  <Typography 
                    sx={{
                      display: 'inline',
                      margin:"0px",
                      marginLeft: "15px",
                      fontSize: "16px",
                    }}
                  >
                  Baja
                  </Typography>
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        {/* GRID CONTENEDOR DE LAS CARDS GENERADAS POR LA FUNCION  const Tikets*/}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          pt={5}
        >
          {tikets.map((tik) => {
            return <Tikets tik={tik} />;
          })}
        </Grid>
      </Grid>

      {/****Detalle Tikets****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog open={openDiagnostico}>
          <PasosDiagnostico tiketDiag={tiketDiag}  />
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TikestPropios;
