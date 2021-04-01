import { Box, Grid, Avatar, Typography, Divider } from "@material-ui/core";
import { React } from "react";
import IconoBodega from "../IconosTecnico/IconoBodega";
import IconoCc from "../IconosTecnico/IconoCc";
import IconoCelular from "../IconosTecnico/IconoCelular";
import IconoEdt from "../IconosTecnico/IconoEdt";
import IconoEmail from "../IconosTecnico/IconoEmail";
import IconoRh from "./../IconosTecnico/IconoRh";

const TecnicoDetalle = (props) => {
  const { tecnico, cerrarDetalle } = props;
  return (
    <Box
      sx={{
        width: 390,
        borderRadius: 3,
        boxShadow: 5,
        backgroundColor: "#ffffff",
        padding: 1,
        paddingBottom: 2,
      }}
      key={tecnico.id}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/****Info Perfil****/}
        <Grid item xs={11}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar
              sx={{
                height: 120,
                width: 120,
                marginTop: 1,
                marginLeft: 1,
                boxShadow: 4,
              }}
              src={tecnico.img}
            />
            <div>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography
                  sx={{
                    marginTop: 2,
                    marginLeft: 2,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#EC1B3B",
                    width: 120,
                    height: 24,
                    overflow: "hidden",
                  }}
                >
                  {tecnico.alias}
                </Typography>
                <Divider
                  sx={{ borderColor: "#EC1B3B", width: 170, marginLeft: 2 }}
                />
                <div>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      sx={{
                        fontStyle: "italic",
                        marginLeft: 2,
                        marginTop: 0.5,
                        marginRight: 2,
                        fontSize: 10,
                        fontWeight: 500,
                        color: "#EC1B3B",

                        /// aqui
                      }}
                    >
                      {tecnico.tipo}
                    </Typography>

                    <IconoBodega />

                    <Typography
                      sx={{
                        fontStyle: "italic",
                        marginLeft: 1,
                        marginTop: 0.5,
                        fontSize: 10,
                        fontWeight: 500,
                        color: "#EC1B3B",
                      }}
                    >
                      Bodega # {tecnico.bodega}
                    </Typography>
                  </Grid>
                </div>
              </Grid>
            </div>
          </Grid>
        </Grid>

        {/****Icono Edt****/}
        <Grid item xs={1} sx={{ marginLeft: 0 }}>
          <div onClick={cerrarDetalle}>
            <Avatar
              sx={{
                marginTop: 0.5,
                backgroundColor: "#ffffff",
                boxShadow: 4,
                width: 30,
                height: 30,
              }}
            >
              <IconoEdt />
            </Avatar>
          </div>
        </Grid>

        {/****cc rh****/}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ marginTop: 2 }}
        >
          {/****Nombre****/}
          <Box
            sx={{
              height: 34,
              boxShadow: 5,
              borderRadius: 1,
              marginLeft: 1,
              padding: 0.7,
              marginTop: 1.5,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  marginLeft: 0.5,
                  fontSize: 13,
                  fontWeight: 600,
                  marginRight: 1,
                }}
              >
                {tecnico.nombre}
              </Typography>
              <IconoCc />
            </Grid>
          </Box>

          <Box
            sx={{
              width: 160,
              height: 34,
              boxShadow: 5,
              borderRadius: 1,
              marginLeft: 1,
              padding: 0.7,
              marginTop: 1.5,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{ marginLeft: 0.5, fontSize: 13, fontWeight: 600 }}
              >
                CC: {tecnico.cc}
              </Typography>
              <IconoCc />
            </Grid>
          </Box>

          <Box
            sx={{
              width: 90,
              height: 34,
              boxShadow: 5,
              borderRadius: 1,
              marginLeft: 1,
              padding: 0.7,
              marginTop: 1.5,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ marginTop: 0.1 }}
            >
              <Typography
                sx={{ marginLeft: 0.5, fontSize: 13, fontWeight: 600 }}
              >
                Rh: {tecnico.rh}
              </Typography>
              <IconoRh />
            </Grid>
          </Box>
        </Grid>

        {/****Email celular****/}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            sx={{
              height: 34,
              boxShadow: 5,
              borderRadius: 1,
              marginLeft: 1,
              padding: 0.7,
              marginTop: 1.5,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  marginLeft: 0.5,
                  fontSize: 13,
                  fontWeight: 500,
                  overflow: "hidden",
                  marginRight: 1,
                  marginBottom: 1.5,
                }}
              >
                {tecnico.email}
              </Typography>
              <IconoEmail />
            </Grid>
          </Box>

          <Box
            sx={{
              height: 34,
              boxShadow: 5,
              borderRadius: 1,
              marginLeft: 1,
              padding: 0.7,
              marginTop: 1.5,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ marginTop: 0.1 }}
            >
              <Typography
                sx={{
                  marginLeft: 0.5,
                  fontSize: 13,
                  fontWeight: 500,
                  marginRight: 1,
                  marginTop: -0.7,
                }}
              >
                Celular: {tecnico.celular}
              </Typography>
              <IconoCelular />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TecnicoDetalle;
