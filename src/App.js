/* import logo from './logo.svg'; */
import sun from './assets/sun.png'
import found from './assets/found.png'
import './App.css';
import axios from 'axios';
import React from "react";

function App() {

  const APIKey='7c0558b2e6442617079a4d3969b14035';

  React.useEffect(() => {

    const getItems = async () => {
      const res = await axios.get('http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=${APIKey}');
      const resData = res.data;
      console.log(resData);
    }
    getItems();    
  }, [])


  return (
    <div className="App">
      <div className='container'>
        <div className='search-box'>
          <i className='fa-solid fa-location-dot'></i>
          <input type="text" placeholder='Enter your location'></input>
          <button className='fa-solid fa-magnifying-glass'></button>
        </div>

        <div className='not-found'>
          <img src={found}></img>
          <p>Oops! Invalid Location</p>
        </div>

        <div className='weather-box'>
          <img src={sun}></img>
          <p className='temperature'>22 
            <span>°C</span>
          </p>
          <p className='description'>Clear sky</p>
        </div>

        <div className='weather-details'>
          <div className='humidity'>
            <i className='fa-solid fa-water'></i>
            <div className='text'>
              <span>50%</span>
              <p>Humidity</p>
            </div>
          </div>
          <div className='wind'>
            <i className='fa-solid fa-wind'></i>
            <div className='text'>
              <span>5km\h</span>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
