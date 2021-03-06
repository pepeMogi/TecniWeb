import { React, useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Dialog } from "@material-ui/core";
import TemaDialog from "../Temas/TemaDialog";
import { ThemeProvider } from "@material-ui/core/styles";
import fire from "./../fire";
import PasosDiagnostico from "./DiagnosticarTiket/PasosDiagnostico";

// IMPORTAMOS COMPONENTES
import Iconopersona from "../Iconos/iconopersona";
import Iconoubicacion from "../Iconos/iconoubicacion";
import Iconocirculo from "../Iconos/iconocirculo";
import Iconomaquina from "../Iconos/iconomaquina";
import Iconofalla from "../Iconos/iconofalla";
import Iconoarchivo from "../Iconos/iconoarchivo";
import Iconodiagnostico from "../Iconos/iconodiagnostico";
import Iconotecnico from "../Iconos/iconotecnico";
import Iconobodega from "../Iconos/iconobodega";
import Iconoinformacion from "../Iconos/iconoinformacion";
import Icononivel from "../Iconos/icononivel";
import Iconorellamada from "../Iconos/iconorellamada";
import Iconourgente from "../Iconos/iconourgente";
import Iconomedia from "../Iconos/iconomedia";
import Iconobaja from "../Iconos/iconobaja";
import { tiket } from "./../Entidades/tikets";
import TiketCardGrande from "../Componentes/TiketCardGrande";

const TikestPropios = (props) => {
  const { admin } = props;
  const [tikets, setTikets] = useState([]);
  const [openDiagnostico, setOpenDiagnostico] = useState(false);
  const [tiketDiag, setTiketDiag] = useState("");
  const [num, setNum] = useState("");

  const manejoDiagnostico = (tik) => {
    setTiketDiag(tik);
    setOpenDiagnostico(true);
  };

  const Tikets = (props) => {
    const { tik } = props;

    return (
      <div>
        <Box
          sx={{
            width: 360,
            borderRadius: 2,
            boxShadow: 4,
            marginTop: 2,
            marginLeft: 2,
            padding: 2,
            bgcolor: "rgb(200,200,200)",
          }}
        >
          {/* GRID CONTENEDOR DE LA CARD */}
          <Grid container>
            {/*8 FILAS CADA UNA CON  DIVICION DE 2 COLUMNAS PARA POSICIONAR TITULOS Y VARIABLES  */}

            {/* FILA 1 CODIGO  Y PRIORIDAD*/}
            <Grid item xs={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "14px",
                    color: "red",
                  }}
                >
                  {tik.id}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    margin: "0px",
                    fontSize: "16px",
                    color: "red",
                  }}
                >
                  Prioridad
                </Typography>
              </Box>
            </Grid>

            {/* FILA 2 MANTENIMIENTO  Y CIRCULO DE COLOR*/}
            <Grid item xs={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "14px",
                    color: "red",
                  }}
                >
                  Mantenimiento
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {tik.nombre == "Luis Rosero1" ? (
                  <Iconorellamada></Iconorellamada>
                ) : tik.nombre == "Luis Rosero" ? (
                  <Iconourgente></Iconourgente>
                ) : tik.nombre == "Luis Rosero2" ? (
                  <Iconomedia></Iconomedia>
                ) : (
                  <Iconobaja></Iconobaja>
                )}
              </Box>
            </Grid>

            {/*FILA 3 CLIENTE  */}
            <Grid item xs={5}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconopersona
                  sx={{
                    display: "inline",
                    margin: "0px",
                  }}
                ></Iconopersona>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Cliente:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    margin: "0px",
                    paddingTop: "1px",
                    fontSize: "16px",
                  }}
                >
                  {tik.nombre}
                </Typography>
              </Box>
            </Grid>

            {/* FILA 4 SOLICITANTE */}
            <Grid item xs={5}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconopersona
                  sx={{
                    display: "inline",
                    margin: "0px",
                  }}
                ></Iconopersona>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Solicitante:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  no hay nada
                </Typography>
              </Box>
            </Grid>

            {/* FILA 5 MAQUINA */}
            <Grid item xs={5}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconomaquina
                  sx={{
                    display: "inline",
                    margin: "0px",
                  }}
                ></Iconomaquina>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Maquina:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // overflow: 'auto'  //  Posible scroll si el nombre es muy largo
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  {tik.idMaquina}
                </Typography>
              </Box>
            </Grid>

            {/* FILA 6 FALLA */}
            <Grid item xs={5}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconofalla
                  sx={{
                    display: "inline",
                    margin: "0px",
                  }}
                ></Iconofalla>

                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Falla:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  {tik.falla}
                </Typography>
              </Box>
            </Grid>

            {/* FILA 7 ARCHIVOS  */}
            <Grid item xs={5}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconoarchivo
                  sx={{
                    display: "inline",
                    margin: "0px",
                  }}
                ></Iconoarchivo>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Archivos:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  no hay nada
                </Typography>
              </Box>
            </Grid>

            {/* FILA 8 DIAGNOSTICO */}
            <Grid item xs={7}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconodiagnostico
                  sx={{
                    display: "inline",
                    margin: "0px",
                  }}
                ></Iconodiagnostico>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    display: "inline",
                    margin: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Diagnosticos:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    margin: "0px",
                    fontSize: "17px",
                  }}
                >
                  no hay
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  // alignItems: 'center',
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => manejoDiagnostico(tik)}
                >
                  Diagnosticar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  };

  useEffect(() => {
    
    fire
      .firestore()
      .collection("tikets")
      .where("asignado", "==", admin.alias ? admin.alias : "")
      .where("estado", "==","asignado")
      .onSnapshot((snap) => {
        var array = [];
        setTikets(array);
        snap.forEach((doc) => {
          var tike = new tiket(doc);

          setTikets((array) => array.concat(tike));
          array.push(tike);
        });
        setNum(array.length);
        console.log("numero=>" + num);
      });
  }, [admin]);

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {/* FILA ROJA TAMA??O 9 */}

        <Box
          sx={{
            bgcolor: "#EC1B3B",
            borderRadius: 2,
            padding: 1,
            boxShadow: 5,
          }}
        >
          {/* COLUMNAS DENTRO DE LA FILA PARA POSICIONAR LOS ICONOS Y TEXTOS */}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            sx={{ paddingLeft: 1 }}
          >
            <Iconotecnico />

            <Typography
              sx={{
                color: "white",
                marginLeft: 1,
                fontSize: 14,
                marginRight: 3,
              }}
            >
              {admin.nombre}
            </Typography>

            <Iconoinformacion />
            <Typography
              sx={{
                color: "white",
                marginLeft: 1,
                fontSize: 14,
                marginRight: 1,
              }}
            >
              {"(" + num + ") " + "por diligenciar"}
            </Typography>

            <Typography
              sx={{
                marginLeft: 2,
                marginRight: 2,
                fontSize: 14,
                color: "white",
              }}
            >
              {"Bodega # " + admin.bodega}
            </Typography>
          </Grid>
        </Box>

        {/* FILA BLANCA PRIORIDADES */}

        <Box
          sx={{
            bgcolor: "#ffffff",
            p: 1,
            borderRadius: 2,
            boxShadow: 3,
            marginTop: 2,
          }}
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            {/* COLUMNAS DENTRO DE LA FILA BLANCA PARA POSICIONAR LOS NIVELES */}

            <Typography
              sx={{
                marginLeft: 1,
                fontSize: 13,
                fontStyle: "italic",
                fontWeight: 600,
                color: "#989696"
              }}
            >
              Nivel Prioridad
            </Typography>

            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: 2,
                marginLeft: 3,
                marginRight: 1,
              }}
              backgroundColor="#FF0034"
            />
            <Typography
              sx={{
                fontSize: 14,
              }}
            >
              Rellamada
            </Typography>

            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: 2,
                marginLeft: 1,
                marginRight: 1,
              }}
              backgroundColor="#FE9916"
            />

            <Typography
              sx={{
                fontSize: 14,
              }}
            >
              Alta
            </Typography>

            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: 2,
                marginLeft: 1,
                marginRight: 1,
              }}
              backgroundColor="#F6D119"
            />

            <Typography
              sx={{
                fontSize: 14,
              }}
            >
              Media
            </Typography>

            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: 2,
                marginLeft: 1,
                marginRight: 1,
              }}
              backgroundColor="#0F996D"
            />

            <Typography
              sx={{
                fontSize: 14,
              }}
            >
              Baja
            </Typography>
          </Grid>
        </Box>

        {/* GRID CONTENEDOR DE LAS CARDS GENERADAS POR LA FUNCION  const Tikets*/}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          pt={4}
        >
          {tikets.map((tik) => {
            return <TiketCardGrande tiket={tik} />;
          })}
        </Grid>
      </Grid>

      {/****Detalle Tikets****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog open={openDiagnostico}>
          <PasosDiagnostico tiketDiag={tiketDiag} />
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TikestPropios;
