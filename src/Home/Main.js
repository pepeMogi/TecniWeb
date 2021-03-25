import { React, useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Container from "@material-ui/core/Container";
import Collapse from "@material-ui/core/Collapse";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import CargaLaboral from "../Carga/CargaLaboral";
import TemaFormu from "../Temas/TemaFormu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Fab, Badge, SwipeableDrawer } from "@material-ui/core";
import IcCarga from "../Iconos/iccarga";
import IcIsqui from "../Iconos/icsqui";
import IcTiket from "../Iconos/ictiket";
import IcAbajo from "../Iconos/icabajo";
import IcArriba from "../Iconos/icarriba";
import IcTecni from "../Iconos/ictecni";
import IcRepu from "../Iconos/icrepuestos";
import IcMaqui from "../Iconos/icmaqui";
import IcCliente from "../Iconos/icclientedrawer";
import IcComer from "../Iconos/iccomercil";
import IconChat from "@material-ui/icons/Comment";
import TemaDrawer from "../Temas/TemaDrawer";
import HistorialTrabajof from "./../Tecnicos/HistorialTrabajof";
import TecnicosMain from "./../Tecnicos/TecnicosMain";
import TiketsNuevos from "./../SeccionTiketes/TiketsNuevos";
import InterChat from "./InterChat";
import fire from "../fire";
import TiketTodos from "./../SeccionTiketes/TiketsTodos";
import TiketPropios from "./../SeccionTiketes/TiketsPropios";
import Banner from "../Catalogo/SeccionBanner/Banners";
import Maquinas from "../Catalogo/SeccionMaquinas/Maquinas";
import TiketsLegalizar from "../SeccionLegalizar/TiketsLegalizar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#212121",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
  },

  drawerHeaderDos: {
    display: "flex",
    alignItems: "center",

    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  content: {
    flexGrow: 1,

    backgroundColor: "#E8E7E7",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: 58,
  },

  sectionDesktop: {
    backgroundColor: "red",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },

    grow: {
      flexGrow: 1,
    },
  },

  link: {
    textDecoration: "none",
    color: "#EC1B3B",
    fontSize: 10,
    fontWeight: 700,
  },
}));

const fabStyle = {
  margin: 10, // You might not need this now
  position: "fixed",
  bottom: 10,
  right: 10,
};

const Main = (props) => {
  const { salirLoging, user } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openComer, setOpenComer] = useState(false);
  const [openLegalizar, setOpenLegalizar] = useState(false);
  const [openTikets, setOpenTikets] = useState(false);
  const [openTecnicos, setOpenTecnicos] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [openDos, setOpenDos] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [abrirChat, setAbrirChat] = useState(false);
  const [admin, setAdmin] = useState("");
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");

  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenSub(!openSub);
  };

  const handleClickComer = () => {
    setOpenComer(!openComer);
  };

  const handleClickLegalizar = () => {
    setOpenLegalizar(!openLegalizar);
  };


  const handleClickDos = () => {
    setOpenDos(!openDos);
  };

  const handleClickTikes = () => {
    setOpenTikets(!openTikets);
  };

  const handleClickTecnicos = () => {
    setOpenTecnicos(!openTecnicos);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const manejoAbrirChat = () => {
    setAbrirChat(true);
  };

  const cerrarChat = () => {
    setAbrirChat(false);
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
      <MenuItem onClick={salirLoging}>Salir</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  useEffect(() => {
    fire
      .firestore()
      .collection("tecnicos")
      .where("correo", "==", user)
      .get()
      .then((snap) => {
        snap.forEach((tecni) => {
          setAdmin(tecni.data().nombre);
          setAvatar(tecni.data().img);
          setId(tecni.data().id);
        });
      })
      .catch((err) => {
        alert(err);
      });
  }, [user]);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={TemaFormu}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persistent drawer
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                onClick={manejoAbrirChat}
                color="inherit"
                onClose={cerrarChat}
              >
                <IconChat />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <Router>
          <ThemeProvider theme={TemaDrawer}>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <Box padding={2}>
                  <IcCarga />
                  <Typography
                    variant="h7"
                    sx={{ textAlign: "center", color: "#ffffff" }}
                  >
                    CARGA LABORAL
                  </Typography>
                </Box>
              </div>

              <div onClick={handleDrawerClose}>
                <IcIsqui />
              </div>

              <List>
                <Link to="/" className={classes.link}>
                  <ListItem button onClick={handleClickTikes}>
                    <ListItemIcon>
                      <IcTiket />
                    </ListItemIcon>
                    <ListItemText primary={"TIKETS"} />
                    {openTikets ? <IcArriba /> : <IcAbajo />}
                  </ListItem>
                </Link>

                <Collapse in={openTikets} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link to="/tiketsnuevos" className={classes.link}>
                      <ListItem button>
                        <Box sx={{ marginLeft: 7 }}>
                          <ListItemText sx={{ color: "#ffffff" }}>
                            Tickets Nuevos
                          </ListItemText>
                        </Box>
                      </ListItem>
                    </Link>

                    <Link to="/tiketstodos" className={classes.link}>
                      <ListItem button>
                        <Box sx={{ marginLeft: 7 }}>
                          <ListItemText sx={{ color: "#ffffff" }}>
                            Todos los Tikes
                          </ListItemText>
                        </Box>
                      </ListItem>
                    </Link>

                    <Link to="/tiketspropios" className={classes.link}>
                      <ListItem button>
                        <Box sx={{ marginLeft: 7 }}>
                          <ListItemText sx={{ color: "#ffffff" }}>
                            Mis Tickets
                          </ListItemText>
                        </Box>
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>

                <Link to="/about" className={classes.link}>
                  <ListItem button onClick={handleClickTecnicos}>
                    <ListItemIcon>
                      <IcTecni />
                    </ListItemIcon>
                    <ListItemText primary={"TECNICOS"} />
                    {openTecnicos ? <IcArriba /> : <IcAbajo />}
                  </ListItem>
                </Link>
              </List>

              <Collapse in={openTecnicos} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/carga" className={classes.link}>
                    <ListItem button>
                      <Box sx={{ marginLeft: 7 }}>
                        <ListItemText sx={{ color: "#ffffff" }}>
                          Carga Laboral
                        </ListItemText>
                      </Box>
                    </ListItem>
                  </Link>

                  <Link to="/historialtrabajo" className={classes.link}>
                    <ListItem button>
                      <Box sx={{ marginLeft: 7 }}>
                        <ListItemText sx={{ color: "#ffffff" }}>
                          Historial de Trabajo
                        </ListItemText>
                      </Box>
                    </ListItem>
                  </Link>
                  <Link to="/tecnicos" className={classes.link}>
                    <ListItem button>
                      <Box sx={{ marginLeft: 7 }}>
                        <ListItemText sx={{ color: "#ffffff" }}>
                          Tecnicos Planta
                        </ListItemText>
                      </Box>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>

              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <IcRepu />
                  </ListItemIcon>
                  <ListItemText primary="REPUESTOS" />
                </ListItem>
              </Link>

              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <IcMaqui />
                  </ListItemIcon>
                  <ListItemText primary="MAQUINAS" />
                </ListItem>
              </Link>

              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <IcCliente />
                  </ListItemIcon>
                  <ListItemText primary="CLIENTES" />
                </ListItem>
              </Link>

              <Link to="/" className={classes.link}>
                <ListItem button onClick={handleClickComer}>
                  <ListItemIcon>
                    <IcComer />
                  </ListItemIcon>
                  <ListItemText primary="COMERCIAL" />
                  {openComer ? <IcArriba /> : <IcAbajo />}
                </ListItem>
              </Link>

              <Collapse in={openComer} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/" className={classes.link}>
                    <ListItem button>
                      <Box sx={{ marginLeft: 7 }}>
                        <ListItemText sx={{ color: "#ffffff" }}>
                          Productos
                        </ListItemText>
                      </Box>
                    </ListItem>
                  </Link>

                  {/* LINK DE REFERENCIA A  MAQUINAS  */}
                  <Link to="/maquinas" className={classes.link}>
                    <ListItem button>
                      <Box sx={{ marginLeft: 7 }}>
                        <ListItemText sx={{ color: "#ffffff" }}>
                          Maquinas
                        </ListItemText>
                      </Box>
                    </ListItem>
                  </Link>
                  {/* LINK DE REFERENCIA A BANNER */}
                  <Link to="/banners" className={classes.link}>
                    <ListItem button>
                      <Box sx={{ marginLeft: 7 }}>
                        <ListItemText sx={{ color: "#ffffff" }}>
                          Banner
                        </ListItemText>
                      </Box>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>

              <Link className={classes.link}>
                <ListItem button onClick={handleClickLegalizar}>
                  <ListItemIcon>
                    <IcComer />
                  </ListItemIcon>
                  <ListItemText primary="LEGALIZACIÓN" />
                  {openLegalizar ? <IcArriba /> : <IcAbajo />}
                </ListItem>
              </Link>

              <Collapse in={openLegalizar} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/legalizar" className={classes.link}>
                    <ListItem button>
                      <Box sx={{ marginLeft: 7 }}>
                        <ListItemText sx={{ color: "#ffffff" }}>
                          Tikets para legalizar
                        </ListItemText>
                      </Box>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
              
            </Drawer>

            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeaderDos} />
              <Switch>
                <Route exact path="/">
                  <Container maxWidth={false} padding={0}>
                    // pagina no encontrada
                  </Container>
                </Route>
                <Route exact path="/carga">
                  <Container maxWidth={false} padding={0}>
                    <CargaLaboral />
                  </Container>
                </Route>
                <Route exact path="/historialtrabajo">
                  <Container maxWidth={false} padding={0}>
                    <HistorialTrabajof />
                  </Container>
                </Route>
                <Route exact path="/tecnicos">
                  <Container maxWidth={false} padding={0}>
                    <TecnicosMain />
                  </Container>
                </Route>
                <Route exact path="/tiketsnuevos">
                  <Container maxWidth={false} padding={0}>
                    <TiketsNuevos />
                  </Container>
                </Route>
                <Route exact path="/tiketstodos">
                  <Container maxWidth={false} padding={0}>
                    <TiketTodos />
                  </Container>
                </Route>
                <Route exact path="/tiketspropios">
                  <Container maxWidth={false} padding={0}>
                    <TiketPropios/>
                  </Container>
                </Route>
               
                {/* RUTA DE BANNER */}
                <Route exact path="/banners">
                  <Container maxWidth={false} padding={0}>
                    <Banner></Banner>
                  </Container>
                </Route>
                {/* RUTA DE MAQUINAS */}
                <Route exact path="/maquinas">
                  <Container maxWidth={false} padding={0}>
                    <Maquinas></Maquinas>
                  </Container>
                </Route>
                

                  {/* RUTA DE LEGALIZAR */}
                  <Route exact path="/legalizar">
                  <Container maxWidth={false} padding={0}>
                    <TiketsLegalizar/>
                  </Container>
                  
                </Route>
              </Switch>
              <Fab style={fabStyle}>Hola</Fab>
            </main>
          </ThemeProvider>
        </Router>
      </ThemeProvider>

      {/****Chat despleglable****/}
      <SwipeableDrawer anchor="right" open={abrirChat} onClose={cerrarChat}>
        <InterChat admin={admin} avatar={avatar} id={id} />
      </SwipeableDrawer>
    </div>
  );
};

export default Main;
