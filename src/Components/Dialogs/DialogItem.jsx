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
import "./DialogItem.css";

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
    <DialogTitle className="dialogTitle" sx={{ m: 0, p: 2 }} {...other}>
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
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={props.showDialog}
      >
        <div onMouseLeave={props.closeDialog}>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={props.closeDialog}
          >
            {!props.dialogData === null ? props.dialogData.name : null}
          </BootstrapDialogTitle>
          <DialogContent
            sx={{ border: "none" }}
            dividers
            className="buildItemDialogContainer"
          >
            <img
              className="buildItemDialog"
              src={props.dialogData?.image}
              alt=""
            />
            <Typography gutterBottom>
              {props.dialogData?.description}
            </Typography>
          </DialogContent>
          <DialogContent
            sx={{ border: "none" }}
            dividers
            className="buildItemDialogContainer"
          >
            {props.dialogData?.atributtes === undefined ? (
              <>
                <Typography gutterBottom>
                  Reload Time: {props.dialogData?.reloadTime}
                </Typography>
              </>
            ) : (
              <>
                {props.dialogData?.atributtes?.map((atributte, key) => (
                  <div key={key}>
                    <Typography gutterBottom>
                      {atributte.type}: {atributte.amount}
                    </Typography>
                  </div>
                ))}
              </>
            )}
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
}
