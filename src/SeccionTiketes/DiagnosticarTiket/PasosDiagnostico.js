import { React, useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel, 
  Grid,
  StepConnector,
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TemaFormu from "./../../Temas/TemaFormu";
import IcUno from "./../../Iconos/icuno";
import IcDos from "./../../Iconos/icdos";
import IcTres from "./../../Iconos/ictres";
import PasoUnoMetodo from './PasoUnoMetodo';
import PasoDosMaquinas from "./PasoDosMaquinas";
import PasoTresDiagnostico from './PasoTresDiagnostico';

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

const PasosDiagnostico = (props) => { 
  const {tiketDiag} = props;
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [diagExport,setDiagExport] = useState("");


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
        return <PasoUnoMetodo avanzar={avanzar} tiketId={tiketDiag.id} setDiagExport={setDiagExport}  />;
      case 1:
        return <PasoDosMaquinas avanzar={avanzar} tiketDiag={tiketDiag} retroceder={retroceder} idCliente={tiketDiag.idCliente} /> ;
      case 2:
        return <PasoTresDiagnostico avanzar={avanzar} tiketDiag={tiketDiag} retroceder={retroceder} />;
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
        setTitulo("Escoger Tecnico");
        break;
      case 1:
        setTitulo("Agregar Comentario");
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
          </Stepper>
          {mostrarPasos(paso)}
        </Paper>
      </ThemeProvider>

     
    </div>
  );
};

export default PasosDiagnostico;
