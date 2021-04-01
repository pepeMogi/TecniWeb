import { Grid, Button, Box } from "@material-ui/core";
import React from "react";
import GloAbajo from "../Iconos/gloAbajo";

export const Completo = (props) => {
    const { siguiente, atras } = props; 
  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {/****Btn Atras****/}
        <Button
          variant="contained"
          color="secondary"
          onClick={atras}       
          sx={{ marginRight: 7, width: 100 }}
        >
          Atras
        </Button>

        <GloAbajo />

        {/****Btn Siguiente****/}
        <Button
          variant="contained"
          color="secondary"
          onClick={siguiente}         
          sx={{ marginLeft: 7, width: 100 }}
        >
          siguiente
        </Button>
      </Grid>
    </Box>
  );
};


export const CompletoFinal = (props) => {
  const { final, atras } = props; 
return (
  <Box>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      {/****Btn Atras****/}
      <Button
        variant="contained"
        color="secondary"
        onClick={atras}       
        sx={{ marginRight: 7, width: 100 }}
      >
        Atras
      </Button>

      <GloAbajo />

      {/****Btn Siguiente****/}
      <Button
        variant="contained"
        color="primary"
        onClick={final}         
        sx={{ marginLeft: 7, width: 100 }}
      >
        Finalizar
      </Button>
    </Grid>
  </Box>
);
};


export const Isquierdo = (props) => {
  const {  atras } = props; 
return (
  <Box>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      {/****Btn Atras****/}
      <Button
        variant="contained"
        color="secondary"
        onClick={atras}       
        sx={{ marginRight: 7, width: 100 }}
      >
        Atras
      </Button>

      <GloAbajo />

      {/****Btn Siguiente****/}
      <Grid item
       
       
                 
        sx={{ marginLeft: 7, width: 100 }}
        
      >
        
      </Grid>
    </Grid>
  </Box>
);
};
