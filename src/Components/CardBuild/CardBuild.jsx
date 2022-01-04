import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardBuild.css";
import DialogItem from "../Dialogs/DialogItem";
import BuildFoto from "../../assets/lizard.jpg"

export default function CardBuild(props) {
  const [dialogItem, setDialogItem] = React.useState(null);
  const [dialogAttack, setDialogAttack] = React.useState(null);

  const handleCloseDialog = () => {
    setDialogItem(null);
    setDialogAttack(null);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia component="img" height="180" src={props.build.image} />

        <CardContent sx={{ backgroundColor: "#fe8b25" }}>
          <DialogItem dialogData={dialogItem} handleCloseDialog={handleCloseDialog} />
          <DialogItem dialogData={dialogAttack} handleCloseDialog={handleCloseDialog} isAttack/>
          <div className="buildItemContainer">
            <div className="buildItemRow">
              {/*ítens */}
              {props.build.items.map((item, key) => (
                <img key={key} src={item.image} alt="item" className="buildItem" onClick={() => setDialogItem(item)} />
              ))}
            </div>
            <br />
            <div className="buildItemRow">
              {/*ataques */}
              {props.build.attacks.map((attack, key) => (
                <img key={key} src={attack.image} alt="attack" className="buildItem" onClick={() => setDialogAttack(attack)} />
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
