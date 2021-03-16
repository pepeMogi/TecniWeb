import { React, useState, useEffect } from 'react';
import IconCelular from "../Iconos/iccelular";
import IconCiudad from "../Iconos/icciudad";
import IconEdtEstado from "../Iconos/icedtestado";
import IconEdtTecnico from "../Iconos/icedttecnico";
import IconEdtEdt from "../Iconos/icedtedt";
import IconEdtPrioridad from "../Iconos/icedtprioridad";
import IconDireccion from "../Iconos/icdireccion";
import IconGrande from "../Iconos/ictecnigrande";
import IconCalendar from "../Iconos/iccalendar";
import IconTipo from "../Iconos/ictipo";
import IconSolicitante from "../Iconos/icsolicitante";
import fire from "../fire";
import PasosEdt from "../EdtTiket/PasosEdt";
import { Typography, Slide, Grid, Box, Avatar, Divider, Dialog, Grow } from '@material-ui/core';



const Tiket = (props) => {
    const { tiketDetalle } = props;
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [abrirEditar,setAbrirEditar] = useState(false);
    const [openEstado, setOpenEstado] = useState(false);
    const [openTecnico, setOpenTecnico] = useState(false);
    const [openPrioridad, setOpenPrioridad] = useState(false);

    const manejoEstado = () => {
        setOpenEstado(!openEstado);
      };
    
      const manejoTecnico = () => {
        setOpenTecnico(!openTecnico);
      };
    
      const manejoPrioridad = () => {
        setOpenPrioridad(!openPrioridad);
      };

      const manejoEditar = () => {
        setAbrirEditar(true);
      }
    
      const cerrarEditar = () => {
        setAbrirEditar(false);
      }

    const llenarMaquinas = () => {
        return tiketDetalle.maquinas.map((maquina) => {
          return (
            <div>
              <Typography
                sx={{
                  fontSize: 12,
                  width: 100,
                  fontWeight: 600,
                  color: "#3D3D3D",
                  marginLeft: 4.2,
                }}
              >
                {maquina}
              </Typography>
            </div>
          );
        });
      };
    
      const llenarDiagnostico = () => {
        var array = [0, 1];
        return diagnosticos.map((diag) => {
          return (
            <div>
              {/****Tecnico asignado****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <IconDireccion />
    
                <Typography
                  sx={{
                    fontSize: 12,
                    width: 300,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    marginLeft: 1,
                  }}
                >
                  Visita de Tecnico: {diag.tecnico}
                </Typography>
              </Grid>
    
              <Typography
                sx={{
                  fontSize: 12,
                  width: 100,
                  fontWeight: 400,
                  color: "#EC1B3B",
                  marginLeft: 4.2,
                  marginTop: -0.5,
                }}
              >
                {diag.fecha}
              </Typography>
    
              {/****Diagnostico****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={1}
                marginLeft={5}
              >
                <IconDireccion />
    
                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    marginLeft: 1,
                  }}
                >
                  Diagnostico
                </Typography>
              </Grid>
    
              <Typography
                sx={{
                  fontSize: 12,
                  width: 400,
                  textAlign: "justify",
                  fontWeight: 500,
                  color: "#3D3D3D",
                  marginLeft: 9.2,
                  marginTop: -0.5,
                }}
              >
                {diag.diagnostico}
              </Typography>
    
              {/****Repuestos****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={1}
                marginLeft={5}
              >
                <IconDireccion />
    
                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    marginLeft: 1,
                  }}
                >
                  Repuestos
                </Typography>
              </Grid>
              {diag.repuestos.map((repuesto) => {
                return (
                  <Typography
                    sx={{
                      fontSize: 12,
                      width: 400,
                      textAlign: "justify",
                      fontWeight: 500,
                      color: "#3D3D3D",
                      marginLeft: 9.2,
                      marginTop: -0.5,
                    }}
                  >
                    {repuesto}
                  </Typography>
                );
              })}
            </div>
          );
        });
      };
    
      useEffect(() => {
        var array = [];
        var buscar = "none";
        if (tiketDetalle) {
          buscar = tiketDetalle.id;
        }
    
        fire
          .firestore()
          .collection("diagnostico")
          .where("tiket", "==", buscar)
          .get()
          .then((snap) => {
            snap.forEach((diag) => {
              const months = [
                "ENE",
                "FEB",
                "MAR",
                "ABR",
                "MAY",
                "JUN",
                "JUL",
                "AGO",
                "SEP",
                "OCT",
                "NOV",
                "DIC",
              ];
              let current_datetime = diag.data().fecha.toDate();
              let formatted_date =
                current_datetime.getDate() +
                "-" +
                months[current_datetime.getMonth()] +
                "-" +
                current_datetime.getFullYear();
              var diagnostico = {
                tecnico: diag.data().tecnico,
                diagnostico: diag.data().diagnostico,
                repuestos: diag.data().repuestos,
                fecha: formatted_date,
              };
              array.push(diagnostico);
            });
    
            setDiagnosticos(array);
          });
      }, [tiketDetalle]);
    


    return(


        <div>
        <Box width={540} height={1500} color="#fffff">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid xs={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              padding={1.5}
            >
              {/****Edt Estado****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Avatar
                  onClick={(e) => {
                    manejoEstado(e);
                  }}
                  sx={{ width: 30, height: 30, backgroundColor: "#3D3D3D" }}
                >
                  <IconEdtEstado/>
                </Avatar>

                <Slide
                  in={openEstado}
                  direction="right"
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <Box
                    backgroundColor="#C8C8C8"
                    paddingTop={1.2}
                    sx={{
                      borderRadius: 8,
                      width: 130,
                      height: 40,
                      marginLeft: -5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        marginLeft: 6,
                      }}
                    >
                      Editar estado
                    </Typography>
                  </Box>
                </Slide>
              </Grid>

              {/****Edt Tecnico****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}
              >
                <Avatar
                  onClick={(e) => {
                    manejoTecnico(e);
                  }}
                  sx={{ width: 30, height: 30, backgroundColor: "#3D3D3D" }}
                >
                  <IconEdtTecnico/>
                </Avatar>
                <Slide
                  in={openTecnico}
                  direction="right"
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <Box
                    backgroundColor="#C8C8C8"
                    paddingTop={1.2}
                    sx={{
                      borderRadius: 8,
                      width: 130,
                      height: 40,
                      marginLeft: -5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 700,
                        marginLeft: 6,
                        textAlign: "end",
                        marginTop: -1,
                        marginRight: 2,
                      }}
                    >
                      Asignar nuevamente
                    </Typography>
                  </Box>
                </Slide>
              </Grid>

              {/****Edt Prioridad****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}
              >
                <Avatar
                  onClick={(e) => {
                    manejoPrioridad(e);
                  }}                     
                  
                  sx={{ width: 30, height: 30, backgroundColor: "#3D3D3D" }}
                >
                  <IconEdtPrioridad/>
                </Avatar>
                <Slide
                  in={openPrioridad}
                  direction="right"
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <Box
                    backgroundColor="#C8C8C8"
                    paddingTop={1.2}
                    sx={{
                      borderRadius: 8,
                      width: 130,
                      height: 40,
                      marginLeft: -5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 700,
                        marginLeft: 6,
                        textAlign: "end",
                        marginTop: -1,
                        marginRight: 2,
                      }}
                    >
                      Editar Prioridad
                    </Typography>
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={4}>
            <IconGrande />
          </Grid>

          <Grid xs={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              padding={1.5}
              sx={{ marginTop: -10 }}
            >
              {/****Edt Estado****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="start"
                marginTop={2}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 16,
                    textAlign: "center",
                    marginRight: -2.5,
                    marginTop: 0.3,
                    width: 100,
                    color: "#EC1B3B",
                  }}
                >
                  Editar
                </Typography>

                <Avatar
                  onClick={(e) => {
                    manejoEditar(e);
                  }}
                  sx={{ width: 30, height: 30, backgroundColor: "#ffffff", boxShadow: 5 }}
                >
                  <IconEdtEdt/>
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
          {/***Parte Hoja****/}

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 13,
                textAlign: "end",

                marginTop: 0.7,
                color: "#EC1B3B",
              }}
            >
              Factura N° {tiketDetalle.factura}
              <Divider textAlign="left" sx={{ width: 170 }} />
            </Typography>

            {/****Estado****/}
            <Box
              backgroundColor="#EC1B3B"
              borderRadius={0.3}
              paddingLeft={1}
              paddingRight={1}
              boxShadow={2}
              sx={{ marginLeft: 6, marginTop: 2 }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 0.7,
                  color: "#ffffff",
                  marginBottom: 0.6,
                }}
              >
                Estado: {tiketDetalle.estado}
              </Typography>
            </Box>
        
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 13,
                fontStyle: "italic",
                textAlign: "end",
                marginTop:1.5,
                marginLeft: 6,
                color: "#3D3D3D",
              }}
            >
              Técnico asignado: {tiketDetalle.asignado}
             
            </Typography>
        
        
        
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            {/****tipo fecha solicitante****/}
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              marginLeft={5}
              marginRight={5}
              marginBottom={0}
            >
              {/****Tab Tipo****/}
              <IconTipo />

              <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 0 }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    fontStyle: "italic",
                    marginTop: -0.2,
                    width: 90,
                  }}
                >
                  Tipo
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    width: 90,
                    fontWeight: 700,
                    color: "#3D3D3D",
                    marginTop: -0.5,
                  }}
                >
                  {tiketDetalle.tipo}
                </Typography>
              </Grid>

              {/***Tab fecha****/}
              <IconCalendar />

              <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 0 }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    fontStyle: "italic",
                    marginTop: 0,
                    width: 100,
                  }}
                >
                  Fecha de Creacion
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 700,
                    color: "#3D3D3D",
                    marginTop: -0.5,
                  }}
                >
                  {tiketDetalle.fechaCreacion}
                </Typography>
              </Grid>

              {/****tAB Aolicitante */}
              <IconSolicitante />

              <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 0 }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    fontStyle: "italic",
                    marginTop: 0,
                    width: 150,
                  }}
                >
                  Solicitante
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    width: 150,
                    fontWeight: 700,
                    color: "#3D3D3D",
                    marginTop: -0.5,
                  }}
                >
                  {tiketDetalle.nombre}
                </Typography>
              </Grid>
              <Divider />
            </Grid>

            <Typography
              sx={{ marginRight: 13, color: "#F1556D", fontSize: 10 }}
            >
              ________________________________________________________________________________________
            </Typography>

            {/****direccion ciudad celular****/}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginRight={6}
              marginTop={1}
            >
              {/***Tab direccion****/}
              <IconDireccion />

              <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 0 }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 600,
                    color: "#3D3D3D",
                    marginTop: -0.5,
                  }}
                >
                  {tiketDetalle.direccion}
                </Typography>
              </Grid>

              {/****tAB ciudad */}
              <IconCiudad />

              <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 0 }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 600,
                    color: "#3D3D3D",
                    marginTop: -0.5,
                  }}
                >
                  {tiketDetalle.ciudad}
                </Typography>
              </Grid>

              {/****tAB celular */}
              <IconCelular />

              <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 0 }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 600,
                    color: "#3D3D3D",
                    marginTop: -0.5,
                  }}
                >
                  {tiketDetalle.celular}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              marginTop={3}
            >
              {/****Maquina****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconDireccion />

                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    marginLeft: 1,
                  }}
                >
                  Máquina
                </Typography>
              </Grid>

              {tiketDetalle ? llenarMaquinas() : <div></div>}

              {/****Detalle de Fallo****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <IconDireccion />

                <Typography
                  sx={{
                    fontSize: 12,
                    width: 100,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    marginLeft: 1,
                  }}
                >
                  Detalle de Fallo
                </Typography>
              </Grid>

              <Typography
                sx={{
                  fontSize: 12,
                  width: 400,
                  fontWeight: 600,
                  color: "#3D3D3D",
                  marginLeft: 4.2,
                }}
              >
                {tiketDetalle.falla}
              </Typography>

              {tiketDetalle ? llenarDiagnostico() : <div></div>}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
      <Dialog
          fullWidth={true}
          open={abrirEditar}          
          sx={{ justifyContent: "center" }}
          TransitionComponent={Grow}
          onClose={(e) => cerrarEditar(e)}
        >

            <PasosEdt tiketDetalle={tiketDetalle}/>



        </Dialog>

      </div>
    )
}

export default Tiket;