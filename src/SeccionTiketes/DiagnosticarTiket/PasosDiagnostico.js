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
import PasoUnoDiagnostico from "./PasoUnoDiagnostico";
import PasoDosSolucion from "./PasoDosSolucion";
import PasoTresRepuestos from "./PasoTresRepuestos";
import PasoCuatroMaquina from "./PasoCuatroMaquina";
import { maquina } from "./../../Entidades/maquina";
import PasoCincoAnexos from "./PasoCincoAnexos";
import PasoSeisEstado from "./PasoSeisEstado";
import PasoSieteFinalizar from "./PasoSieteFinalizar";

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
  const { tiketDiag, cerrarDiagnostico } = props;
  const [paso, setPaso] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [solucion, setSolucion] = useState("");
  const [repuestos, setRepuestos] = useState([]);
  const [maquina, setMaquina] = useState("");
  const [anexos, setAnexos] = useState([]);
  const [comentario, setComentario] = useState("");
  const [nitTiket,setNitTiket] = useState("")
  const [estado, setEstado] = useState("");
  const [actMaquina, setActMaquina] = useState(false);
  const [contaBN,setContaBn] = useState("");
  const [contaColor,setContaColor] = useState("");

  const classes = useStyles();

  const avanzar = () => {
    if (paso < 6) {
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
          <PasoUnoDiagnostico
            avanzar={avanzar}
            cerrarDiagnostico={cerrarDiagnostico}
            diagnostico={diagnostico}
            setDiagnostico={setDiagnostico}
            diag={tiketDiag}
          />
        );
      case 1:
        return (
          <PasoDosSolucion
            avanzar={avanzar}
            retroceder={retroceder}
            solucion={solucion}
            setSolucion={setSolucion}
          />
        );
      case 2:
        return (
          <PasoTresRepuestos
            avanzar={avanzar}
            retroceder={retroceder}
            solucion={solucion}
            setSolucion={setSolucion}
            repuestos={repuestos}
            setRepuestos={setRepuestos}
          />
        );
      case 3:
        return (
          <PasoCuatroMaquina
            avanzar={avanzar}
            retroceder={retroceder}
            idMaquina={tiketDiag.idMaquina}
            maquina={maquina}
            setMaquina={setMaquina}
            setActMaquina={setActMaquina}
            setContaBn={setContaBn}
            setContaColor={setContaColor}
          />
        );
      case 4:
        return (
          <PasoCincoAnexos
            avanzar={avanzar}
            retroceder={retroceder}
            solucion={solucion}
            setSolucion={setSolucion}
            anexos={anexos}
            setAnexos={setAnexos}
            comentario={comentario}
            setComentario={setComentario}
            repuestos={repuestos}
            tiketDiag={tiketDiag}
          />
        );

      case 5:
        return (
          <PasoSeisEstado
            avanzar={avanzar}
            retroceder={retroceder}
            solucion={solucion}
            setSolucion={setSolucion}
            anexos={anexos}
            comentario={comentario}
            repuestos={repuestos}
            tiketDiag={tiketDiag}
            setEstado={setEstado}
            setNitTiket={setNitTiket}
          />
        );
      case 6:
        return (
          <PasoSieteFinalizar
            avanzar={avanzar}
            retroceder={retroceder}
            solucion={solucion}
            setSolucion={setSolucion}
            anexos={anexos}
            comentario={comentario}
            repuestos={repuestos}
            tiketDiag={tiketDiag}
            setEstado={setEstado}
            diagnostico={diagnostico}
            estado={estado}
            nitTiket={nitTiket}
            contaBN={contaBN}
            contaColor={contaColor}
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
        setTitulo("Diagnostico");
        break;
      case 1:
        setTitulo("Solucion");
        break;
      case 2:
        setTitulo("Repuestos");
        break;
      case 3:
        setTitulo("Actualizar Contadores");
        break;
      case 4:
        setTitulo("Anexos y Comentario");
        break;
      case 5:
        setTitulo("Estado");
        break;
      case 6:
        setTitulo("Subir Reporte");
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

export default PasosDiagnostico;
