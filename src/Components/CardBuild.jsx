import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Lizard from "../assets/lizard.jpg";
import "../assets/Logo.css";
import Circles from "./Circles";
import Squares from "./Squares";

export default function CardBuild() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" img src={Lizard} />

        <CardContent sx={{ backgroundColor: "#fe8b25" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Squares />
              <Squares />
              <Squares />
              <Squares />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Circles />
              <Circles />
              <Circles />
              <Circles />
            </div>
          </div>

          <Typography color="#0e1116" gutterBottom variant="h5" component="div">
            Charizard: Carry jungle
          </Typography>
          <Typography variant="body2" color="#0e1116">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam volutpat commodo sed. Pharetra
            et ultrices neque ornare. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Et molestie ac feugiat sed lectus vestibulum. Hac habitasse platea dictumst
            quisque sagittis. Volutpat consequat mauris nunc congue nisi vitae. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Pretium lectus quam id leo. Enim nec dui nunc mattis.
            Tortor dignissim convallis aenean et tortor.
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
