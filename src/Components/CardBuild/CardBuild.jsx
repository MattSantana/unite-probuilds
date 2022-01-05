import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardBuild.css";
import DialogItem from "../Dialogs/DialogItem";
import { useState } from "react";
import { isMobile } from "react-device-detect";

export default function CardBuild(props) {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogData, setDialogData] = useState(null);

  const dialogHandler = (data) => {
    console.log(data)
    setShowDialog(!showDialog);
    setDialogData(data);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setTimeout(() => setDialogData(null), 100);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia component="img" height="180" src={props.build.image} />

        <CardContent sx={{ backgroundColor: "#fe8b25" }}>
          <DialogItem dialogData={dialogData} showDialog={showDialog} closeDialog={closeDialog} />
          <div className="buildItemContainer">
            <div className="buildItemRow">
              {/*ítens */}
              {props.build.items.map((item) => (
                <img key={item.name} src={item.image} alt="item" className="buildItem" onMouseEnter={!isMobile ? () => dialogHandler(item) : null} onClick={isMobile ? () => dialogHandler(item) : null} />
              ))}
            </div>
            <br />
            <div className="buildItemRow">
              {/*ataques */}
              {props.build.attacks.map((attack, key) => (
                <img key={key} src={attack.image} alt="attack" className="buildItem" onMouseEnter={() => dialogHandler(attack)} onClick={isMobile ? () => dialogHandler(attack) : null} />
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
