import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";

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
        <Box>Membarsheep button</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
