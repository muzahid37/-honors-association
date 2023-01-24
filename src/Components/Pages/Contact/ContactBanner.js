import { Box, Typography } from "@mui/material";
import React from "react";
import ContactBannerImage from "../../../asset/contactBanner.jpg";

const ContactBanner = () => {
  return (
    <Box>
      <Typography
        align="center"
        variant="h4"
        sx={{ fontWeight: 900, marginTop: "20px" }}
      >
        Honors<b style={{ color: "orange" }}>Asspcoation</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We Make you look the better of you!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${ContactBannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 300,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 5 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="orange" align="center" pt={2}>
              GOT A QUESTION?{" "}
            </Typography>
            <Typography variant="h4" align="center">
              Contact with Honors Asspcoation
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              We’re here to help and answer any questions you might have. We
              look forward to hearing from you.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactBanner;
