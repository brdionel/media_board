import { LiveTv, Movie } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "grid",
        maxWidth: "900px",
        margin: "0 auto",
        minHeight: "100vh",
        placeContent: "center",
      }}
    >
      <Stack direction={"column"} spacing={2}>
        <Typography
          variant="h1"
          sx={{
            color: "var(--color-white)",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          What do you want to explore?
        </Typography>
        <List
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <ListItem
            sx={{
              maxWidth: "200px",
              minWidth: "130px",
              width: "10vw",

              listStyle: "none",
              "&:hover": {
                cursor: "pointer",
                "& .homeOptionsListItemBlock": {
                  borderColor: "var(--color-light)",
                },
                "& .homeOptionsListItemText": {
                  color: "var(--color-light)",
                },
              },
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              component={NavLink}
              to={"/series"}
            >
              <Box
                sx={{
                  display: "grid",
                  placeContent: "center",
                  backgroundColor: "var(--color-blue)",
                  border: "2px solid transparent",
                  borderRadius: "4px",
                  height: "10vw",
                  maxHeight: "200px",
                  minHeight: "130px",
                  minWidth: "130px",
                  maxWidth: "200px",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": {
                    borderColor: "var(--color-light)",
                  },
                }}
                className={`homeOptionsListItemBlock`}
              >
                <ListItemIcon>
                  <LiveTv
                    sx={{ color: "var(--color-white)", fontSize: "3rem" }}
                  />
                </ListItemIcon>
              </Box>
              <Typography
                sx={{
                  color: "var(--color-gray)",
                  fontSize: "12px",
                  lineHeight: "14.4px",
                  textAlign: "center",
                  margin: ".6em 0",
                  minHeight: "1.8em",
                  transition: "color 0.3s",
                }}
                className={"homeOptionsListItemText"}
              >
                Series
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              maxWidth: "200px",
              minWidth: "130px",
              width: "10vw",

              listStyle: "none",
              "&:hover": {
                cursor: "pointer",
                "& .homeOptionsListItemBlock": {
                  borderColor: "var(--color-light)",
                },
                "& .homeOptionsListItemText": {
                  color: "var(--color-light)",
                },
              },
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              component={NavLink}
              to={"/movies"}
            >
              <Box
                sx={{
                  display: "grid",
                  placeContent: "center",
                  backgroundColor: "var(--color-yellow)",
                  border: "2px solid transparent",
                  borderRadius: "4px",
                  height: "10vw",
                  maxHeight: "200px",
                  minHeight: "130px",
                  minWidth: "130px",
                  maxWidth: "200px",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": {
                    borderColor: "var(--color-light)",
                  },
                }}
                className={`homeOptionsListItemBlock`}
              >
                <ListItemIcon>
                  <Movie
                    sx={{ color: "var(--color-white)", fontSize: "3rem" }}
                  />
                </ListItemIcon>
              </Box>
              <Typography
                sx={{
                  color: "var(--color-gray)",
                  fontSize: "12px",
                  lineHeight: "14.4px",
                  textAlign: "center",
                  margin: ".6em 0",
                  minHeight: "1.8em",
                  transition: "color 0.3s",
                }}
                className={"homeOptionsListItemText"}
              >
                Movies
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default Home;
