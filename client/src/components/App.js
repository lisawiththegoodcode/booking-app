import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import Bookings from './Bookings'
import CreateBooking from './CreateBooking';
import axios from 'axios';

  class App extends React.Component{
  constructor(props){
      super(props)
      this.state ={
        data:[]
      }
  }
  
  componentDidMount() {
    axios.get('/bookings')
      .then(res => {
        console.log(res);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render(){
    const bookings = this.state;
    console.log(JSON.stringify(bookings));
    return (
      <div className="App">
        <NavBar />
        <div className="App-wrapper">
          <header className="App-header">
            <h1>Bookings</h1>
            <CreateBooking />
          </header>
          <div className="App-main">
            <Bookings bookings={bookings}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;