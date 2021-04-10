import { Box, Grid } from "@material-ui/core";
import { React } from "react";
import RectGrisClaroTabla from "./IconosImprimible/RectGrisClaroTabla";


const RowTabla = (props) => {
  const { repuesto } = props;
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        sx={{ marginLeft: 0, marginTop: -0.3, marginRight: 0 }}
      >
        <RectGrisClaroTabla text={repuesto.cantidad} ancho={70} />
        <Box sx={{ marginRight: 1 }} />
        <RectGrisClaroTabla text={repuesto.referencia}  ancho={90} />
        <Box sx={{ marginRight: 1 }} />
        <RectGrisClaroTabla text={repuesto.nombre}  ancho={400} />
        <Box sx={{ marginRight: 1 }} />
        <RectGrisClaroTabla text={repuesto.valor}  ancho={130} />
      </Grid>
    </div>
  );
};

export default RowTabla;
