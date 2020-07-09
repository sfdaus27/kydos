import React from "react";
import "./Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
  },
  media: {
    height: 280,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://cdn.discordapp.com/attachments/312173234663718913/729928361303998504/IMG_3890.JPG"
        title="Kydos Crop Hoodie"
      />
      <CardActions>
        <div class="wrapperText">
          <Typography class="contName" variant="h6" component="h2">
            Kydos Crop Hoodie
          </Typography>
          <Typography gutterBottom>Rp 350,000</Typography>
        </div>
      </CardActions>
    </Card>
  );
}
