import {
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { padding } from "@mui/system";
import React from "react";
const useStyle = makeStyles({
  title: {
    fontSize: 40,
    // fontFamily: "robato",
  },
  cover: {
    backgroundImage: `url(https://i.ibb.co/1qWTcD8/banner.jpg)`,
    backgroundPosition: "center",
    padding: "35px 25px",
    height: "500px",
  },
  textContainer: {
    marginY: "auto",
    color: "white",
    width: "50%",
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <div>
      <Box sx={{ height: 300 }}>
        <Card className={classes.cover}>
          <CardContent className={classes.textContainer}>
            <Typography className={classes.title} gutterBottom>
              {" "}
              Lorem ipsum dolor sit amet consectetur
            </Typography>
            <Typography variant="h5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              inventore, impedit nostrum vero deserunt
            </Typography>
          </CardContent>
          <Button variant="contained" className={classes.btn}>
            {" "}
            LOG IN{" "}
          </Button>
        </Card>
      </Box>
    </div>
  );
};

export default Banner;
