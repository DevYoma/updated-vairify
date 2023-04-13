import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
    },
    primary: {
      main: '#000000',
    },
    myColor: {
      main: "#ffffff"
    },
  },
  typography: {
    fontFamily: font,
    h6: {
      '@media (min-width:600px)': {
        fontSize: '1.1rem', // Change the font size for md screens
      },
      '@media (max-width:599.95px)': {
        fontSize: '1rem', // Change the font size for xs screens
      },
    },
    button: {
      background: 'linear-gradient(360deg, #4D4B95 30%, #7C72C5 90%)',
      border: 0,
      color: '#000000',
      height: 40,
      fontSize: '20px',
      padding: '10px',
      boxShadow: '0 3px 5px 2px rgba(96, 104, 255, .3)',
      textTransform: 'none',
    }
  },
  root: {
    "& .MuiDataGrid-columnHeaders": {
      fontSize: 17.8,
    },
    "& .MuiDataGrid-row Mui-selected": {
      backgroundColor: "red"
    }
  },
  '@global': {
      '*::-webkit-scrollbar': {
        width: '0px',
        height: '10px',
      },
      '*::-webkit-scrollbar-thumb': {
        width: '0rem',
        backgroundColor: '#D5073C',
        borderRadius: "2rem",
      },
    },
});

export default theme;