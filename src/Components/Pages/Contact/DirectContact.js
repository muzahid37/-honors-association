import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const DirectContact = () => {
  return (
    <Box component="form" sx={{ padding: "20px" }}>
      <Typography>
        Call or submit our online form to request an estimate or for general
        questions about city services. We look forward to serving you!
      </Typography>
      <div>
        <TextField
          sx={{ marginY: "5px" }}
          multiline
          fullWidth
          label="Your Name"
          id="fullWidth"
        />
        <TextField
          sx={{ marginY: "5px" }}
          multiline
          fullWidth
          label="Your Email"
          id="fullWidth"
        />
        <TextField
          sx={{ marginY: "5px" }}
          multiline
          rows={4}
          fullWidth
          label="Your message"
          id="fullWidth"
        />
      </div>
      {/* <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div> */}
      {/* <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div> */}
    </Box>
  );
};

export default DirectContact;
