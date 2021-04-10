import { Box, Grid, Typography } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import IconoCirculo from "./IconosImprimible/IconoCirculo";
import IconoCompleto from "./IconosImprimible/IconoCompleto";
import IconoCirculoTrans from "./IconosImprimible/IconoCirculoTrans";
import RectGris from "./IconosImprimible/RectGris";
import RectGrisClaro from "./IconosImprimible/RectGrisClaro";
import Rectangulo from "./IconosImprimible/Rectangulo";
import RectRedondo from "./IconosImprimible/RectRedondo";
import RectRedondoPeq from "./IconosImprimible/RectRedondoPeq";
import RenglonImprimir from "./RenglonImprimir";
import Encabezado from "./Encabezado";
import RowTabla from "./RowTabla";
import TotalTabla from "./TotalTabla";

import RenglonImprimirCompleto from "./RenglonImprimirCompleto";
import IconoEmail from "./IconosImprimible/IconoEmail";
import IconoTelefono from "./IconosImprimible/IconoTelefono";
import fire from "../fire";
import { diagnostico } from "../Entidades/diagnostico";
import ImprimirAnexos from "./ImprimirAnexos";

const Imprimible = (props) => {
  const { tiket, cerrarImprimir } = props;
  const [repFacturados, setRepFacturados] = useState([]);
  const [repCotizados, setRepCotizados] = useState([]);
  const [repGarantia, setRepGarantia] = useState([]);
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [ocultar,setOcultar] = useState(false);

  var fac = "";
  if (tiket.facturas != null && tiket.facturas.length > 0) {
    for (var i = 0; i < tiket.facturas.length; i++) {
      if (i == tiket.facturas.length - 1) {
        fac += tiket.facturas[i];
      } else {
        fac += tiket.facturas[i] + " - ";
      }
    }
  }

  const imprimir = () =>{
    setOcultar(true);
    window.print();
    setTimeout(function() {
      //your code to be executed after 1 second
      setOcultar(false); 
    }, 2000);
   
  }

  const llenarDiagnostico = () => {
    console.log("llenar diagnosticos");
    return diagnosticos.map((diag) => {
      return (
        <div>
          <RenglonImprimir
            titulo={"Diagnostico:"}
            contenido={diag.diagnostico}
            tecnico={diag.tecnico}
          />
          <RenglonImprimir
            titulo={"Solucion: "}
            contenido={diag.solucion}
            tecnico={diag.tecnico}
          />
        </div>
      );
    });
  };

  const llenarObservaciones = () => {
    return diagnosticos.map((diag) => {
      return (
        <RenglonImprimirCompleto
          titulo={"Observaciones del Tecnico: "}
          contenido={diag.comentario}
          tecnico={diag.tecnico}
        />
      );
    });
  };

  const getValor = (array) => {
    var num = 0;
    for (var i = 0; i < array.length; i++) {
      num += array[i].valor;
    }

    return num;
  };

  const getColor = (quien) => {
    switch (quien) {
      case "fac":
        if (tiket.tipo == "Facturable") {
          return "#EC1B3B";
        } else {
          return "#C8C8C8";
        }

      case "ins":
        if (tiket.tipo == "Instalacion") {
          return "#EC1B3B";
        } else {
          return "#C8C8C8";
        }

      case "gar":
        if (tiket.tipo == "Garantia") {
          return "#EC1B3B";
        } else {
          return "#C8C8C8";
        }
    }
  };

  useEffect(() => {
    if (tiket.diagnosticos != null && tiket.diagnosticos.length > 0) {
      var fact = [];
      var coti = [];
      var gara = [];
      var diagnos = [];

      for (var i = 0; i < tiket.diagnosticos.length; i++) {
        fire
          .firestore()
          .collection("diagnosticos")
          .doc(tiket.diagnosticos[i])
          .get()
          .then((doc) => {
            var diag = new diagnostico(doc);
            console.log(diag);
            setDiagnosticos((diagnos) => diagnos.concat(diag));
            console.log(diagnosticos.length);
            if (diag.repuestos != null && diag.repuestos.length > 0) {
              for (var i = 0; i < diag.repuestos.length; i++) {
                console.log(diag.repuestos[i].tipo);
                var elemeneto = diag.repuestos[i];
                switch (elemeneto.tipo) {
                  case "facturable":
                    console.log("fact " + elemeneto.tipo);
                    setRepFacturados((fact) => fact.concat(elemeneto));
                    break;
                  case "cotizacion":
                    setRepCotizados((coti) => coti.concat(elemeneto));
                    break;
                  case "garantia":
                    setRepGarantia((gara) => gara.concat(elemeneto));
                    break;
                }
              }
            }
          });
      }
    }
  }, [tiket]);

  return (
    <Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        sx={{ padding: 4, minHeight: 1200 }}
      >
        <Box
        hidden={ocultar}
          sx={{
            backgroundColor: "#EC1B3B",
            borderRadius: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            paddingLeft: 1,
            paddingRight: 1,
            position: "absolute",
            marginTop: -3.3,
            marginRight: 80,
          }}
          onClick={() => imprimir()}
        >
          <Typography sx={{ color: "#ffffff", fontSize: 12, fontWeight: 500 }}>
            Imprimir
          </Typography>
        </Box>

        <Box
         hidden={ocultar}
          sx={{
            backgroundColor: "#EC1B3B",
            borderRadius: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            paddingLeft: 1,
            paddingRight: 1,
            position: "absolute",
            marginTop: -3.3,
            marginRight: 62,
          }}
          onClick={cerrarImprimir}
        >
          <Typography sx={{ color: "#ffffff", fontSize: 12, fontWeight: 500 }}>
            Cerrar
          </Typography>
        </Box>


        <Box sx={{ width: 700 }}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {/****Logo Completo****/}
            <Grid item xs={4} justify="center">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <IconoCompleto />
              </Grid>
            </Grid>

            {/****Servicios****/}
            <Grid item xs={4} justify="center">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="flex-start"
                justify="center"
                sx={{ marginLeft: 8 }}
              >
                {/***Muestra Servicio****/}
                <Grid item>
                  <Grid container direction="row">
                    <IconoCirculo />
                    <Typography sx={{ fontSize: 10, fontWeight: 500 }}>
                      Venta de fotocopiadoras
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row">
                    <IconoCirculo />
                    <Typography sx={{ fontSize: 10, fontWeight: 500 }}>
                      Impresoras láser e inyección
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row">
                    <IconoCirculo />
                    <Typography sx={{ fontSize: 10, fontWeight: 500 }}>
                      Sistema de tinta continuo
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row">
                    <IconoCirculo />
                    <Typography sx={{ fontSize: 10, fontWeight: 500 }}>
                      Suministros
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row">
                    <IconoCirculo />
                    <Typography sx={{ fontSize: 10, fontWeight: 500 }}>
                      Repuestos
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#EC1B3B",
                      }}
                    >
                      Nit: 37.080.373-9 Regimen simplificado
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/****Fecha y Numero****/}
            <Grid item xs={4}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                sx={{ marginLeft: 10, marginTop: 1 }}
              >
                <Rectangulo
                  text={"D - M - A "}
                  color="#EC1B3B"
                  largo={100}
                  alto={16}
                />
              </Grid>

              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
                sx={{ marginLeft: 10.2, marginTop: -0.4 }}
              >
                <Box
                  sx={{
                    borderColor: "#3D3D3D!important",
                    border: 1,
                    height: 15,
                    marginLeft: 0.5,
                    marginRight: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: -0.2,
                      fontWeight: 800,
                      fontSize: 12,
                      color: "#3D3D3D",
                      textAlign: "center",
                      paddingLeft: 2,
                      paddingRight: 2,
                    }}
                  >
                    {tiket.fechaCreacion}
                  </Typography>
                </Box>
              </Grid>

              <Box sx={{ marginTop: 1, marginLeft: 9.5 }}>
                <RectRedondo
                  text={tiket.id.toUpperCase()}
                  color="#C8C8C8"
                  largo={112}
                  alto={26}
                />
              </Box>
            </Grid>
          </Grid>

          {/***Datos Solicitante****/}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            sx={{ marginTop: 2 }}
          >
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 14,
                color: "#727070",
              }}
            >
              Razon Social :
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 14,
                color: "#3D3D3D",
                minWidth: 380,
                maxWidth: 380,
                marginLeft: 1,
              }}
            >
              {tiket.nombre}
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 14,
                color: "#727070",
              }}
            >
              C.C o Nit :
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 14,
                color: "#3D3D3D",
                marginLeft: 1,
              }}
            >
              {tiket.nit}
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            sx={{ marginTop: 0 }}
          >
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 14,
                color: "#727070",
              }}
            >
              Direccion :
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 14,
                color: "#3D3D3D",
                minWidth: 400,
                maxWidth: 400,
                marginLeft: 1,
              }}
            >
              {tiket.direccion}
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 14,
                color: "#727070",
              }}
            >
              Telefono :
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 14,
                color: "#3D3D3D",
                marginLeft: 1,
              }}
            >
              {tiket.celular}
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            sx={{ marginTop: 0 }}
          >
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 14,
                color: "#727070",
              }}
            >
              Email :
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 14,
                color: "#3D3D3D",
                minWidth: 300,
                maxWidth: 300,
                marginLeft: 1,
              }}
            >
              {tiket.email}
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 14,
                color: "#727070",
              }}
            >
              Solicitado por :
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 14,
                color: "#3D3D3D",
                marginLeft: 1,
              }}
            >
              {tiket.solicitante}
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            sx={{ marginTop: 4 }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 18,
                color: "#EC1B3B",
                marginRight: 4,
                marginTop: -0.7,
              }}
            >
              Reporte Tecnico
            </Typography>

            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 12,
                color: "#3D3D3D",
                marginLeft: 1,
                marginRight: 2,
              }}
            >
              Facturable
            </Typography>
            <IconoCirculoTrans color={getColor("fac")} />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 12,
                color: "#3D3D3D",
                marginLeft: 1,
                marginRight: 2,
              }}
            >
              Garantia
            </Typography>
            <IconoCirculoTrans color={getColor("gar")} />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 12,
                color: "#3D3D3D",
                marginLeft: 1,
                marginRight: 2,
              }}
            >
              Instalacion
            </Typography>
            <IconoCirculoTrans color={getColor("ins")} />

            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                sx={{ marginTop: -2.8, marginLeft: 1 }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 11,
                    color: "#EC1B3B",
                    marginLeft: 1,
                    marginRight: 0,
                    textAlign: "center",
                    minWidth: 170,
                    maxWidth: 170,
                    marginBottom: 0.5,
                  }}
                >
                  Factura N°
                </Typography>

                <RectRedondoPeq
                  text={fac}
                  color="#C8C8C8"
                  largo={170}
                  alto={20}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            sx={{ marginTop: 2 }}
          >
            <RectGris text={"Maquina"} ancho={420} />
            <Box sx={{ marginLeft: 1 }} />
            <RectGris text={"Cont. Bn"} ancho={120} />
            <Box sx={{ marginLeft: 1 }} />
            <RectGris text={"Cont. Color"} ancho={120} />
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            sx={{ marginTop: -0.8 }}
          >
            <RectGrisClaro
              text={tiket.idMaquina.replaceAll("_", " ")}
              ancho={420}
            />

            <Box sx={{ marginLeft: 1 }} />

            <RectGrisClaro text={tiket.contadorBN} ancho={120} />
            <Box sx={{ marginLeft: 1 }} />
            <RectGrisClaro text={tiket.contadorColor} ancho={120} />
          </Grid>
        </Grid>

        <Box
          sx={{
            border: 1,
            minWidth: 700,
            maxWidth: 700,
            marginTop: 2,
            padding: 0.5,
          }}
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: 12,
                fontStyle: "italic",
                fontWeight: 500,
                marginLeft: 1,
              }}
            >
              Falla reportada:
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontStyle: "italic",
                fontWeight: 400,
                marginLeft: 1,
              }}
            >
              {tiket.falla}
            </Typography>
          </Grid>
        </Box>

        {diagnosticos.length > 0 ? llenarDiagnostico() : ""}

        <Box sx={{ marginTop: 2 }} />

        {repFacturados.length > 0 ? <Encabezado titulo="Facturables" /> : ""}
        {repFacturados.length > 0
          ? repFacturados.map((rep) => {
              return <RowTabla repuesto={rep} />;
            })
          : ""}
        {repFacturados.length > 0 ? (
          <TotalTabla total={getValor(repFacturados)} />
        ) : (
          ""
        )}

        <Box sx={{ marginTop: 2 }} />

        {repCotizados.length > 0 ? <Encabezado titulo="Cotizacion" /> : ""}
        {repCotizados.length > 0
          ? repCotizados.map((rep) => {
              return <RowTabla repuesto={rep} />;
            })
          : ""}

        {repCotizados.length > 0 ? (
          <TotalTabla total={getValor(repCotizados)} />
        ) : (
          ""
        )}

        <Box sx={{ marginTop: 2 }} />

        {repGarantia.length > 0 ? <Encabezado titulo="Garantia" /> : ""}
        {repGarantia.length > 0
          ? repGarantia.map((rep) => {
              return <RowTabla repuesto={rep} />;
            })
          : ""}

        {repGarantia.length > 0 ? (
          <TotalTabla total={getValor(repGarantia)} />
        ) : (
          ""
        )}

        {diagnosticos.length > 0 ? llenarObservaciones() : ""}

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          sx={{ width: 700, marginTop: 4 }}
        >
          <Grid item xs={7}>
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                color: "#727070",
                fontSize: 12,
              }}
            >
              Sala de ventas : Calle 11 N° 5-24 Cels : 3122058310
            </Typography>

            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                color: "#727070",
                fontSize: 12,
              }}
            >
              Servicio Técnico : Cra 5 N° 11-02 Esquina
            </Typography>

            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                color: "#727070",
                fontSize: 12,
              }}
            >
              Reclamos y/o Sugerencias Cel : 3136514767 - 3122058310
            </Typography>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              sx={{ marginTop: 1 }}
            >
              <Grid item>
                <IconoEmail />
              </Grid>

              <Grid item sx={{ marginLeft: 1 }}>
                <Typography
                  sx={{ fontSize: 14, color: "#EC1B3B", fontWeight: 600 }}
                >
                  tecni_print@hotmail.com
                </Typography>
                <Typography
                  sx={{ fontSize: 14, color: "#EC1B3B", fontWeight: 600 }}
                >
                  Ipiales - Nariño - Colombia
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item item xs={5}>
            <Box
              sx={{
                borderLeft: 1,
                height: 100,
                borderColor: "#EC1B3B !important",
              }}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  sx={{ marginTop: 0, paddingTop: 2, paddingLeft: 2 }}
                >
                  <Grid item>
                    <IconoTelefono />
                  </Grid>

                  <Grid
                    item
                    sx={{ marginLeft: 1, marginTop: 0, marginBottom: 0 }}
                  >
                    <Typography
                      sx={{ fontSize: 14, color: "#EC1B3B", fontWeight: 600 }}
                    >
                      tecni_print@hotmail.com
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#EC1B3B",
                        fontWeight: 600,
                        marginTop: 0,
                      }}
                    >
                      Ipiales - Nariño - Colombia
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Typography sx={{ marginTop: 4, fontWeight: 600 }}>
        Archivos Anexos
      </Typography>

      <ImprimirAnexos
        titulo={"Agregados por el cliente"}
        subtitulo={tiket.nombre}
        imgs={tiket.anexos}
      />

      {diagnosticos.map((diag) => {
        return (
          <ImprimirAnexos
            titulo={"Evidencias Tecnico"}
            subtitulo={diag.tecnico}
            imgs={diag.imgs}
          />
        );
      })}
    </Grid>
  );
};

export default Imprimible;
