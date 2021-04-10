import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListaImagenes from "./ListaImagenes";
import TextoLineaRojoGris from "./TextoLineaRojoGris";
import TextoLineaIconGris from './TextoLineaIconGris';
import IconoTecnico from "./IconosDiagnostico/IconoTecnico";
import RepuestosTabla from "./RepuestosTabla";


const DiagnosticoCardCliente = (props) => {
  const { diag } = props;




  return (
    <Box
      sx={{
        boxShadow: 4,
        marginLeft: 1,
        marginRight: 1,
        marginBottom: 3,
        borderRadius: 0.5,
        padding: 3,
      }}
      width="800"
    >
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        
        <TextoLineaIconGris titulo={diag.tecnico} Icono={IconoTecnico} />
        <Box sx={{marginTop: 1}} />
        <TextoLineaRojoGris titulo={"Diagnostico: "} contenido={diag.diagnostico} />

        <TextoLineaRojoGris titulo={"Solucion: "} contenido={diag.solucion} />
        <Box sx={{marginTop: 2}} />
        <RepuestosTabla  repuestos={diag.repuestos} />

        <Typography
          sx={{
            marginTop: 2,
            fontSize: 12,
            color: "#EC1B3B",
            fontWeight: 600,
            marginBottom: 1
          }}
        >
          { "( " +  diag.imgs.length + " ) evidencias en el reporte"}
        </Typography>

        <ListaImagenes imagenes={diag.imgs} />
        <TextoLineaRojoGris titulo={"Comentario: "} contenido={diag.comentario} />
      </Grid>
    </Box>
  );
};

export default DiagnosticoCardCliente;
