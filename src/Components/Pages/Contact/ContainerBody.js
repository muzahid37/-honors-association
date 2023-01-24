import { Box, Grid } from "@mui/material";
import React from "react";
import ContactInfo from "./ContactInfo";
import DirectContact from "./DirectContact";

const ContainerBody = () => {
  return (
    <Box sx={{ marginTop: "20px", padding: "20px", background: "#f7f8fc" }}>
      <Grid container>
        <Grid item md={5} xs={12}>
          <ContactInfo />
        </Grid>
        <Grid item md={7} xs={12} sx={{ background: "" }}>
          <DirectContact />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContainerBody;
