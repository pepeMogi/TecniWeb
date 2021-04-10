import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Home/Main";
import fire from "./fire";
import Loginf from "./Entrada/Loginf";
import { ReactEasyNotify, notify } from "react-easy-notify";
import "react-easy-notify/dist/index.css";
import { tecnico } from "./Entidades/tecnico";
import Imprimible from "./Componentes/Imprimible";

/****Para Experiencia de usuario****/
const options = {
  type: "danger",
  title: "Error en ingreso",
  status: true,
  timeout: 6000,
  message: "correo y/o contraseña de administrador incorrecto",
  position: "top-left",
  animationType: "pops-up",
};

const optionsDos = {
  type: "danger",
  title: "No cuenta de Administrador",
  status: true,
  timeout: 6000,
  message: "no se te reconoce como un adminstrador",
  position: "top-left",
  animationType: "pops-up",
};

/************************************************ */

const App = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [verLogin, setVerLogin] = useState("");
  const [uid, setUid] = useState("");
  const [usuario, setUsuario] = useState("");
  const [cargando, setCargando] = useState(false);

  const limpiar = () => {
    setEmail("");
    setPass("");
  };

  /***************************************************
   * Crear Usuario:
   * esta funcion crea un usuario requiriendo un
   * email y constraseña de minino 6 caracteres
   */
  const crearUsuario = () => {
    limpiar();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        // obtenemos el usuario
        var uid = user.user.uid;
        setUid(uid);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  /****************************************************
   * Logear Usuario:
   * verifica que este email y constraseña se encuentren
   * registrados previamente en firebase
   */
  const logearUsuario = () => {
    console.log("logear usuario");
    limpiar();
    fire
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        // obtenemos usuario
      })
      .catch((err) => {
        notify(options);
      });
  };

  /*****************************************************
   * Salir Login:
   * sale de la autenticaion que se halla generado
   * pasando un usuario vacio a la constante
   */
  const salirLoging = () => {
    fire
      .auth()
      .signOut()
      .then((e) => {
        setUser("");
      });
  };

  /*****************************************************
   * Leer Admin:
   * consulta con la base de datos de firestore si el
   * correo del usuario logeado corresponde al rol
   * admin
   */
  const leerAdmin = (email) => {
    console.log("leyendo usuario " + email );
    fire
      .firestore()
      .collection("tecnicos")
      .where("email", "==", email)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var tecni = new tecnico(doc);
          if (tecni.tipo == "admin") {
            //setUsuario(doc.data().rol);
            setUser(email);
            obtenerToken(tecni);
          }else{
            alert("rol de usuario invalido")
          }
        });
      });
  };

  const obtenerToken = (tecni) => {
    fire
      .messaging()
      .getToken({
        vapidKey:
          "BM97DtgRhHlVRVTatKr6wKDj8G9QCnNmgtjClV5nFhA1wjx3-5nfQXmEi05wJvLxZw5jKnOBp-6sB3O_MijROyo",
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          subscribeTokenToTopic(currentToken);
          actualizarToken(currentToken, tecni);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  };

  const actualizarToken = (currentToken, tecni) => {
    fire
      .firestore()
      .collection("tecnicos")
      .doc(tecni.id)
      .update("token", currentToken)
      .then(() => {
        console.log("Notificaciones lista");
      });
  };

  const subscribeTokenToTopic = (token) => {
    fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+"torre", {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'key=AAAAgoHWsk8:APA91bEB-8lk3e2wsLGzOBIFVhm-4_2oo13RDpY7BSgMpyUZbgryu8HdzpZn5KqQsKLfw1beNnd8-oSyG46zxWuzT7Go0v_B9-wCg5fh_8gus6BZcqTupi8LjKYZxbY9vEQuYqU7RF6-'
      })
    }).then(response => {
      if (response.status < 200 || response.status >= 400) {
        throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
      }
      console.log('Subscribed to  torre');
    }).catch(error => {
      console.error(error);
    })
  }

  /****************************************************
   * Escuchar logeo:
   * escuchador de cambios en el estado de login en
   * fiebase, este limpia los campos y setea el
   * usuario en la constante
   */
  const escucharLogeo = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        leerAdmin(user.email);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    escucharLogeo();
  }, []);

  const tiket = {
    tipo: "facturable",
    nombre: "Juanito Perez Velasques Cuasques",
    solicitante: "Benito Iglesias de la Olla",
    nit: "275461265-8",
    direccion: "calle 25 N 14-50",
    celular: "3124567889",
    email: "",
    falla: "la impresora no imprime a color"
  }

  return (
    <div>
      {user ? (
        <Main user={user} salirLoging={salirLoging} />
      ) : (
        <Loginf
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
          crearUsuario={crearUsuario}
          logearUsuario={logearUsuario}
          verLogin={verLogin}
          setVerLogin={setVerLogin}
          cargando={cargando}
          setCargando={setCargando}
        />
      )}
    </div>
  );
};

export default App;
