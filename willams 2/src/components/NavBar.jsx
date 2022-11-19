import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../components/css/Navbar.css";
// import logo from '../components/Img/logo.png';
import logo from "../Img/logo.png";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["ABOUT US", "OUR PROJECTS", "CONTACT US", "LOGOUT"];

export default function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}></Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <a href="">START NOW</a>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img className="navlogo" src={logo} alt="" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to='/about-us'>
              <button type="button" className="navbarButton">
                ABOUT US
              </button>
              </Link>
            

            <select className="OURPROJECTS">
              <option value="none">OUR PROJECTS</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Exchange">Exchange</option>
              <option value="Social Network">Social Network</option>
              <option value="Gaming">Gaming</option>
            </select>

            <Link to="/contact-us">
              <button type="button" className="navbarButton">
                CONTACT US
              </button>
            </Link>
            {
              <button type="button" className="navbarButton">
                LOGOUT
              </button>
            }
            {
              <button type="button" className="navbarAccount">
                My Account
              </button>
            }
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
