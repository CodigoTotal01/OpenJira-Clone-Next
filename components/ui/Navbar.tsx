import { UIContext } from "@/context/ui";
import { MenuOutlined, RestaurantMenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";

export const NavBar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
