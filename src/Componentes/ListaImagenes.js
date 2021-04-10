import { React } from "react";
import { Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import IconoSinAnexos from "./IconosDetalle/IconoSinAnexos";

const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: 150,
    borderRadius: 10,
  },
}));

const ListaImagenes = (props) => {
  const { imagenes } = props;

  const verificarImagenes = () => {
    if (imagenes != null && imagenes.length == 0) {
      return <IconoSinAnexos />;
    }
  };

  var configuracion_ventana =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

  function abrir_img(item) {
    window.open(item, "Pagina_CNN", configuracion_ventana);
  }
  const classes = useStyles();
  return (
    <Box sx={{ borderRadius: 2 }}>
      {imagenes ? (
        imagenes.map((item) => {
          return (
            <img
              src={item}
              className={classes.img}
              onClick={() => abrir_img(item)}
            />
          );
        })
      ) : (
        <IconoSinAnexos />
      )}
      {verificarImagenes()}
    </Box>
  );
};

export default ListaImagenes;
