import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection: "column",
    alignContent: "center",
  },

  sectionLine: {
    margin: 2,
    flexDirection: "row",
  },
  sectionFalla: {
    marginTop: 5,
    flexDirection: "row",
    width: 480,
  },
  titulo: {
    fontSize: 26,
    textAlign: "center",
  },
  subTitulo: {
    fontSize: 16,
    color: "#676767",
  },
  normal: {
    fontSize: 16,
  },
});

// Create Document Component
const Pdf = (props) => {
  const {
    id,
    falla,
    setFalla,
    anexos,
    nombre,
    email,
    direccion,
    cuidad,
    celular,
    maquinasCliente,
    categoria,
    maquinasSelec,
  } = props;

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.titulo}>Solicitud de {categoria}</Text>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>Solicitante: </Text>
            <Text style={styles.subTitulo}>{nombre} </Text>
          </View>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>Fecha de Creacion: </Text>
            <Text style={styles.subTitulo}>10 Febrero 2020 </Text>
          </View>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>Contacto: </Text>
            <Text style={styles.subTitulo}>10 Febrero 2020 </Text>
          </View>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>Celular: </Text>
            <Text style={styles.subTitulo}>10 Febrero 2020 </Text>
          </View>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>Direccion: </Text>
            <Text style={styles.subTitulo}>10 Febrero 2020 </Text>
          </View>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>Ciudad: </Text>
            <Text style={styles.subTitulo}>10 Febrero 2020 </Text>
          </View>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>Maquinas: </Text>
            <Text style={styles.subTitulo}>10 Febrero 2020 </Text>
          </View>

          <View style={styles.sectionFalla}>
            <Text style={styles.normal}>Fallas: </Text>
            <Text style={styles.subTitulo} wrap={true} >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </Text>
          </View>
          <View style={styles.sectionLine}>
            <Text style={styles.normal}>7 imanges adjuntas </Text>
            
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
