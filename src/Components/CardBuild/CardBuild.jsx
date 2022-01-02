import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardBuild.css";

export default function CardBuild(props) {
  return (
    <Card sx={{ maxWidth: 700, marginTop: "1em" }}>
      <CardActionArea>
        <CardMedia component="img" height="180" img src={props.build.image} />

        <CardContent sx={{ backgroundColor: "#fe8b25" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              {/*ítens */}
              {props.build.items.map((item, key) => (
                <img key={key} src={item.image} alt="" style={{ width: "60px", height: "60px", margin: "8px " }} />
              ))}
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              {/*ataques */}
              {props.build.attacks.map((attack, key) => (
                <img key={key} src={attack.image} alt="" style={{ width: "60px", height: "60px", margin: "8px " }} />
              ))}
            </div>
          </div>

          <Typography color="#0e1116" gutterBottom variant="h5" component="div">
            {props.build.name}
          </Typography>
          <h3>{props.build.description}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
