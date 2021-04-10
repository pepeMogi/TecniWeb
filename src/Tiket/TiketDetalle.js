import { React, useState, useEffect } from "react";
import IconCelular from "./IconosTiket/iconCelular";
import IconEdtEstado from "../Iconos/icedtestado";
import IconEdtTecnico from "../Iconos/icedttecnico";
import IconEdtEdt from "../Iconos/icedtedt";
import IconEdtPrioridad from "../Iconos/icedtprioridad";
import IconDireccion from "./IconosTiket/iconDireccion";
import IconGrande from "../Iconos/ictecnigrandetiket";
import IconCalendario from "./IconosTiket/iconCalendario";
import IconCiudad from "./IconosTiket/iconCiudad";
import fire from "../fire";
import PasosEdt from "../EdtTiket/PasosEdt";
import IconTipo from "./IconosTiket/iconTipo";
import IconSolicitante from "./IconosTiket/iconSolicitante";
import {
  Typography,
  Slide,
  Grid,
  Box,
  Avatar,
  Divider,
  Dialog,
  Grow,
} from "@material-ui/core";
import Iconofalla from "../Componentes/IconosTiket/IcFalla";
import IconMaquina from "./IconosTiket/iconMaquina";
import IconTecnico from "./IconosTiket/iconTecnico";
import IconDiagnostico from "./IconosTiket/iconDiagnostico";
import { makeStyles } from "@material-ui/core/styles";
import { diagnostico } from "./../Entidades/diagnostico";
import DiagnosticoCard from "../Componentes/DiagnosticoCard";
import DiagnosticoCardCliente from "../Componentes/DiagnosticoCardCliente";


const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: 150,
    borderRadius: 10,
  },
}));

const TiketDetalle = (props) => {
  const { tiketDetalle } = props;
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [abrirEditar, setAbrirEditar] = useState(false);
  const [openEstado, setOpenEstado] = useState(false);
  const [openTecnico, setOpenTecnico] = useState(false);
  const [openPrioridad, setOpenPrioridad] = useState(false);


  const classes = useStyles();

  var factList = "";

    tiketDetalle.facturas.forEach((fac) => {
      factList = factList + " - " + fac;
    });
  
  

  var nom = tiketDetalle.nombre;
  if (tiketDetalle.solicitante != "" && tiketDetalle.solicitante != null) {
    nom = nom + " /" + tiketDetalle.solicitante;
  }

  var num = 0;
  if (tiketDetalle.diagnosticos != null) {
    num = tiketDetalle.diagnosticos.length;
  }

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
  };

  const cerrarEditar = () => {
    setAbrirEditar(false);
  };

  const llenarAnexos = () => {
    if (tiketDetalle.anexos != null) {
      return tiketDetalle.anexos.map((item) => {
        return (
          <Box sx={{ minWidth: 70, borderRadius: 2, margin: 1 }}>
            <img
              src={item}
              className={classes.img}
              onClick={() => abrir_img(item)}
            />
          </Box>
        );
      });
    }
  };

  var configuracion_ventana =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

  function abrir_img(item) {
    window.open(item, "Pagina_CNN", configuracion_ventana);
  }

  useEffect(() => {
   
      if (tiketDetalle.diagnosticos != null) {
        console.log("buscando diagnosticos...");
        var array = [];
        tiketDetalle.diagnosticos.forEach((id) => {
          console.log("buscando " + id);
          fire
            .firestore()
            .collection("diagnosticos")
            .doc(id)
            .get()
            .then((doc) => {
              var dia = new diagnostico(doc);
              array.push(dia);
              setDiagnosticos((array) => array.concat(dia));
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
   
    
  }, [tiketDetalle]);

  return (
  <h1>Cambiar por Tiket Detalle completo</h1>
  );
};

export default TiketDetalle;
