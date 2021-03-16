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
import Tiket from '../Tiket/Tiket';
import { ThemeProvider } from '@material-ui/core/styles';



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

  const manejoCerrarDialog = () =>{
    setOpenDetalle(false);
  }

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

  const llenarTikets = () => {
    console.log("llenando tikets..." + tikets.length);

    return tikets.map((tik) => {
      return (
        <Box
          // className={classes.rowTable}
          backgroundColor="#ffffff"
          marginTop={2}
          borderRadius={2}
          border={1}
          height={75}
          boxShadow={4}
          onClick={(e) => manejoVerDetalle(tik)}
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
      );
    });
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
      <Button variant="contained" color="secondary" onClick={onClick}>
        {value}
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

        var tiket = {
          id: tik.objectID,
          nombre: tik.nombre,
          asignado: tik.asignado,
          ciudad: tik.ciudad,
          estado: tik.estado,
          factura: tik.factura,
          fechaCreacion: tik.fechaCreacion, // new Date();
          prioridad: tik.prioridad,
          tipo: tik.tipo,
          firebase: false,
        };

        setTikets((mas) => mas.concat(tiket));
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
          setTikets((arreglo) => arreglo.concat(tiket));
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
            firebase: true,
          };

          setTikets((arreglo) => arreglo.concat(tiket));
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
              border: 2,
              borderColor: "#F1546C",
              width: 520,
              height: 50,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: 2,
              padding: 0.5,
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

              <Typography>A</Typography>
              {/****Btn Fecha Fin****/}
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                dateFormat="dd-MM-yyyy"
                onChange={(date) => setEndDate(date)}
                customInput={<Boton />}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={(e) => buscarPorFecha(e)}
              >
                B
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
                    width: 140,
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
              />
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{ width: 40, height: 40 }}
              >
                <IconMore />
              </IconButton>
              {renderMenu}
            </Grid>
          </Box>

          {/****Barra de Prioridad****/}
          <Box
            sx={{
              border: 1,
              borderColor: "#C2C1C1",
              width: 420,
              height: 40,
              backgroundColor: "#ffffff",
              borderRadius: 1,
              boxShadow: 2,
              padding: 0.5,
              marginTop: 4,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <IconAlert />

              <CircleIcon />
              <Typography>Rellamada</Typography>
              <CircleIcon />
              <Typography>Urgente</Typography>
              <CircleIcon />
              <Typography>Media</Typography>
              <CircleIcon />
              <Typography>Ninguna</Typography>
            </Grid>

            <Divider sx={{ width: 1200, marginTop: 3 }} />
          </Box>
        </Grid>
        <br></br>
        {tikets ? llenarTikets() : <div></div>}
      </Grid>

      {/****Detalle Tikets****/}
      <ThemeProvider theme={TemaDialog}>
        <Dialog open={openDetalle} onClose={manejoCerrarDialog}>
          <Tiket tiketDetalle={detalleTiket} />
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default TiketTodos;
