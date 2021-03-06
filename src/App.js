import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import M from 'materialize-css'
import { Header } from './Header';
import Modal from './Modal';



class App extends Component {
  constructor() {
    super()
    this.state = {
      temp: '',
      cityName: '',
      weather:'',
      high: '',
      low: '',
      icon: '',
      showModal: false,
    }
  }
  
  componentDidMount() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    axios.get(url).then((res) => {
      console.log(res.data);
      console.log(res.data.weather[0].icon);
      this.setState({
        temp: res.data.main.temp,
        cityName: res.data.main.name,
        weather:res.data.main.description,
        high: res.data.main.temp_max,
        low: res.data.main.temp_min,
        icon: res.data.weather[0].icon,
      })
    })
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  }

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`

    return (
      <div className="App">
        <Header cityName={this.state.cityName} temp={this.state.temp} />
        <Modal 
          cityName={this.state.cityName} 
          high={this.state.high}
          low={this.state.low}
          weather={this.state.weather}
          icon={iconUrl}
        />

      </div>
    );
  }
}

export default App;
