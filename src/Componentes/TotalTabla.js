import { React } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

const TotalTabla = (props) =>{

    const {total} = props;

    return(
        <div>

        
<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="center"
  sx={{marginTop: 1 }}
>
<Typography sx={{width: 510, fontStyle: "italic",fontSize: 10}}>No válido como factura*</Typography>
<Typography sx={{width: 74, fontWeight: 600, fontStyle: "italic", color: "#EC1B3B" }} >Total $:</Typography>
<Typography sx={{width: 125, border: 1, fontWeight: 600,textAlign:"center"}} >{total}</Typography>
</Grid>
</div>
    )
}

export default TotalTabla;