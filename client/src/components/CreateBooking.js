import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import '../App.css';
import BookingForm from './BookingForm';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: '#f29648',
    textTransform: 'none',
    fontFamily: 'Open Sans',
    fontSize: '.7em',
  },
  paper: {
    position: 'absolute',
    width: 440,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

export default function CreateBooking() {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} className={classes.button}>Create booking</Button>
        <ClickAwayListener onClickAway={handleClickAway} >
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Create booking
            </Typography>
            <BookingForm />
          </div>
        </Modal>
      </ClickAwayListener>
    </div>
  );
}