import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import ParkIcon from "@mui/icons-material/Park";
import BalanceIcon from "@mui/icons-material/Balance";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Activities = () => {
  return (
    <Box sx={{ background: "white" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "#e5e5e5",
          marginTop: "20px",
          paddingTop: "20px",
        }}
      >
        <Typography component="h3" variant="h4" sx={{ paddingBottom: "0px" }}>
          Activities and concerns
        </Typography>
      </Box>
      <Typography variant="body1" pb={8}>
        in the Brookton district
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              background: "orange",
              width: "50px",
              height: "50px",
              fontSize: "30px",
              color: "#818a91",
              textAlign: "center",
              lineHeight: "50px",
            }}
          >
            <ParkIcon />
          </Box>
          <Typography component="h3" variant="h6">
            BEAUTIFICATION
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Fort bunker hill park
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Metropolitan branch trail
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Neighborhood clean-ups
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Historic preservation
          </Typography>
        </Box>
        <Box flex={1}>
          <Box
            sx={{
              background: "orange",
              width: "50px",
              height: "50px",
              fontSize: "30px",
              color: "#818a91",
              textAlign: "center",
              lineHeight: "50px",
            }}
          >
            <BalanceIcon />
          </Box>
          <Typography component="h3" variant="h6">
            ADVOCACY
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Development projects
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Affordable housing
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Dc statehood
          </Typography>
          <Typography
            color={"#3e4451"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Traffic & parking
          </Typography>
        </Box>
        <Box flex={1}>
          <Box
            sx={{
              background: "orange",
              width: "50px",
              height: "50px",
              fontSize: "30px",
              color: "#818a91",
              textAlign: "center",
              lineHeight: "50px",
            }}
          >
            <EventAvailableIcon />
          </Box>
          <Typography component="h3" variant="h6">
            SOCIAL EVENTS
          </Typography>
          <Typography
            color={"#3e4451"}
            variant={"body2"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            House and garden tour
          </Typography>
          <Typography
            color={"#3e4451"}
            variant={"body2"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            The greater Crookland yard sale
          </Typography>
          <Typography
            color={"#3e4451"}
            variant={"body2"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Rhode island ave. Festival
          </Typography>
          <Typography
            color={"#3e4451"}
            variant={"body2"}
            align={"left"}
            sx={{
              borderBottom: 1,
              borderColor: "#e5e5e5",
              marginRight: "20px",
              padding: "20px",
              paddingLeft: "0px",
            }}
          >
            Picnics & happy hours
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Activities;
