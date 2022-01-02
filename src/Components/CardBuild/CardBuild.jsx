import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardBuild.css";
import DialogItem from "../Dialogs/DialogItem";

export default function CardBuild(props) {
  const [dialogItem, setDialogItem] = React.useState(null);
  const [dialogAttack, setDialogAttack] = React.useState(null);

  const handleCloseDialog = () => {
    setDialogItem(null);
    setDialogAttack(null);
  };

  return (
    <Card sx={{ maxWidth: 700, marginTop: "1em" }}>
      <CardActionArea>
        <CardMedia component="img" height="180" img src={props.build.image} />

        <CardContent sx={{ backgroundColor: "#fe8b25" }}>
          <DialogItem dialogData={dialogItem} handleCloseDialog={handleCloseDialog} />
          <DialogItem dialogData={dialogAttack} isAttack handleCloseDialog={handleCloseDialog} />
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              {/*ítens */}
              {props.build.items.map((item, key) => (
                <>
                  <img key={key} src={item.image} alt="item" style={{ width: "60px", height: "60px", margin: "8px " }} onClick={() => setDialogItem(item)} />
                </>
              ))}
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              {/*ataques */}
              {props.build.attacks.map((attack, key) => (
                <img key={key} src={attack.image} alt="attack" style={{ width: "60px", height: "60px", margin: "8px " }} onClick={() => setDialogAttack(attack)} />
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
