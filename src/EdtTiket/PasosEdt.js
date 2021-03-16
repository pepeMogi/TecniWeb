import { React, useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Dialog,
  Grid,
  StepConnector,
  Grow,
} from "@material-ui/core";
import PasoDosEdt from "./PasoDosEdt";
import PasoUnoEdt from "./PasoUnoEdt";
import PasoTredEdt from "./PasoTresEdt";
import PasoCuatroEdt from "./PasoCuatroEdt";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TemaFormu from "../Temas/TemaFormu";
import TemaDialog from "../Temas/TemaDialog";
import IcUno from "../Iconos/icuno";
import IcDos from "../Iconos/icdos";
import IcTres from "../Iconos/ictres";

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(62),
  },

  quontoStepper: {
    marginBottom: 32,
  },
  stepIcon: {
    color: "pink",
  },
}));

const Pasos = (props) => {
  const { handleCloseNew, tiketDetalle } = props;
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [celular, setCelular] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tipo, setTipo] = useState("");
  const [maquinasCliente,setMaquinasCliente] = useState([]);
  const [maquinasSelec, setMaquinasSelec] = useState([]);
  const [falla, setFalla] = useState("");
  const [anexos, setAnexos] = useState([]);
  const [asignado, setAsignado] = useState("");
  const [estado,setEstado] = useState("");
  const [id,setId] = useState("");
  const [prioridad,setPrioridad] = useState("");
 const [legalizacion,setLegalizacion] = useState("");
 const [factura,setFactura] =  useState("");
 const[fechaCreacion,setFechaCreacion] = useState("");
 const [fecTimestamp,setFecTimestap] = useState("");

  const classes = useStyles();

  const avanzar = () => {
    if (paso < 4) {
      setPaso(paso + 1);
    }
  };

  const retroceder = () => {
    if (paso > 0) {
      setPaso(paso - 1);
    }
  };

  const mostrarPasos = (paso) => {
    switch (paso) {
      case 0:
        return (
          <PasoUnoEdt
            avanzar={avanzar}
            nombre={nombre}
            setNombre={setNombre}
            email={email}
            setEmail={setEmail}
            direccion={direccion}
            setDireccion={setDireccion}
            celular={celular}
            setCelular={setCelular}
            retroceder={retroceder}
          />
        );
      case 1:
        return (
          <PasoDosEdt
            avanzar={avanzar}
            retroceder={retroceder}
            setTipo={setTipo}
            tipo={tipo}
          />
        );
      case 2:
        return (
          <PasoTredEdt            
            maquinasSelec={maquinasSelec}
            avanzar={avanzar}
            idCliente={idCliente}
            retroceder={retroceder}
          />
        );

      case 3:
        return (
          <PasoCuatroEdt
          id={id}
            idCliente={idCliente}
            falla={falla}
            setFalla={setFalla}
            anexos={anexos}
            nombre={nombre}
            email={email}
            direccion={direccion}
            cuidad={ciudad}
            celular={celular}
            maquinasCliente={maquinasCliente}
            categoria={tipo}
            maquinasSelec={maquinasSelec}
            handleCloseNew={handleCloseNew}
            retroceder={retroceder}
            asignado={asignado}
            fechaCreacion={fechaCreacion}
            estado={estado}
            factura={factura}
            legalizacion={legalizacion}
            prioridad={prioridad}
            fecTimestamp={fecTimestamp}

          />
        );

      
    }
  };

  const QontoConnector = withStyles({
    alternativeLabel: {
      top: 11,
      left: "calc(-50% + 12px)",
      right: "calc(50% + 12px)",
    },
    active: {
      "& $line": {
        borderColor: "#EC1B3B",
      },
    },
    completed: {
      "& $line": {
        borderColor: "#EC1B3B",
      },
    },
    line: {
      borderColor: "#F9BEC7",
      borderTopWidth: 2,
      borderRadius: 1,
    },
  })(StepConnector);

 
  const IconoTitulo = (paso) => {
    switch (paso) {
      case 0:
        return <IcUno />;
        break;
      case 1:
        return <IcDos />;
        break;
      case 2:
        return <IcTres />;
        break;
      case 3:
        break;
      case 4:
        break;
    }
  };

  useEffect(() => {
    switch (paso) {
      case 0:
        setTitulo("Edicion Tiket");
        break;
      case 1:
        setTitulo("Editar Seleccion de servicio");
        break;
      case 2:
        setTitulo("Cliente");
        break;
      case 3:
        setTitulo("Escoger máquina");
        break;
      case 4:
        setTitulo("Detalles del fallo");
        break;
    }
  }, [paso]);

  useEffect(() =>{
    setNombre(tiketDetalle.nombre);
    setEmail(tiketDetalle.email);
    setDireccion(tiketDetalle.direccion);
    setCelular(tiketDetalle.celular);
    setFalla(tiketDetalle.falla);
    setCiudad(tiketDetalle.ciudad);
    setTipo(tiketDetalle.tipo);
   // setMaquinasCliente(tiketDetalle.nombre);
    setMaquinasSelec(tiketDetalle.maquinas);
    setAnexos(tiketDetalle.anexos);
    setIdCliente(tiketDetalle.idCliente);
    setAsignado(tiketDetalle.asignado);
    setEstado(tiketDetalle.estado);
    setId(tiketDetalle.id);
    setPrioridad(tiketDetalle.prioridad);
    setLegalizacion(tiketDetalle.legalizacion);
    setFactura(tiketDetalle.factura);
    setFechaCreacion(tiketDetalle.fechaCreacion);
    setFecTimestap(tiketDetalle.fecTimestamp);
    
   

    
    
  },[])

  return (
    <div>
      <ThemeProvider theme={TemaFormu}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 4 }}
        >
          {IconoTitulo(paso)}
          <Typography
            variant="h6"
            align="center"
            color="primary"
            sx={{ fontWeight: 700, marginLeft: 3 }}
          >
            {titulo}
          </Typography>
        </Grid>

        <Paper className={classes.root} elevation={0} sx={{ marginTop: 7 }}>
          <Stepper
            activeStep={paso}
            alternativeLabel
            className={classes.quontoStepper}
            connector={<QontoConnector />}
          >
            <Step>
              <StepLabel icon={" "}></StepLabel>
            </Step>
            <Step>
              <StepLabel
                icon={" "}
                StepIconProps={{
                  classes: { root: classes.stepIcon },
                }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                icon={" "}
                StepIconProps={{
                  classes: { root: classes.stepIcon },
                }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                icon={" "}
                StepIconProps={{
                  classes: { root: classes.stepIcon },
                }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                icon={" "}
                StepIconProps={{
                  classes: { root: classes.stepIcon },
                }}
              ></StepLabel>
            </Step>
          </Stepper>
          {mostrarPasos(paso)}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Pasos;
