import { createMuiTheme } from "@material-ui/core/styles";

const TemaFormu = createMuiTheme({  
  palette: {
    primary: {
      main: "#EC1B3B",
    },

    secondary: {
      main: "#3D3D3D",
    },
  },

  shape: {
    borderRadius: 6,
  },

  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(',')
   }
   
});

export default TemaFormu;
