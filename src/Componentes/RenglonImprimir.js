import { Box, Grid, Typography } from '@material-ui/core';
import { React } from 'react';



const RenglonImprimir = (props) =>{

    const { titulo, contenido, tecnico} = props;

    return(

        <Box
        sx={{
          borderLeft: 1,
          borderRight: 1,
          borderBottom: 1,
          minWidth: 700,
          maxWidth: 700,
          marginTop: 0,
          padding: 0.5,
        }}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: 12,
              fontStyle: "italic",
              fontWeight: 500,
              marginLeft: 1,
            }}
          >
            {titulo}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              fontStyle: "italic",
              fontWeight: 400,
              marginLeft: 1,
            }}
          >
            {contenido + " (" + tecnico + ")"}
          </Typography>
        </Grid>
      </Box>

    )
}

export default RenglonImprimir;