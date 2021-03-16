import { React, useEffect, useState } from "react";
import {
  Grid,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Lista from "./Lista";
import ListIcon from "@material-ui/icons/List";
import SendIcon from "../Iconos/icsendch";
import IconTodos from "../Iconos/ictodosch";
import fire from "../fire";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: "80vh",
  },
}));

const InterChat = (props) => {
  const { admin, avatar, id } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [receptor, setReceptor] = useState("todos");
  const [user, setUser] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [idEnviar, setIdEnviar] = useState("todos");
  const [tecnicos, setTecnicos] = useState([]);


  const manejoTecSala = ( user, tecni) => {
    console.log(tecni);
    setReceptor(tecni);
    setUser(user);
    handleMenuClose();
  };

  /****Diseño****/
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const llenarEncabezado = (receptor) => {
    if (receptor == "todos") {
      return (
        <Box width={320}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            padding={1}
          >
            <Typography
              sx={{
                marginLeft: 2,
                width: 270,
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              Todo el equipo
            </Typography>
          </Grid>
          <Divider sx={{ marginTop: 0, width: 250, marginLeft: 5 }} />
        </Box>
      );
    } else {
      return (
        <Box width={320}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            padding={1}
          >
            <Avatar sx={{ width: 36, height: 36 }}>Lr</Avatar>

            <Typography sx={{ marginLeft: 2, width: 150, color: "#ffffff" }}>
              {receptor}
            </Typography>
          </Grid>
          <Divider sx={{ marginTop: 0, width: 250, marginLeft: 5 }} />
        </Box>
      );
    }
  };

  const escucharTecla = (e) => {
    if (e.key == "Enter") {
      enviarMensaje();
    }
  };

  const enviarMensaje = () => {
    console.log("ID SALA " + idEnviar);
    fire
      .firestore()
      .collection("chat/privados/" + idEnviar)
      .doc()
      .set({
        mensaje: mensaje,
        user: admin,
        img: avatar,
        fecha: new Date(),
      })
      .then(() => {
        setMensaje("");
      });
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
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <IconTodos />
          <Typography sx={{ width: 120, fontWeight: 700, marginLeft: 2 }}>
            TODOS
          </Typography>
        </Grid>
      </MenuItem>
      <Divider sx={{ width: 220 }} />
      {/****Llenado de tecnicos */}
      {tecnicos.map((tec) => {
        return (
          <div>
          <MenuItem onClick={() => manejoTecSala(tec.id, tec.user)}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
               <Avatar src={tec.img} />
              
              <Typography sx={{marginLeft: 1, fontSize: 14 , fontWeight: 700}}  >{tec.user}</Typography>
             
            </Grid>
          </MenuItem>
          <Divider sx={{ width: 220 }} />
          </div>
        );
      })}
    </Menu>
  );

  useEffect(() => {
    var este = new Array();
    fire
      .firestore()
      .collection("tecnicos")
      .orderBy("tipo", "asc")
      .get()
      .then((snap) => {
        snap.forEach((tecni) => {
          var tec = {
            user: tecni.data().nombre,
            img: tecni.data().img,
            tipo: tecni.data().tipo,
            id: tecni.data().id,
          };

          este.push(tec);
        });

        setTecnicos(este);
      });
  }, []);

  return (
    <div>
      <Box height="100vh" width={320} backgroundColor="#3D3D3D">
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width={320} sx={{ backgroundColor: "#EC1B3B" }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              padding={1}
            >
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                sx={{ marginRight: 4 }}
              >
                <ListIcon />
              </IconButton>

              <Typography sx={{ marginRight: -6 }}>{admin}</Typography>

              <Avatar src={avatar} />

              {/****Apertura de poppup escoger tecncio****/}
              {renderMenu}
            </Grid>
          </Box>

          {/****Titulo con quien habla****/}

          {llenarEncabezado(receptor)}

          <Box height="76vh" mx={0.5} width={310} display="inline-block">
            {/****Lista scroleable****/}
            {receptor && (
              <Lista
                receptor={receptor}
                admin={admin}
                setIdEnviar={setIdEnviar}
                user={user}
                id={id}
              />
            )}
          </Box>

          {/****seccion de Envio de mensage****/}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding={1}
          >
            <Box
              sx={{
                borderRadius: 2,
                backgroundColor: "#626262",
                border: 1,
                borderColor: "#C8C8C8",
                width: 304,
                padding: 0.2,
              }}
            >
              {/****Barra escribir mensaje****/}
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                paddingLeft={1}
                paddingRight={1}
              >
                <InputBase
                  label="Enviar Mensaje"
                  endAdornment={
                    <IconButton sx={{ width: 35, height: 35 }}>
                      <SendIcon />
                    </IconButton>
                  }
                  fullWidth
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  onKeyPress={(e) => escucharTecla(e)}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default InterChat;
