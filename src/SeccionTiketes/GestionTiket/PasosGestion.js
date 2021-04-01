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
import PasoUnoAsignar from "./PasoUnoAsignar";
import PasoTresComentario from "./PasoTresComentario";
import PasoDosTipo from "./PasoDosTipo";
import IconAsignar from './../../Iconos/icAsignar';

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

const PasosGestion = (props) => {
  const { cerrarGestion, tiket } = props;
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [asignado, setAsignado] = useState("");
  const [comentario, setComentario] = useState("");
  const [tipo, setTipo] = useState("");
  const [prioridad, setPrioridad] = useState(2);
  const [tecnico,setTecnico] = useState("");

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
        return <PasoUnoAsignar setAsignado={setAsignado} avanzar={avanzar} cerrarGestion={cerrarGestion} setTecnico={setTecnico}  />;
      case 1:
        return (
          <PasoDosTipo
            avanzar={avanzar}
            retroceder={retroceder}
            setTipo={setTipo}
          />
        );
      case 2:
        return (
          <PasoTresComentario
            retroceder={retroceder}
            asignado={asignado}
            comentario={comentario}
            setComentario={setComentario}
            cerrarGestion={cerrarGestion}
            tiketId={tiket.id}
            prioridad={prioridad}
            setPrioridad={setPrioridad}
            tipo={tipo}
            tecnico={tecnico}
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
        return <IconAsignar />;
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
        setTitulo("Asignar Tecnico");
        break;
      case 1:
        setTitulo("Agregar Comentario");
        break;
      case 2:
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
            sx={{ fontWeight: 700, marginLeft: 2 }}
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
          {mostrarPasos(paso)}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default PasosGestion;
