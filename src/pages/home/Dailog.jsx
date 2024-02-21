
import React, { Fragment, useRef } from "react";
import logo from "../../img/logo.png";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const Dailog = ({open,setOpen,handleClose}) => {
  return (
    <div >
          <Dialog open={open} handleClose={handleClose} >
            <DialogTitle style={{ fontWeight:'bold'}}>Contact Me</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To get in touch enter following details and my team will get
                back to you.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Mobile"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="message"
                label="Message"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained">Cancel</Button>
              <Button onClick={handleClose} variant="contained">Submit</Button>
            </DialogActions>
          </Dialog>
        </div>
  )
}

export default Dailog