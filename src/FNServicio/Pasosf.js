import { React, useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Grid,
  StepConnector,
} from "@material-ui/core";
import PasoUnof from "./PasoUnof";
import PasoTresf from "./PasoTresf";
import PasoCuatrof from "./PasoCuatrof";
import PasoCincof from "./PasoCincof";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TemaFormu from "../Temas/TemaFormu";
import IcUno from "../Iconos/icuno";
import IcDos from "../Iconos/icdos";
import IcTres from "../Iconos/ictres";
import IconFallaForm from './../Iconos/icFallaForm';

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
  const { cerrarDialog } = props;
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [nombre, setNombre] = useState("");
  const [solicitante,setSolicitante] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [celular, setCelular] = useState("");
  const [celularDos, setCelularDos] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tipo, setTipo] = useState("");
  const [maquinasCliente] = useState([]);
  const [maquinaSelec,setMaquinaSelect] = useState("");
  const [falla, setFalla] = useState("");
  const [anexos] = useState([]);

 

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
          <PasoUnof
            setIdCliente={setIdCliente}
            avanzar={avanzar}
            nombre={nombre}
            setNombre={setNombre}
            solicitante={solicitante}
            setSolicitante={setSolicitante}
            email={email}
            setEmail={setEmail}
            direccion={direccion}
            setDireccion={setDireccion}
            ciudad={ciudad}
            setCiudad={setCiudad}
            celular={celular}
            setCelular={setCelular}    
            celularDos={celularDos}
            setCelularDos={setCelularDos}            
            maquinasCliente={maquinasCliente}
           setSolicitante={setSolicitante}
          />
        );
   
      case 1:        
        return (
          <PasoTresf
            avanzar={avanzar}
            nombre={nombre}
            setNombre={setNombre}
            email={email}
            setEmail={setEmail}
            direccion={direccion}
            ciudad={ciudad}
            setCiudad={setCiudad}
            setDireccion={setDireccion}
            celular={celular}
            setCelular={setCelular}
            celularDos={celularDos}
            setCelularDos={setCelularDos}
            retroceder={retroceder}
            solicitante={solicitante}
            setSolicitante={setSolicitante}
          
          />
        );

      case 2:
        return (
          <PasoCuatrof
            maquinasCliente={maquinasCliente}
            setMaquinaSelect={setMaquinaSelect}
            avanzar={avanzar}
            idCliente={idCliente}
            retroceder={retroceder}
          />
        );

      case 3:
        return (
          <PasoCincof
          id={idCliente}
          falla={falla}
          setFalla={setFalla}
          anexos={anexos}                   
          nombre={nombre}          
          email={email}          
          direccion={direccion} 
          cuidad={ciudad}         
          celular={celular}
          celularDos={celularDos}            
          maquinasCliente={maquinasCliente}
          categoria={tipo}
          maquinaSelec={maquinaSelec}
          cerrarDialog={cerrarDialog}
          retroceder={retroceder}
          solicitante={solicitante}
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
        return <IconFallaForm />;
        break;
     
    }
  };

  useEffect(() => {
    switch (paso) {
      case 0:
        setTitulo("Solicitud de Servicio - Ticket");
        break;     
      case 1:
        setTitulo("Datos del Solicitante");
        break;
      case 2:
        setTitulo("Maquina a Revisar");
        break;
      case 3:
        setTitulo("Detalles del fallo");
        break;
    }
  }, [paso]);

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

        <Paper className={classes.root}  elevation={0} sx={{ marginTop: 7 }}>
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
          
          </Stepper>
          {mostrarPasos(paso)}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Pasos;
