import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogTip(props) {
  return (
    <>
      <BootstrapDialog aria-labelledby="customized-dialog-title" open={props.dialogData !== null}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleCloseDialog}>
          {props.dialogData?.name}
        </BootstrapDialogTitle>
        <DialogContent dividers style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img style={{ width: "60px", height: "60px", marginRight: "1em" }} src={props.dialogData?.image} alt="" />
          <Typography gutterBottom>{props.dialogData?.description}</Typography>
        </DialogContent>
        <DialogContent dividers style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <Typography gutterBottom>Atributos:</Typography>
            
          {props.dialogData?.atributtes?.map((atributte) => (
            <Typography gutterBottom>{atributte.type}: {atributte.amount}</Typography>
          ))} */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleCloseDialog}>
            Entendi
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
