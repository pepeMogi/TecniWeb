import { React, useState, useEffect } from "react";
import {
  TableCell,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  ThemeProvider,
  Dialog,
  Grow
} from "@material-ui/core";
import fire from "../fire";
import { tiket } from "./../Entidades/tikets";
import TiketDetalle from "../Tiket/TiketDetalle";
import TemaDialog from "../Temas/TemaDialog";

const TablaHistorialTiketCompo = (props) => {
  const { idCliente, idTiket } = props;
  const [tiketsHistorial, setTiketsHistorial] = useState([]);
  const [tiketDetalle, setTiketDetalle] = useState();
  const [openDetalle, setOpenDetalle] = useState(false);

  const abrirDetalle = (tik) =>{
      setTiketDetalle(tik);
      setOpenDetalle(true)
  }

  const cerrarDetalle = () =>{
    setOpenDetalle(false)
}

  useEffect(() => {
      var array = [];

      const query =  fire
      .firestore()
      .collection("tikets")
     .where("idCliente", "==", idCliente)
     .orderBy("fechaCreacion","desc")    
      .limit(5);  

   query
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var tik = new tiket(doc);
          array.push(tik);
        });
        for (var i = 0; i < array.length; i++){
            if(array[i].id == idTiket){
                array.splice(i, 1);
            }
        }
        setTiketsHistorial(array);
      });
  }, []);

  return (
      <div>
    <Box sx={{ margin: 1 }}>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ marginLeft: 1 }}
      >
        Histotial
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Fecha Creacion</TableCell>
            <TableCell>Solicitante</TableCell>
            <TableCell>Maquina</TableCell>
            <TableCell align="right">Ult. Visita</TableCell>
            <TableCell align="right">Tec. Asignado</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tiketsHistorial.map((tik) => (
            <TableRow key={tik.id} onClick={() => abrirDetalle(tik)} >
              <TableCell component="th" scope="row">
                {tik.fechaCreacion}
              </TableCell>
              <TableCell>{tik.nombre + "/" + tik.solicitante}</TableCell>
              <TableCell>{tik.idMaquina}</TableCell>
              <TableCell align="right">{tik.ultimaVisita}</TableCell>
              <TableCell align="right">{tik.asignado}</TableCell>
              <TableCell align="right">
                {tik.estado}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>

       {/****Dialog Detalle Tiket****/}
       <ThemeProvider theme={TemaDialog}>
       <Dialog
         fullWidth={true}
         sx={{ justifyContent: "center" }}
         TransitionComponent={Grow}
         open={openDetalle}
         onClose={cerrarDetalle}
       >
         <TiketDetalle tiketDetalle={tiketDetalle} />
       </Dialog>
     </ThemeProvider>
     </div>
  );
};

export default TablaHistorialTiketCompo;
