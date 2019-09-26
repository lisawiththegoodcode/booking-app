import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
    backgroundColor: '#f5f5f5',
    fontFamily:'Open Sans',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  tableHead:{
    color: '#000000',
    fontSize: '.9rem',
  },
}));

const rows = [];

function createData(name, email, address, city, state, zip, bookingType, bookingDate, bookingTime) {
  return { name, email, address, city, state, zip, bookingType, bookingDate, bookingTime};
}

function formatDate(date){
  var d = new Date(date);
  var month = d.toLocaleString('en-us', {month: 'long'});
  var day = date.substring(8,10);
  day = day < 10 ? date.substring(9,10) : day;
  var year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}

function formatTime(time){
  return moment(time, 'HH:mm').format('hh:mm a');
}

export default function Bookings(props) {
  const classes = useStyles();
  const string = JSON.stringify(props.bookings);
  const json = JSON.parse(string);
  if(json.data.length !== 0){
    for(var i = 0; i<json.data.length; i++)
    {
      rows.push(createData(`${json.data[i].name}`, 
      `${json.data[i].email}`, 
      `${json.data[i].street_address}`, 
      `${json.data[i].city}`,
      `${json.data[i].state}`, 
      `${json.data[i].zip_code}`,
      `${json.data[i].type}`,
      formatDate(json.data[i].date),
      formatTime(json.data[i].time)));
    }
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
      <TableHead id="Table-head">
          <TableRow >
            <TableCell className={classes.tableHead}>Customer</TableCell>
            <TableCell className={classes.tableHead}align="left">Email</TableCell>
            <TableCell className={classes.tableHead}align="left">Address</TableCell>
            <TableCell className={classes.tableHead}align="right">Booking Type</TableCell>
            <TableCell className={classes.tableHead}align="right">Booking Date/Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.address}<br />{row.city}, {row.state} {row.zip}</TableCell>
                <TableCell align="right">{row.bookingType}</TableCell>
                <TableCell align="right">{row.bookingDate} at {row.bookingTime}</TableCell>         
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}