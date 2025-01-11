import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import NavListDrawer from "../NavListDrawer";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { HomeWork, LiveTv, Movie } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeWork />,
  },
  {
    title: "Movies",
    path: "/movies",
    icon: <Movie />,
  },
  {
    title: "Series",
    path: "/series",
    icon: <LiveTv />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          minHeight: "41px",
          background: "var(--color-dark)",
          padding: "0 1%",
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" } }}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "var(--color-light)",
                  fontSize: "1.2rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                  transition: "all 0.3s ease",
                  "&.active": {
                    color: "var(--color-primary)",
                    fontWeight: "600",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default Navbar;
