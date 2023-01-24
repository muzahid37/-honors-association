import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  // withStyles,
} from "@mui/material";
import "./NavBar.css";
import React, { useState } from "react";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact", Link: "#" },
    { Name: "About Us", Link: "#" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <AppBar sx={{ background: "black" }} position={"static"}>
      <StyledToolbar>
        <Box>
          <BlurOnRoundedIcon />
        </Box>
        <MenuBox sx={{ display: { xs: "none", sm: "node", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <Box>
          <Button
            size="medium"
            sx={{
              background: "orange",
              display: { xs: "none", sm: "node", md: "flex" },
              textDecoration: "none",
              color: "white",
            }}
            variant="contained"
          >
            <Link className="navBatton" to="/blog">
              {" "}
              Take Membership
            </Link>
          </Button>

          <MenuRoundedIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: " none" },
            }}
            onClick={() => setOpen(!open)}
          ></MenuRoundedIcon>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Box>
        {/* <MenuItem>Profile</MenuItem> */}
      </Menu>
    </AppBar>
  );
};

export default NavBar;
