import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          
             <Sidebar/>
            <Typography variant="h6" component="div" sx={{ mr: 1 }}>
              News
            </Typography>

            <Button color="inherit">Login</Button>
            <Button color="inherit">Dark</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
