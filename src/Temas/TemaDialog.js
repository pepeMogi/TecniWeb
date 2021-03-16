import { createMuiTheme } from "@material-ui/core/styles";

const TemaFormu = createMuiTheme({
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(',')
   }
   
});

export default TemaFormu;
