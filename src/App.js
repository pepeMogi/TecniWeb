import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Home/Main";
import fire from "./fire";
import Loginf from "./Entrada/Loginf";
import { ReactEasyNotify, notify } from "react-easy-notify";
import "react-easy-notify/dist/index.css";

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
    fire
      .firestore()
      .collection("usuarios")
      .where("correo", "==", email)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          setUsuario(doc.data().rol);
          setUser(email);
          
        });

       
      });
  };



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

  return (
    <div>
      {user ? ( <Main salirLoging={salirLoging} user={user} />): (
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
