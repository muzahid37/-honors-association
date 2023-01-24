// import { Box } from "@material-ui/core";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ background: "Black", height: "300px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            ContactUS
          </Typography>
          <Typography color={"white"} align={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <Typography color={"white"} align={"center"}>
            Lorem ipsum dolor sit
          </Typography>
          <Typography color={"white"} align={"center"}>
            Ranging across
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Data policy
          </Typography>
          <Typography color={"white"} align={"center"}>
            Cookies
          </Typography>
          <Typography color={"white"} align={"center"}>
            Data safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Caragores
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Caragores2
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Caragores3
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Caragores4
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align={"center"}>
            Follow US
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
