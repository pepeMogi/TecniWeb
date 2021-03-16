import { React, useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Collapse,
  Button,
  TableBody,
  Dialog,
  Grow
 
} from "@material-ui/core";
import IconAlert from "../Iconos/icalerttik";
import IconTikete from "../Iconos/ictiktik";
import IconFecha from "../Iconos/icfechatik";
import IconSoli from "../Iconos/icsolitik";
import IconMaquina from "../Iconos/icmaquitik";
import IconCiudad from "../Iconos/icciudadtik";
import IconGestionar from "../Iconos/icgestik";
import IconAnterior from "../Iconos/icantetik";
import {
  makeStyles,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import TemaDialog from "../Temas/TemaDialog";
import fire from "../fire";
import Tiket from "../Tiket/Tiket";
import PasosGestion from './GestionTiket/PasosGestion';
import { useMediaQuery } from 'react-responsive'

const useRowStyles = makeStyles({
  table: {
    marginTop: 18,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    color: "#EC1B3B",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  label: {
    textTransform: "capitalize",
  },
}))(TableRow);

const StyledTableRowDos = withStyles((theme) => ({
  root: {
    color: "#EC1B3B",
  },
  label: {
    textTransform: "capitalize",
  },
}))(TableRow);

const getFecha = (times) => {
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
  let current_datetime = times.toDate();
  let formatted_date =
    current_datetime.getDate() +
    "-" +
    months[current_datetime.getMonth()] +
    "-" +
    current_datetime.getFullYear();

  return formatted_date;
};

// Tikets Tabla
const Tikets = (props) => {
  const { num, tiket } = props;
  console.log(tiket.celular);
  const [open, setOpen] = useState(false);
  const [solicitante, setSolicitante] = useState("");
  const [historial, setHistorial] = useState([]);
  const [tiketDetalle, setTiketDetalle] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogAsig, setOpenDialogAsig] = useState(false);
  const [tiketId,setTiketId] = useState("");
  

  var color = "#21212110";
  if ((num + 1) % 2) {
    color = "#21212100";
  }

  var maquina = "0";

  if (tiket.maquinas.length > 1) {
    maquina = "(" + tiket.maquinas.length + ") maquinas ";
  } else {
    maquina = tiket.maquinas[0];
  }

  const manejoAnterior = () => {
    if (!open) {
      setSolicitante(tiket.idCliente);
    }
    setOpen(!open);
  };

  const verDetalleTiket = (tiket) => {
    setTiketDetalle(tiket);
    setOpenDialog(true);
  };

  const manejoCerrarDialog = () => {
    setOpenDialog(false);
  };

  const manejoAbrirAsig = (id) =>{
    setTiketId(id)
    setOpenDialogAsig(true)
  }

  const manejoCerrarDialogAsig = () => {
    setOpenDialogAsig(false)
  };

  useEffect(() => {
    if (solicitante) {
      console.log("Buscando historial de " + solicitante);

      var array = [];
      fire
        .firestore()
        .collection("tikets")
        .where("idCliente", "==", solicitante)
        .limit(5)
        .get()
        .then((snap) => {
          snap.forEach((tik) => {
            var tikete = {
              id: tik.data().id,
              numero: tik.data().id,
              nombre: tik.data().nombre,
              tipo: tik.data().tipo,
              fechaCreacion: getFecha(tik.data().fechaCreacion),
              estado: tik.data().estado,
              direccion: tik.data().direccion,
              celular: tik.data().celular,
              celularDos: tik.data().celularDos,
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
              ultimaVisita: getFecha(tik.data().ultimaVisita),
            };

            array.push(tikete);
          });

          var final = [];

          for (var i = 0; i < array.length; i++) {
            if (array[i].estado != "nuevo") {
              final.push(array[i]);
            }
          }

          setHistorial(final);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [solicitante]);

  return (
    <div>
      <Table>
        <StyledTableRowDos
          hover
          style={{
            borderBottomWidth: "2px",
            borderTopWidth: "0px",
            borderLeftWidth: "0px",
            borderRightWidth: "0px",
            borderColor: "#EC1B3B",
            borderStyle: "solid",
            backgroundColor: color,
          }}
        >
          {/****Numero Tiket****/}
          <TableCell align="left" >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              margin={-1}
              onClick={(e) => verDetalleTiket(tiket)}
            >
              <IconTikete />
              <Typography sx={{fontWeight: 600, marginLeft: 2}} >
              {tiket.numero}
              </Typography>
             
            </Grid>
          </TableCell>

          {/****Fecha Tiket****/}
          <TableCell align="left">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              margin={-2}
              onClick={(e) => verDetalleTiket(tiket)}
            >
              <IconFecha />
              <Typography
                sx={{
                  maxWidth: 100,
                  minWidth: 100,
                  lines: 1,
                  fontSize: 14,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                  marginLeft: 2
                  
                }}
              >
                {tiket.fechaCreacion}
              </Typography>
            </Grid>
          </TableCell>

          {/****Solicitante Tiket****/}
          <TableCell align="right">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              margin={-2}
              onClick={(e) => verDetalleTiket(tiket)}
            >
              <IconSoli />
              <Typography
                sx={{
                  maxWidth: 180,
                  minWidth: 180,
                  lines: 1,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                  fontSize: 14,
                  marginLeft: 2
                }}
              >
                {tiket.nombre}
              </Typography>
            </Grid>
          </TableCell>

          {/****Maquina Tiket****/}
          <TableCell align="left">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              margin={-2}
              onClick={(e) => verDetalleTiket(tiket)}
            >
              <IconMaquina />
              <Typography
                sx={{
                  maxWidth: 200,
                  minWidth: 200,
                  lines: 1,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                  fontSize: 14,
                  marginLeft: 2
                }}
              >
                {maquina}
              </Typography>
            </Grid>
          </TableCell>

          {/****Ciudad Tiket****/}
          <TableCell align="right">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              margin={-2}
              onClick={(e) => verDetalleTiket(tiket)}
            >
              <IconCiudad />
              <Typography
                sx={{
                  maxWidth: 80,
                  minWidth: 80,
                  lines: 1,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textAlign: "start",
                  fontWeight: 500,
                  fontSize: 14,
                  marginLeft: 2
                }}
              >
                {tiket.ciudad}
              </Typography>
            </Grid>
          </TableCell>

          {/****BTN anterior Tiket****/}
          <TableCell align="right">
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              margin={-1}
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontSize: 10 }}
                startIcon={<IconAnterior />}
                onClick={(e) => manejoAnterior()}
              >
                anteriores
              </Button>
            </Grid>
          </TableCell>

          {/****BTN Gestionar Tiket****/}
          <TableCell align="right" width={100}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              margin={-1}
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontSize: 10 }}
                startIcon={<IconGestionar />}
                onClick={(e) => manejoAbrirAsig(tiket.id)}
              >
                gestionar
              </Button>
            </Grid>
          </TableCell>
        </StyledTableRowDos>
      </Table>

      {/****Collapse de la Tabla****/}
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{ width: 900, marginBottom: 4 }}
      >
        <Box sx={{ marginTop: 1, marginLeft: 4 }}>
          <Typography
            sx={{
              marginRight: 2,
              marginBottom: 2,
              fontWeight: 500,
            }}
          >
            Historial de {tiket.nombre}
          </Typography>
        </Box>

        {/****Cuerpo de la Tabla****/}
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <StyledTableRow>
                {historial.map((tik) => {
                  return (
                    <div>
                      <TableCell align="left" width={50}>
                        {tik.numero}
                      </TableCell>
                      <TableCell align="left">{tik.fechaCreacion}</TableCell>
                      <TableCell align="left">{tik.tipo}</TableCell>
                      <TableCell align="right">
                        Minolta 1512 sn315215646
                      </TableCell>
                      <TableCell align="right">{tik.asignado}</TableCell>
                      <TableCell align="right">{tik.ultimaVisita}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{ fontSize: 8, padding: -1 }}
                          onClick={(e) => verDetalleTiket(tik)}
                        >
                          detalles
                        </Button>
                      </TableCell>
                    </div>
                  );
                })}
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
      
      {/****Dialog Detalle Tiket****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog open={openDialog} onClose={manejoCerrarDialog}>
          <Tiket tiketDetalle={tiketDetalle} />
        </Dialog>
      </ThemeProvider>

        {/****Dialog Gestionar Tiket****/}
        <ThemeProvider theme={TemaDialog}>
        <Dialog 
         fullWidth={true}       
         sx={{ justifyContent: "center" }}
         TransitionComponent={Grow}
        open={openDialogAsig} onClose={manejoCerrarDialogAsig}>

          <PasosGestion tiketId={tiketId} manejoCerrarDialogAsig={manejoCerrarDialogAsig} />

        </Dialog>
      </ThemeProvider>
    </div>
  );
};

const TiketsNuevos = () => {
  const [tiketes, setTiketes] = useState([]);
  const [numTikets, setNumTikets] = useState("");
  const classes = useRowStyles();
  var num = 0;

  useEffect(() => {
    

    fire
      .firestore()
      .collection("tikets")
      .where("estado", "==", "nuevo")
      .onSnapshot((snap) => {
        var array = [];
        setTiketes(array);
        snap.forEach((tik) => {
          var tikete = {
            id: tik.data().id,
            numero: tik.data().id,
            nombre: tik.data().nombre,
            tipo: tik.data().tipo,
            fechaCreacion: getFecha(tik.data().fechaCreacion),
            estado: tik.data().estado,
            direccion: tik.data().direccion,
            celular: tik.data().celular,
            celularDos: tik.data().celularDos,
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

          setTiketes((array) => array.concat(tikete));
          array.push(tikete)
        });
        setNumTikets(array.length);
        
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

        {/****Tabla de Tikets****/}
        <TableContainer className={classes.table}>
          {tiketes.map((tiket) => {
            num++;
            return <Tikets num={num} tiket={tiket} />;
          })}
        </TableContainer>
      </Grid>
    </div>
  );
};

export default TiketsNuevos;
