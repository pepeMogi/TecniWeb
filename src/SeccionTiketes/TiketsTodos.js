import { React, useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  Input,
  Divider,
  IconButton,
  MenuItem,
  Menu,
  Dialog,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CircleIcon from "@material-ui/icons/FiberManualRecord";
import IconMore from "./../Iconos/icmoretod";
import IconAlert from "./../Iconos/icalertod";
import IconCalendar from "./../Iconos/iccalendar";
import IconTipo from "./../Iconos/ictipo";
import IconSolicitante from "./../Iconos/icsolicitante";
import IconEstado from "./../Iconos/icestado";
import fire from "./../fire";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import algoliasearch from "algoliasearch";
import TemaDialog from "../Temas/TemaDialog";
import Tiket from "../Tiket/TiketDetalle";
import { ThemeProvider } from "@material-ui/core/styles";
import TiketCompleto from "../Componentes/TiketCompleto";
import { tiket } from "./../Entidades/tikets";
import { tiketFromAlgolia } from "./../Entidades/tiketsFromAlgolia";

const TiketTodos = () => {

  const [tikets, setTikets] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [orden, setOrden] = useState("");
  const [palabra, setPalabra] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openDetalle, setOpenDetalle] = useState(false);
  const [detalleTiket, setDetalleTiket] = useState("");


  const isMenuOpen = Boolean(anchorEl);

  const client = algoliasearch(
    "BSGVLDWAAA",
    "a6a2592069708d0523908a39c1860f24"
  );
  const index = client.initIndex("tikets");

  const manejoCerrarDialog = () => {
    setOpenDetalle(false);
  };

  const manejoVerDetalle = (tik) => {
    console.log("cargando detalle tiket...");

    if (tik.firebase) {
      setDetalleTiket(tik);
      setOpenDetalle(true);
      console.log("tiket ya cargado");
    } else {
      console.log("tiket buscandolo en firestore => " + tik.id);
      fire
        .firestore()
        .collection("tikets")
        .doc(tik.id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            var tiket = {
              id: doc.data().id,
              idCliente: doc.data().idCliente,
              nombre: doc.data().nombre,
              direccion: doc.data().direccion,
              celular: doc.data().celular,
              celularDos: doc.data().celularDos,
              anexos: doc.data().anexos,
              asignado: doc.data().asignado,
              ciudad: doc.data().ciudad,
              comentario: doc.data().comentario,
              diagnostico: doc.data().diagnostico, // es array
              direccion: doc.data().direccion,
              email: doc.data().email,
              estado: doc.data().estado,
              factura: doc.data().factura,
              falla: doc.data().falla,
              fechaCreacion: getFecha(doc.data().fechaCreacion), // new Date();
              legalizacion: getFecha(doc.data().legalizacion), // new Date()
              maquinas: doc.data().maquinas, // array
              prioridad: doc.data().prioridad,
              tipo: doc.data().tipo,
              ultimaVisita: getFecha(doc.data().ultimaVisita), // date()
            };

            setDetalleTiket(tiket);
            setOpenDetalle(true);
          } else {
            alert("este tiket no existe o esta borrado");
          }
        });
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ color: "#ffffff" }} onClick={(e) => ordenarPor("nombre")}>
        Nombre
      </MenuItem>
      <Divider />
      <MenuItem sx={{ color: "#ffffff" }} onClick={(e) => ordenarPor("ciudad")}>
        Ciudad
      </MenuItem>
      <Divider />
      <MenuItem sx={{ color: "#ffffff" }} onClick={(e) => ordenarPor("estado")}>
        Estado
      </MenuItem>
      <Divider />
      <MenuItem sx={{ color: "#ffffff" }} onClick={(e) => ordenarPor("tipo")}>
        Tipo
      </MenuItem>
    </Menu>
  );

  const Boton = ({ value, onClick }) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{ width: 140, fontSize: 10, marginLeft: 1 }}
      >
        Inicio {value}
      </Button>
    );
  };

  const BotonFin = ({ value, onClick }) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{ width: 140, fontSize: 10, marginLeft: 2 }}
      >
        Final {value}
      </Button>
    );
  };

  const buscarPorPalabra = () => {
    var mas = [];
    setTikets(mas);
   
    console.log("buscando por palabra...");

    index.search(palabra).then(({ hits }) => {
      console.log("resultados de busqueda => " + hits);

      hits.forEach((tik) => {
        console.log(tik.nombre);

        var tiko = new tiketFromAlgolia(tik);

        setTikets((mas) => mas.concat(tiko));
      });

      console.log(mas.length);
    });
  };

  const verificamosTecla = (e) => {
    if (e.key == "Enter") {
      buscarPorPalabra();
    }
  };

  const buscarPorFecha = (e) => {
    console.log("recuperando por fecha => " + startDate.toDate);
    var milisegundos = endDate.getTime() + 1 * 24 * 60 * 60 * 1000;
    var milisegundosDos = startDate.getTime() - 1 * 24 * 60 * 60 * 1000;

    fire
      .firestore()
      .collection("tikets")
      .where("fechaCreacion", ">=", new Date(milisegundosDos))
      .where("fechaCreacion", "<=", new Date(milisegundos))

      .onSnapshot((snap) => {
        var arreglo = [];
        setTikets(arreglo);
        snap.forEach((doc) => {
          var tik = new tiket(doc);

          setTikets((arreglo) => arreglo.concat(tik));
        });
      });
  };

  const ordenarPor = (este) => {
    setOrden(este);
  };

  const getFecha = (times) => {
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
    let current_datetime = times.toDate();
    let formatted_date =
      current_datetime.getDate() +
      "-" +
      months[current_datetime.getMonth()] +
      "-" +
      current_datetime.getFullYear();

    return formatted_date;
  };

  useEffect(() => {
    var valor;
    var orientacion;
    if (orden) {
      valor = orden;
      orientacion = "asc";
    } else {
      valor = "id";
      orientacion = "desc";
    }

 

    console.log("ordenar por: " + orden);
    fire
      .firestore()
      .collection("tikets")
      .orderBy(valor, orientacion)
      .onSnapshot((snap) => {
        var arreglo = [];
        setTikets(arreglo);
        snap.forEach((doc) => {
          var tik = new tiket(doc);

          setTikets((arreglo) => arreglo.concat(tik));
        });
      });
  }, [orden]);


 

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          {/****Barra superior****/}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: 4,
              padding: 1,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {/****Btn Fecha Ini****/}

              <DatePicker
                selected={startDate}
                selectsStart
                dateFormat="dd-MM-yyyy"
                onChange={(date) => setStartDate(date)}
                customInput={<Boton />}
              />

              <Typography sx={{ marginLeft: 2 }}>A</Typography>
              {/****Btn Fecha Fin****/}
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                dateFormat="dd-MM-yyyy"
                onChange={(date) => setEndDate(date)}
                customInput={<BotonFin />}
              />

              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => buscarPorFecha(e)}
                sx={{ marginLeft: 2, height: 28 }}
              >
             <SearchIcon />
              </Button>

              {/****Barra Buscar****/}
              <Input
                placeholder="Buscar"
                value={palabra}
                onChange={(e) => setPalabra(e.target.value)}
                onKeyPress={(e) => verificamosTecla(e)}
                inputProps={{
                  style: {
                    textAlign: "start",
                    fontSize: 16,
                    color: "gray",
                    borderColor: "#F1546C",
                    width: 160,
                  },
                }}
                endAdornment={
                  <IconButton
                    sx={{ width: 40, height: 40 }}
                    onClick={(e) => buscarPorPalabra()}
                  >
                    <SearchIcon />
                  </IconButton>
                }
                sx={{ marginLeft: 4 }}
              />
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{ width: 40, height: 40, marginLeft: 2 }}
              >
                <IconMore />
              </IconButton>
              {renderMenu}
            </Grid>
          </Box>

          {/****Barra de Prioridad****/}
          <Box
            sx={{              
              borderColor: "#C2C1C1",
              backgroundColor: "#ffffff",         
             
              padding: 1,
              marginTop: 4,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#727070",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                Nivel de Prioridad
              </Typography>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  backgroundColor: "#FF0034",
                  borderRadius: 2,
                }}
              />
              <Typography
                sx={{
                  marginLeft: 1,
                  marginRight: 1,
                  fontSize: 12,
                  fontStyle: "italic",
                  color: "#3D3D3D",
                  fontWeight: 500,
                }}
              >
                Rellamada
              </Typography>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  backgroundColor: "#FE9916",
                  borderRadius: 2,
                }}
              />
              <Typography
                sx={{
                  marginLeft: 1,
                  marginRight: 1,
                  fontSize: 12,
                  fontStyle: "italic",
                  color: "#3D3D3D",
                  fontWeight: 500,
                }}
              >
                Alta
              </Typography>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  backgroundColor: "#F6D119",
                  borderRadius: 2,
                }}
              />
              <Typography
                sx={{
                  marginLeft: 1,
                  marginRight: 1,
                  fontSize: 12,
                  fontStyle: "italic",
                  color: "#3D3D3D",
                  fontWeight: 500,
                }}
              >
                Media
              </Typography>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  backgroundColor: "#0F996D",
                  borderRadius: 2,
                }}
              />
              <Typography
                sx={{
                  marginLeft: 1,
                  marginRight: 2,
                  fontSize: 12,
                  fontStyle: "italic",
                  color: "#3D3D3D",
                  fontWeight: 500,
                }}
              >
                Baja
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <br></br>
      {tikets.map((tiket) => {
        return <TiketCompleto tike={tiket} />;
      })}

    </div>
  );
};

export default TiketTodos;
