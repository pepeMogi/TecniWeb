import { useState, React, useEffect, useRef } from "react";
import { Grid, List, Typography, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fire from "./../fire";
import { useCollection } from "react-firebase-hooks/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: "78vh",
  },
  talkbubble: {
    width: 200,
    padding: 0,
  },
}));
const Lista = (props) => {
  const { receptor, admin, setIdEnviar, user, id } = props;
  const [idSala, setIdSala] = useState("todos");
  
  const classes = useStyles();
  const myRef = useRef(null);

  const [value, loading, error] = useCollection(
    fire
      .firestore()
      .collection("chat/privados/" + idSala)
      .orderBy("fecha", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: false },
    }
  );

  const crearSala = () => {
    console.log("creando sala...");
    var newSala = (id + user);
   // setIdSala(newSala);
    setIdEnviar(newSala);
  };

  const buscarNuevamente = (user) => {
    console.log("buscando sala nuevmanete");
    fire
      .firestore()
      .collection("salas")
      .where("user1", "==", id)
      .where("user2", "==", user)
      .get()
      .then((snap) => {
        var array = [];
        snap.forEach((sala) => {
          console.log(sala.data().id);
          array.push(sala.data().id);
        });

        console.log(array.length);
        if (array.length == 0) {
          console.log("no hay chats ni sala");
          crearSala();
        } else {
          var id = array[0];
          console.log("hay sala => " + id);
          setIdSala(id);
          setIdEnviar(id);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const bajarScroll = () => {
    myRef.current.scroll({
      top: 10000,
      left: 0,
      behavior: "smooth",
    });
  };

  const llenarComponente = (chat) => {
    if (chat.user == admin) {
      if (receptor == "todos") {
        return (
          <div>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              sx={{ marginBottom: 0, marginLeft: 2 }}
            >
              <Typography sx={{ marginRight: 1, color: "#ffffff" }}>
                {chat.user}
              </Typography>
              <Avatar sx={{ width: 28, height: 28, marginRight: 1 }}>r</Avatar>
            </Grid>
            <Paper
              className={classes.talkbubble}
              sx={{
                backgroundColor: "#C8C8C8",
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                marginLeft: 8,
              }}
            >
              <Typography sx={{ margin: 1 }}>{chat.mensaje}</Typography>
            </Paper>
          </div>
        );
      } else {
        <Paper
          className={classes.talkbubble}
          sx={{
            backgroundColor: "#C8C8C8",
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            marginLeft: 8,
          }}
        >
          <Typography sx={{ margin: 1 }}>{chat.mensaje}</Typography>
        </Paper>;
      }
    } else {
      if (receptor == "todos") {
        return (
          <div>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ marginBottom: 0, marginLeft: 2 }}
            >
              <Avatar sx={{ width: 28, height: 28 }}>r</Avatar>
              <Typography sx={{ marginLeft: 1, color: "#ffffff" }}>
                {chat.user}
              </Typography>
            </Grid>
            <Paper
              className={classes.talkbubble}
              sx={{
                backgroundColor: "#C8C8C8",
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                marginLeft: 1,
              }}
            >
              <Typography sx={{ margin: 1 }}>{chat.mensaje}</Typography>
            </Paper>
          </div>
        );
      } else {
        <Paper
          className={classes.talkbubble}
          sx={{
            backgroundColor: "#C8C8C8",
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginLeft: 1,
          }}
        >
          <Typography sx={{ margin: 1 }}>{chat.mensaje}</Typography>
        </Paper>;
      }
    }
  };

  useEffect(() => {
    console.log(receptor);
    setIdSala(receptor);
  

    if (receptor === "todos") {
      console.log("buscando sala");
      fire
        .firestore()
        .collection("salas")
        .where("user1", "==", user)
        .where("user2", "==", id)
        .get()
        .then((snap) => {
          var array = [];
          snap.forEach((sala) => {
            console.log(sala.data().id);
            array.push(sala.data().id);
          });

          console.log(array.length);
          if (array.length == 0) {
            buscarNuevamente(receptor);
          } else {
            var id = array[0];
            console.log("hay sala => " + id);
            setIdSala(id);
            setIdEnviar(id);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [receptor]);

  useEffect(() => {
    bajarScroll();
  }, [value]);

  return (
    <List className={classes.root} ref={myRef}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="start"
        width={270}
      >
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}

        {value &&
          value.docs.map((doc) => {
            return <div>{llenarComponente(doc.data())}</div>;
          })}
      </Grid>
    </List>
  );
};

export default Lista;
