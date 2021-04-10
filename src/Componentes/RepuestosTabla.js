import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Typography, Grid, Box } from '@material-ui/core';
import { React, useState, useEffect } from 'react';



const TablaGenerica = (props) =>{

    const {rows, titulo} = props;

    return(
  
        <TableContainer sx={{borderRadius: 0.5, boxShadow: 2}}>
                <Box  >
        <Table size="small" aria-label="a dense table">
          <TableHead>
          <TableRow > <Typography sx={{fontSize: 12, fontWeight: 700, marginLeft: 1, marginTop: 1}} >{titulo} </Typography> </TableRow>
            <TableRow >
              <TableCell ><Typography sx={{fontSize: 12, fontWeight: 600}} >Siigo </Typography> </TableCell>
              <TableCell align="center"><Typography sx={{fontSize: 12, fontWeight: 600}} >Cant. </Typography> </TableCell>
              <TableCell align="left"><Typography sx={{fontSize: 12, fontWeight: 600}} >Nombre </Typography> </TableCell>
              <TableCell align="right"><Typography sx={{fontSize: 12, fontWeight: 600}} >valor </Typography> </TableCell>
       
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.referencia} hover sx={{height: 10}} >
                <TableCell component="th" scope="row">
                <Typography sx={{fontSize: 12, fontWeight: 500}} >{row.referencia} </Typography> 
                </TableCell>
                <TableCell align="center"><Typography sx={{fontSize: 12, fontWeight: 500}} >{row.cantidad}  </Typography> </TableCell>
                <TableCell align="left"><Typography sx={{fontSize: 12, fontWeight: 500}} >{row.nombre}  </Typography> </TableCell>
                <TableCell align="right"><Typography sx={{fontSize: 12, fontWeight: 500}} >{row.valor}  </Typography> </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
      </TableContainer>
   
    )
}


const RepuestosTabla = (props) =>{
    const {repuestos} = props;
    const [facturables,setFacturables] = useState([]);
    const [cotizacion,setCotizacion] = useState([]);
    const [garantia,setGarantia] = useState([]);

    useEffect(() =>{
        var fact = [];
        var coti = [];
        var gara = [];

        if(repuestos != null && repuestos.length > 0){
            repuestos.forEach((elm) => {
                switch (elm.tipo){

                    case "facturable":
                        fact.push(elm);
                        break;
                        
                    case "cotizacion":
                        coti.push(elm);
                        break;
                        
                    case "garantia":
                        gara.push(elm);
                        break;
                }
            });

            setFacturables(fact);
            setCotizacion(coti);
            setGarantia(gara);
        }


    },[repuestos])

    return(
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        
      >
            {facturables.length != 0 ? <TablaGenerica rows={facturables} titulo={"Facturables"} /> : ""}
            {cotizacion.length != 0 ? <TablaGenerica rows={cotizacion} titulo={"Cotizacion"} /> : ""}
            {garantia.length != 0 ? <TablaGenerica rows={garantia} titulo={"Garantia"} /> : ""}


      </Grid>

    )
}

export default RepuestosTabla;