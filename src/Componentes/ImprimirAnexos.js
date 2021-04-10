import { Typography, Grid } from "@material-ui/core";
import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: 280,
    borderRadius: 10,
  },
}));

const ImprimirAnexos = (props) => {
  const { titulo, imgs, subtitulo } = props;
  const classes = useStyles();

  const llenarImangnes = () => {
    console.log("llenadi imgs ..");
    return imgs.map((item) => {
      return <img src={item} className={classes.img} />;
    });
  };

  return (
    <div>
        
      <Typography sx={{ width: 700, fontSize: 12, fontWeight: 500, marginTop: 4 }}>
        {titulo}
      </Typography>
      <Typography sx={{ width: 700, fontSize: 12, fontWeight: 400 }}>
        {subtitulo}
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {imgs.length > 0 ? (
          llenarImangnes()
        ) : (
          <Typography
            sx={{
              width: 700,
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Sin Anexos
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default ImprimirAnexos;
