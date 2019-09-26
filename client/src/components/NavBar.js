import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bar:{
    boxShadow: 'none',
    position: 'fixed',
    backgroundColor: '#FFFFFF',
    color: 'black',
    letterSpacing: '.05em',
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <h2>BOOKING APP <span role="img" aria-label="open book">📖</span></h2>
        </Toolbar>
      </AppBar>
    </div>
  );
}
