import { Box, Card, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = () => {
  return (
    <Card sx={{ maxWidth: "100%", padding: "20px" }}>
      <Typography variant="h6" sx={{ fontWeight: 500, marginY: "20px" }}>
        Contact Information
      </Typography>
      <Typography
        variant="body"
        sx={{ marginBottom: "20px", display: "inline-block" }}
      >
        <b style={{ color: "orange", padding: "0px", marginRight: "10px" }}>
          <LocationOnIcon />
        </b>
        Sleeknote ApS Ankersgade 12C, 1, 8000 Aarhus
      </Typography>
      <Typography
        variant="body"
        sx={{ marginBottom: "20px", display: "inline-block" }}
      >
        <b style={{ color: "orange", padding: "0px", marginRight: "10px" }}>
          <PhoneIcon />
        </b>
        +8801776436494
      </Typography>
      <Typography
        variant="body"
        sx={{ marginBottom: "20px", display: "block" }}
      >
        <b style={{ color: "orange", padding: "0px", marginRight: "10px" }}>
          <EmailIcon />
        </b>
        muzahidul372709@gmail.com
      </Typography>
    </Card>
  );
};

export default ContactInfo;
