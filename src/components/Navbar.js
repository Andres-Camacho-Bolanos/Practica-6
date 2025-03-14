import {
    AppBar,
    Box,
    Toolbar
} from "@mui/material";
import Sidebar from "./Sidebar";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {


          return (
              <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                      <Sidebar/>
                      <Toolbar>
                      <MenuIcon/>
                      </Toolbar>
                  </AppBar>
              </Box>

  )};


export default Navbar;