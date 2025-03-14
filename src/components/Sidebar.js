import {Box, Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';



const Sidebar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);

    }

    return (

        <div>

        <IconButton edge="start" onClick={toggleDrawer(true)}>
            <MenuIcon/>
        </IconButton>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box className="sidebar">

                <List>
                    <ListItem button component={Home} to="/">
                        <ListItemText pr = "Inicio" />
                    </ListItem>

                    <ListItem button component={About} to="/">
                        <ListItemText primary = "Sobre Nosotros" />
                    </ListItem>

                    <ListItem button component={Layout} to="/">
                        <ListItemText primary = "Contacto" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>



        </div>

            
  )};


export default Sidebar;