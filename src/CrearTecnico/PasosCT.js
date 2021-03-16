import { React, useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Grid,
  StepConnector,
} from "@material-ui/core";
import PasoUnoCT from "./PasoUnoCT";
import PasoDosCT from "./PasoDosCT";
import PasoCuatroCT from "./PasoCuatroCT";
import PasoTresCT from "./PasoTresCT";
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

const Pasos = () => {
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [cc, setCc] = useState("");
  const [rh, setRh] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [tipo, setTipo] = useState("");
  const [bodega, setBodega] = useState("");

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
          <PasoUnoCT
            nombre={nombre}
            setNombre={setNombre}
            celular={celular}
            setCelular={setCelular}
            cc={cc}
            setCc={setCc}
            rh={rh}
            setRh={setRh}
            avanzar={avanzar}
            retroceder={retroceder}
          />
        );
      case 1:
        return (
          <PasoDosCT
            email={email}
            setEmail={setEmail}
            pass={pass}
            setPass={setPass}
            avanzar={avanzar}
            retroceder={retroceder}
          />
        );
      case 2:
        return (
          <PasoTresCT
            tipo={tipo}
            setTipo={setTipo}
            bodega={bodega}
            setBodega={setBodega}
            avanzar={avanzar}
            retroceder={retroceder}
          />
        );
      case 3:
        return (
          <PasoCuatroCT
            retroceder={retroceder}
            nombre={nombre}
            cc={cc}
            rh={rh}
            tipo={tipo}
            bodega={bodega}
            celular={celular}
            email={email}
            pass={pass}
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
        return <IcTres />;
        break;
    }
  };

  useEffect(() => {
    switch (paso) {
      case 0:
        setTitulo("Crear Tecnico - Datos");
        break;
      case 1:
        setTitulo("Crear Tecnico - Cuenta");
        break;
      case 2:
        setTitulo("Creat Tecnico - Tipo");
        break;
      case 3:
        setTitulo("Creat Tecnico - Imagen");
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
          </Stepper>
          {mostrarPasos(paso)}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Pasos;
