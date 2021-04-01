import { React, useState, useEffect } from "react";
import IconCelular from "../IconosTiket/iconCelular";
import IconDireccion from "../IconosTiket/iconDireccion";
import IconGrande from "../../Iconos/ictecnigrandetiket";
import IconCalendario from "./../IconosTiket/iconCalendario";
import IconCiudad from "../IconosTiket/iconCiudad";
import fire from "../../fire";
import IconTipo from "../IconosTiket/iconTipo";
import IconSolicitante from "../IconosTiket/iconSolicitante";
import { Typography, Grid, Box, Divider } from "@material-ui/core";
import Iconofalla from "../IconosTiket/IcFalla";
import IconMaquina from "../IconosTiket/iconMaquina";
import IconTecnico from "../IconosTiket/iconTecnico";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: 150,
    borderRadius: 10,
  },
}));

const TiketDetalleNoEdit = (props) => {
  const { tiketDetalle } = props;
  const [diagnosticos, setDiagnosticos] = useState([]);

  console.log(tiketDetalle.anexos);

  var factList = "";
  tiketDetalle.facturas.forEach((fac) => {
    factList = factList + " - " + fac;
  });

  var tecAsign = "";
  if (tiketDetalle.asignado == "") {
    tecAsign = " Sin Tecnico Asignado";
  }

  var nom = tiketDetalle.nombre;
  if (tiketDetalle.solicitante != "") {
    nom = nom + " /" + tiketDetalle.solicitante;
  }

  const llenarDiagnostico = () => {
    return diagnosticos.map((diag) => {
      return (
        <div>
          {/****Tecnico asignado****/}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={2}
          >
            <IconDireccion />

            <Typography
              sx={{
                fontSize: 12,
                width: 300,
                fontWeight: 600,
                color: "#EC1B3B",
                marginLeft: 1,
              }}
            >
              Visita de Tecnico: {diag.tecnico}
            </Typography>
          </Grid>

          <Typography
            sx={{
              fontSize: 12,
              width: 100,
              fontWeight: 400,
              color: "#EC1B3B",
              marginLeft: 4.2,
              marginTop: -0.5,
            }}
          >
            {diag.fecha}
          </Typography>

          {/****Diagnostico****/}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={1}
            marginLeft={5}
          >
            <IconDireccion />

            <Typography
              sx={{
                fontSize: 12,
                width: 100,
                fontWeight: 600,
                color: "#EC1B3B",
                marginLeft: 1,
              }}
            >
              Diagnostico
            </Typography>
          </Grid>

          <Typography
            sx={{
              fontSize: 12,
              width: 400,
              textAlign: "justify",
              fontWeight: 500,
              color: "#3D3D3D",
              marginLeft: 9.2,
              marginTop: -0.5,
            }}
          >
            {diag.diagnostico}
          </Typography>

          {/****Repuestos****/}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={1}
            marginLeft={5}
          >
            <IconDireccion />

            <Typography
              sx={{
                fontSize: 12,
                width: 100,
                fontWeight: 600,
                color: "#EC1B3B",
                marginLeft: 1,
              }}
            >
              Repuestos
            </Typography>
          </Grid>
          {diag.repuestos.map((repuesto) => {
            return (
              <Typography
                sx={{
                  fontSize: 12,
                  width: 400,
                  textAlign: "justify",
                  fontWeight: 500,
                  color: "#3D3D3D",
                  marginLeft: 9.2,
                  marginTop: -0.5,
                }}
              >
                {repuesto}
              </Typography>
            );
          })}
        </div>
      );
    });
  };

  const llenarAnexos = () => {
    if (tiketDetalle.anexos != null) {
      return tiketDetalle.anexos.map((item) => {
        return (
          <Box sx={{ minWidth: 70, borderRadius: 2, margin: 1 }}>
            <img src={item} className={classes.img} />
          </Box>
        );
      });
    }
  };

  const classes = useStyles();

  useEffect(() => {
    var array = [];
    var buscar = "none";
    if (tiketDetalle) {
      buscar = tiketDetalle.id;
    }

    fire
      .firestore()
      .collection("diagnostico")
      .where("tiket", "==", buscar)
      .get()
      .then((snap) => {
        snap.forEach((diag) => {
          const months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
          ];
          let current_datetime = diag.data().fecha.toDate();
          let formatted_date =
            current_datetime.getDate() +
            "-" +
            months[current_datetime.getMonth()] +
            "-" +
            current_datetime.getFullYear();
          var diagnostico = {
            tecnico: diag.data().tecnico,
            diagnostico: diag.data().diagnostico,
            repuestos: diag.data().repuestos,
            fecha: formatted_date,
          };
          array.push(diagnostico);
        });

        setDiagnosticos(array);
      });
  }, [tiketDetalle]);

  return (
    <div>
      <Box maxWidth sx={{ marginBottom: 4 }} color="#fffff">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid xs={4}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <IconGrande />
            </Grid>
          </Grid>

          <Grid xs={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              padding={1.5}
              sx={{ marginTop: -10 }}
            ></Grid>
          </Grid>

          {/***Parte Hoja****/}

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            {/****Estado****/}
            <Box
              backgroundColor="#EC1B3B"
              borderRadius={0.3}
              paddingLeft={1}
              paddingRight={1}
              boxShadow={2}
              sx={{ marginLeft: 6, marginTop: 3 }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 0.7,
                  color: "#ffffff",
                  marginBottom: 0.6,
                }}
              >
                Estado: {tiketDetalle.estado}
              </Typography>
            </Box>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            marginTop={2}
          >
            {/****tipo, fecha, solicitante****/}

            <Box
              maxWidth
              sx={{
                marginTop: 2,
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                {/***tipo***/}

                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconTipo />
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 400,
                        minWidth: 120,
                        maxWidth: 120,
                        color: "#EC1B3B",
                        marginTop: -0.5,
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.tipo}
                    </Typography>
                  </Grid>
                </Grid>

                {/***Tab fecha****/}
                <Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconCalendario />

                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 400,
                        minWidth: 120,
                        maxWidth: 120,
                        color: "#EC1B3B",
                        marginTop: -0.5,
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.fechaCreacion}
                    </Typography>
                  </Grid>
                </Grid>

                {/****solicitante */}
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconSolicitante />
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 400,
                        minWidth: 120,
                        maxWidth: 120,
                        color: "#EC1B3B",
                        marginTop: -0.5,
                        marginLeft: 1,
                      }}
                    >
                      {nom}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider
                sx={{
                  border: 0.1,
                  color: "#EC1B3B",
                  marginTop: 1,
                }}
              />
            </Box>

            {/****Maquina, Ciudad, Celular****/}
            <Box
              maxWidth
              sx={{
                marginTop: 2,
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                {/***direccion***/}

                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconDireccion />
                    <Typography
                      sx={{
                        fontSize: 10,
                        minWidth: 120,
                        maxWidth: 120,
                        fontWeight: 400,
                        color: "#727070",
                        fontStyle: "italic",
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.direccion}
                    </Typography>
                  </Grid>
                </Grid>

                {/***ciudad****/}
                <Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconCiudad />

                    <Typography
                      sx={{
                        fontSize: 10,
                        minWidth: 120,
                        maxWidth: 120,
                        fontWeight: 400,
                        color: "#727070",
                        fontStyle: "italic",
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.ciudad}
                    </Typography>
                  </Grid>
                </Grid>

                {/****celulares***/}
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconCelular />
                    <Typography
                      sx={{
                        fontSize: 10,
                        minWidth: 120,
                        maxWidth: 120,
                        fontWeight: 400,
                        color: "#727070",
                        fontStyle: "italic",
                        marginLeft: 1,
                      }}
                    >
                      {tiketDetalle.celularCliente} -{" "}
                      {tiketDetalle.celularSolicitante}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              marginTop={3}
              sx={{ marginTop: 4, paddingLeft: 2.2 }}
            >
              {/****Maquina****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconMaquina />

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#3D3D3D",
                    marginLeft: 2,
                  }}
                >
                  {tiketDetalle.idMaquina}
                </Typography>
              </Grid>

              {/****Detalle de Fallo****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <Iconofalla />

                <Typography
                  sx={{
                    fontSize: 12,
                    marginLeft: 3,
                    color: "#3D3D3D",
                  }}
                >
                  {tiketDetalle.falla}
                </Typography>
              </Grid>

              {/****Anexos****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    width: 200,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    // marginLeft: 2.4,
                  }}
                >
                  Anexos
                </Typography>
              </Grid>

              {/****Anexos****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                {llenarAnexos()}
              </Grid>

              {/****Detalle de Tecnico****/}
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={2}
              >
                <IconTecnico />

                <Typography
                  sx={{
                    fontSize: 12,
                    marginLeft: 2,
                    color: "#3D3D3D",
                  }}
                >
                  {"Tecnico Asignado:  " + tecAsign}
                </Typography>
              </Grid>

              {tiketDetalle ? llenarDiagnostico() : <div></div>}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TiketDetalleNoEdit;
