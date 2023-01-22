import "./Main.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyle = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  cardMedia: {
    backgroundImage:
      "http://dannci.wpmasters.org/association/wp-content/uploads/2017/02/pokemon-1548194-798x520.jpg",
  },
});

const Main = () => {
  const classes = useStyle();
  return (
    <Grid item xs={12} md={8}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <CardMedia
            component="img"
            width="100"
            height="194"
            image="http://dannci.wpmasters.org/association/wp-content/uploads/2017/02/pokemon-1548194-798x520.jpg"
            alt="Paella dish"
          />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Restrictions Defined
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                July 31, 2016,
              </Typography>
              <Typography variant="subtitle1" paragraph>
                By Order of the Fire Marshal: The following restrictions shall
                apply to all open fires and the use of fireworks. The
                restrictions will be in effect through July 31, 2016, or until
                conditions improve.
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
              <CardMedia className={classes.cardMedia} />
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default Main;
