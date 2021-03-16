import { createMuiTheme } from "@material-ui/core/styles";

const TemaFormu = createMuiTheme({  
  palette: {
    primary: {
      main: "#EC1B3B",
    },

    secondary: {
      main: "#3D3D3D",
    },
    background: {
      paper: "#3D3D3D",
    }
  },

  shape: {
    borderRadius: 6,
  
  },

  components: {
    // Name of the component
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS          
          paddingLeft: 0,
          paddingRight: 0,
          margin: 0,
        },


      },
    },
  },

  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(',')
   }
   
});

export default TemaFormu;
