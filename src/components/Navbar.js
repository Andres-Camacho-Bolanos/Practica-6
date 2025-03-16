import {
    AppBar,
    Toolbar, Typography
} from "@mui/material";
import Sidebar from "./Sidebar";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {


          return (

    <AppBar className="Barra" position="static">
        <Toolbar>
            <Sidebar/>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Bobbers Motors Company
            </Typography>
            <MenuIcon/>
        </Toolbar>
    </AppBar>

  )};


export default Navbar;