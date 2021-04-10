import { React } from "react";
import { Grid, Box } from "@material-ui/core";
import RectGrisTabla from "./IconosImprimible/RectGrisTabla";

const Encabezado = (props) => {
  const { titulo } = props;

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <RectGrisTabla text={"Cant."} ancho={70} />
        <Box sx={{ marginRight: 1 }} />
        <RectGrisTabla text={"Siigo"} ancho={90} />
        <Box sx={{ marginRight: 1 }} />
        <RectGrisTabla text={titulo} ancho={400} />
        <Box sx={{ marginRight: 1 }} />
        <RectGrisTabla text={"valor"} ancho={130} />
      </Grid>
    </div>
  );
};

export default Encabezado;
