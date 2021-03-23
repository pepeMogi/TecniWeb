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
  const { tik } = props;
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [diagnosticoLocal, setDiagnosticoLocal] = useState();

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

  const PasosLegalizar = (paso) => {
    switch (paso) {
      case 0:
        return (
          <PasoUnoDiagnosticos
            tik={tik}
            setDiagnosticoLocal={setDiagnosticoLocal}
            avanzar={avanzar}
            retroceder={retroceder}
          />
        );
      case 1:
        return <PasoDosRepuestos diagnosticoLocal={diagnosticoLocal} />;
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
        return;
        break;
      case 1:
        return;
        break;
      case 2:
        return;
        break;
      case 3:
        return;
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
          {PasosLegalizar(paso)}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default PasosLegalizar;
