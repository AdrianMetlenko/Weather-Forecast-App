import {createTheme, responsiveFontSizes} from "@mui/material";
import {blue} from "@mui/material/colors";

const themeConfig = createTheme({
    typography: {
        fontSize: 12,
    },
    palette: {
        primary: {
            main: blue['500'],
            light: blue['100'],
            contrastText: '#FFFFFF'
        },
        background: {
            default: blue['100']
        }
    },
    shape: {
        borderRadius: 20
    }
})

export default themeConfig