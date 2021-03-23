import { Box, Grid, Typography } from "@material-ui/core";
import { React } from "react";
import IconCalendar from "../Iconos/iccalendar";
import IconSolicitante from "../Iconos/icsolicitante";
import IconTipo from "../Iconos/ictipo";
import IconEstado from "../Iconos/icestado";
import CircleIcon from "../Iconos/iconocirculo";


const TiketsGlobal = (props) => {
    const {tik} = props;
  return (
    <div>
      <Box
        // className={classes.rowTable}
        backgroundColor="#ffffff"
        marginTop={2}
        borderRadius={2}
        border={1}
        height={75}
        boxShadow={4}

      >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          paddingTop={2}
          paddingRight={2}
        >
          {/***Tab Numero****/}
          <CircleIcon />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 16,
              marginLeft: 1,
              width: 100,
              color: "#3D3D3D",
            }}
          >
            {tik.id}
          </Typography>

          {/***Tab fecha****/}
          <IconCalendar />

          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginLeft: 3 }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 600,
                color: "#EC1B3B",
                fontStyle: "italic",
                marginTop: 0,
                width: 100,
              }}
            >
              Fecha de Creacion
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                width: 150,
                fontWeight: 700,
                color: "#3D3D3D",
                marginTop: -0.5,
              }}
            >
            {tik.fechaCreacion}
            </Typography>
          </Grid>

          {/****tAB Aolicitante */}
          <IconSolicitante />

          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginLeft: 3 }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 600,
                color: "#EC1B3B",
                fontStyle: "italic",
                marginTop: 0,
                width: 100,
              }}
            >
              Solicitante
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                width: 250,
                fontWeight: 700,
                color: "#3D3D3D",
                marginTop: -0.5,
              }}
            >
              {tik.nombre}
            </Typography>
          </Grid>

          {/****Tab Tipo****/}
          <IconTipo />

          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginLeft: 3 }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 600,
                color: "#EC1B3B",
                fontStyle: "italic",
                marginTop: -0.2,
                width: 100,
              }}
            >
              Tipo
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                width: 150,
                fontWeight: 700,
                color: "#3D3D3D",
                marginTop: -0.5,
              }}
            >
              {tik.tipo}
            </Typography>
          </Grid>

          {/****Tab Ciudad****/}
          <IconTipo />

          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginLeft: 3 }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 600,
                color: "#EC1B3B",
                fontStyle: "italic",
                marginTop: -0.2,
                width: 100,
              }}
            >
              Ciudad
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                width: 150,
                fontWeight: 700,
                color: "#3D3D3D",
                marginTop: -0.5,
              }}
            >
              {tik.ciudad}
            </Typography>
          </Grid>

          {/****Tab Tecnico asignado****/}
          <IconTipo />

          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginLeft: 3 }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 600,
                color: "#EC1B3B",
                fontStyle: "italic",
                marginTop: -0.2,
                width: 100,
              }}
            >
              Tecnico Asignado
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                width: 150,
                fontWeight: 700,
                color: "#3D3D3D",
                marginTop: -0.5,
              }}
            >
              {tik.asignado}
            </Typography>
          </Grid>

          {/****Tab Estado****/}
          <IconEstado />

          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginLeft: 3 }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 400,
                color: "#212121",
                fontStyle: "italic",
                marginTop: 0,
                width: 100,
                textAlign: "end",
              }}
            >
              Estado
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                width: 100,
                fontWeight: 700,
                color: "#3D3D3D",
                marginTop: -0.5,
                textAlign: "end",
              }}
            >
              {tik.estado}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TiketsGlobal;
