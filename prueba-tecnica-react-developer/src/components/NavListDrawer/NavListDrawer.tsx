import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC, Fragment, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavLink {
  title: string;
  path: string;
  icon: ReactNode; //soporta componente de react
}

type NavListDrawerProps = {
  navLinks: NavLink[];
  setOpen: (open: boolean) => void;
};

const NavListDrawer: FC<NavListDrawerProps> = ({ navLinks, setOpen }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <Fragment key={item.title}>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title}></ListItemText>
                </ListItemButton>
              </ListItem>
              {item.title === "Home" && <Divider />}
            </Fragment>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
