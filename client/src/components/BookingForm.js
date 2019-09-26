import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import axios from 'axios';

class BookingForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            street_address: '',
            city: '',
            state: '',
            zip_code: '',
            type: 'Dog Walk',
            date: '',
            time: ''
        }
    }

  changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value});
  };

  submitHandler = (e) => {
    //   e.preventDefault();
      console.log(this.state);
      axios.post('/bookings/create', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    
  };

render(){
    const {
        name,
        email,
        street_address,
        city,
        state,
        zip_code,
        type,
        date,
        time } = this.state;

    return(
        <form id="booking-form" onSubmit={this.submitHandler} noValidate>
            <div className="form-left">
                <div className="form-flexCol">
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={this.changeHandler} required />
                </div>
                <div className="form-flexCol">
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={this.changeHandler} required />
                </div>
                <div className="form-flexCol"> 
                    <label>Street Address</label>
                    <input type="text" name="street_address" value={street_address} onChange={this.changeHandler} required />
                </div>
                <div className="form-flexCol">
                    <label>City</label>
                    <input type="text" name="city" value={city} onChange={this.changeHandler} required />
                </div>
                <div className="form-flexRow">
                    <div id="form-half-left" className="form-flexCol">
                        <label>State</label>
                        <input type="text" name="state" value={state} onChange={this.changeHandler} required />
                    </div>
                    <div id="form-half-right" className="form-flexCol">
                        <label>Zip code</label>
                        <input type="text" name="zip_code" value={zip_code} onChange={this.changeHandler} required />
                    </div>
                </div>
            </div>
            <div className="form-right">
                <div className="form-flexCol">
                <label>Booking type</label>
                <select name = "type" value={type} onChange={this.changeHandler}>
                    <option value="Dog Walk">Dog Walk</option>
                    <option value="Housekeeping">Housekeeping</option>
                </select>
                </div>
                <div className="form-flexCol">
                    <label>Booking Date</label>
                    <input type="date" name="date" value={date} onChange={this.changeHandler}/>
                </div>
                <div className="form-flexCol">
                    <label>Booking Time</label>
                    <input type="time" name="time" value={time} onChange={this.changeHandler}/>
                </div>
                <Button id="submit-booking" type="submit" variant="contained">Create booking</Button>
            </div>
        </form>
    )
    }
};

export default BookingForm;