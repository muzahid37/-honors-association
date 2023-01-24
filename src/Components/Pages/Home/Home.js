import { ClassNames } from "@emotion/react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Activities from "./Activities";
import Banner from "./Banner";
import Main from "./Main";
import SideBar from "./SideBar";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Banner />
      <Container>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main />
          <SideBar />
        </Grid>
        <Activities></Activities>
      </Container>
    </div>
  );
};

export default Home;
