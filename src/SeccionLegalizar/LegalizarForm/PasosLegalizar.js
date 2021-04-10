import { React, useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Grid,
  StepConnector,
  Grow,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TemaFormu from "../../Temas/TemaFormu";
import PasoUnoDiagnosticos from "./PasoUnoDiagnosticos";
import PasoDosRepuestos from "./PasoDosRepuestos";
import PasoTresFacturacion from "./PasoTresFacturacion";

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

const PasosLegalizar = (props) => {
  const { tiket } = props;
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [diagnosticoLocal, setDiagnosticoLocal] = useState();
  const [fac, setFac] = useState("");
  const [numFac, setNumFac] = useState("");

  const classes = useStyles();

  const avanzar = () => {
    if (paso < 3) {
      setPaso(paso + 1);
    }
  };

  const retroceder = () => {
    if (paso > 0) {
      setPaso(paso - 1);
    }
  };

  const PasosLegalizar = (paso) => {
    switch (paso) {
      case 0:
        return (
          <PasoUnoDiagnosticos
            tiket={tiket}
            setDiagnosticoLocal={setDiagnosticoLocal}
            avanzar={avanzar}
            retroceder={retroceder}
          />
        );
      case 1:
        return (
          <PasoDosRepuestos
            diagnosticoLocal={diagnosticoLocal}
            avanzar={avanzar}
            retroceder={retroceder}
          />
        );
      case 2:
        return (
          <PasoTresFacturacion
            diagnosticoLocal={diagnosticoLocal}
            tiket={tiket}
            retroceder={retroceder}
            setFac={setFac}
            setNumFac={setNumFac}
            fac={fac}
            numFac={numFac}
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

  useEffect(() => {
    switch (paso) {
      case 0:
        setTitulo("Reporte Tecnico");
        break;
      case 1:
        setTitulo("Repuestos Utilizados");
        break;
      case 2:
        setTitulo("Facturacion");
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
          </Stepper>
          {PasosLegalizar(paso)}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default PasosLegalizar;
