/* import logo from './logo.svg'; */
import sun from './assets/sun.png'
import found from './assets/found.png'
import './App.css';
import axios from 'axios';
import React from "react";

function App() {

  const [items, setItems] = React.useState({});
  const [location,setLocation]=React.useState('');
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7c0558b2e6442617079a4d3969b14035`;

  const searchLocation=(event)=>{
    if (event.key==='Enter'){
      axios.get(url).then((response)=>{
      setItems(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='search-box'>
          <i className='fa-solid fa-location-dot'></i>
          <input
            type="text" 
            placeholder='Enter your location'
            value={location} 
            onChange={event=>setLocation(event.target.value)} 
            onKeyPress={searchLocation}
            >
          </input>
          <button className='fa-solid fa-magnifying-glass'></button>
        </div>

        <div className='not-found'>
          <img src={found}></img>
          <p>Oops! Invalid Location</p>
        </div>

        <div className='weather-box'>
          <img src={sun}></img>
          {items.main?<p className='temperature'>{items.main.temp}<span>°C</span>
          </p>:null}
          
          
            
         {items.weather?<p className='description'>{items.weather[0].description}</p>:null} 
        </div>

        <div className='weather-details'>
          <div className='humidity'>
            <i className='fa-solid fa-water'></i>
            <div className='text'>
            {items.main?<span>{items.main.humidity}%</span>:null}
              <p>Humidity</p>
            </div>
          </div>
          <div className='wind'>
            <i className='fa-solid fa-wind'></i>
            <div className='text'>
            {items.wind?<span>{items.wind.speed}km\h</span>:null}
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
