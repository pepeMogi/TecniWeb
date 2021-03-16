import { React, useState, useEffect } from "react";
import { Avatar, Box, Skeleton, Grid, Typography } from "@material-ui/core";
import fire from "../fire";

class Tiketes {
  constructor(
    id,
    prioridad,
    tipo,
    nombre,
    direccion,
    ciudad,
    maquinas,
    falla,
    fecha
  ) {
    this.id = id;
    this.prioridad = prioridad;
    this.tipo = tipo;
    this.nombre = nombre;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.maquinas = maquinas;
    this.falla = falla;
    this.fecha = fecha;
  }
}

const ListaTik = (props) => {
  const { tecnico } = props;
  const [open, setOpen] = useState("");
  const [tikets, setTikets] = useState([]);

  const llenarTikets = () => {
    return tikets.map((tik) => {
      return (
        <div key={tik.id}>
          {/****Tiket****/}
          <Box
            width={242}
            boxShadow={5}
            borderRadius={2}
            padding={1}
            sx={{ backgroundColor: "#ffffff", marginTop: 1 }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box
                  boxShadow={2}
                  sx={{ backgroundColor: "#EC1B3B" }}
                  borderRadius={1}
                  paddingLeft={1}
                  paddingRight={1}
                >
                  <Typography sx={{ color: "#ffffff", fontSize: 13 }}>
                    {tik.numero}
                  </Typography>
                </Box>

                <Typography
                  sx={{ color: "#EC1B3B", fontSize: 12, marginLeft: 2 }}
                >
                  {tik.fechaCita}
                </Typography>
              </Grid>

              <Box
                boxShadow={2}
                sx={{ backgroundColor: "#3D3D3D", marginTop: 0.5 }}
                borderRadius={1}
                paddingLeft={1}
                paddingRight={1}
                paddingBottom={0.2}
              >
                <Typography
                  sx={{ color: "#ffffff", fontSize: 12, alignSelf: "center" }}
                >
                  {tik.prioridad + " - " + tik.tipo}
                </Typography>
              </Box>

              {/****Caja de Contenido Tiket****/}
              <Box
                boxShadow={5}
                width={226}
                borderRadius={1}
                sx={{ marginTop: 1 }}
                padding={1}
                button
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography
                      sx={{ color: "#727070", fontSize: 12, fontWeight: 600 }}
                    >
                      Solicitado por:
                    </Typography>
                    <Typography
                      sx={{
                        color: "#EC1B3B",
                        fontSize: 12,
                        fontWeight: 600,
                        minWidth: 122,
                        maxWidth: 130,
                        marginLeft: 1,
                      }}
                    >
                      {tik.nombre}
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography
                      sx={{ color: "#727070", fontSize: 12, fontWeight: 600 }}
                    >
                      Dirección:
                    </Typography>
                    <Typography
                      sx={{
                        color: "#EC1B3B",
                        fontSize: 12,
                        fontWeight: 500,
                        marginLeft: 1,
                      }}
                    >
                      {tik.direccion}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#EC1B3B",
                        fontSize: 12,
                        fontWeight: 500,
                        marginLeft: 1,
                      }}
                    >
                      {tik.ciudad}
                    </Typography>
                  </Grid>

                  <Typography
                    sx={{ color: "#727070", fontSize: 12, fontWeight: 600 }}
                  >
                    Maquinas
                  </Typography>

                  {/***llenar dinamicamente */}
                  {tik.maquinas.map((maquina) => {
                    return (
                      <Typography
                        sx={{
                          color: "#EC1B3B",
                          fontSize: 12,
                          fontWeight: 500,
                          marginLeft: 2,
                        }}
                      >
                        {maquina}
                      </Typography>
                    );
                  })}
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ marginTop: 1 }}
                >
                  <Typography
                    sx={{
                      color: "#727070",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    Fallo Reportado:
                  </Typography>

                  <Typography
                    sx={{
                      color: "#3D3D3D",
                      fontSize: 12,
                      fontWeight: 400,
                      textAlign: "justify",
                      lines: 3,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap", // para que aparescan los ... puntos
                    }}
                  >
                    {tik.falla}
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </div>
      );
    });
  };

  const llenarEsqueleto = () => {
    var array = new Array();
    array.push(0);
    array.push(1);
    array.push(2);
    array.push(3);

    return array.map(() => {
      return (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ marginLeft: 0 }}
        >
          {/****Tiket****/}
          <Box
            width={242}
            boxShadow={5}
            borderRadius={2}
            padding={1}
            sx={{ backgroundColor: "#ffffff", marginTop: 1 }}
          >
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={80} />

            <Skeleton variant="rectangular" width={226} height={140} />
          </Box>

          {/****Tiket****/}
          <Box
            width={242}
            boxShadow={5}
            borderRadius={2}
            padding={1}
            sx={{ backgroundColor: "#ffffff", marginTop: 1 }}
          >
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={80} />

            <Skeleton variant="rectangular" width={226} height={140} />
          </Box>

          {/****Tiket****/}
          <Box
            width={242}
            boxShadow={5}
            borderRadius={2}
            padding={1}
            sx={{ backgroundColor: "#ffffff", marginTop: 1 }}
          >
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={80} />

            <Skeleton variant="rectangular" width={226} height={140} />
          </Box>

          {/****Tiket****/}
          <Box
            width={242}
            boxShadow={5}
            borderRadius={2}
            padding={1}
            sx={{ backgroundColor: "#ffffff", marginTop: 1 }}
          >
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={80} />

            <Skeleton variant="rectangular" width={226} height={140} />
          </Box>
        </Grid>
      );
    });
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("tikets")
      .where("asignado", "==", tecnico)
      .onSnapshot(function (querySnapshot) {
        var nada = [];
        setTikets(nada);
        querySnapshot.forEach(function (tik) {
          var este = new Tiketes(
            tik.data().id,
            tik.data().prioridad,
            tik.data().tipo,
            tik.data().nombre,
            tik.data().direccion,
            tik.data().ciudad,
            tik.data().maquinas,
            tik.data().falla,
            tik.data().fecha
          );

          setTikets((tikets) => tikets.concat(este));
        });

        setOpen(true);
      });
  }, []);

  return <div>{open ? llenarTikets() : llenarEsqueleto()}</div>;
};

export default ListaTik;
