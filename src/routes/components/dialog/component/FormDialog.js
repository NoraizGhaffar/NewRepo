/**
 * Form Dialog
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FileUpload, ArrowDropDown, Add } from '@material-ui/icons';


export default class FormDialog extends React.Component {

   state = {
      open: false,
   };

   handleClickOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };

   render() {
      return (
         <div>
            <div onClick={this.handleClickOpen}> <FileUpload /> Upload Document</div>
            {/* <Button variant="contained" className="btn-info text-white btn-block" onClick={this.handleClickOpen}>Open form dialog</Button> */}
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
               <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     To subscribe to this website, please enter your email address here. We will send
              			updates occationally.
            		</DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
               </DialogContent>
               <DialogActions>
                  <Button variant="contained" onClick={this.handleClose} color="primary" className="text-white">
                     Cancel
            		</Button>
                  <Button variant="contained" onClick={this.handleClose} className="btn-info text-white">
                     Subscribe
            		</Button>
               </DialogActions>
            </Dialog>
         </div>
      );
   }
}
