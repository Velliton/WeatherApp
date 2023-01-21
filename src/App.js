/* import logo from './logo.svg'; */
import sun from './assets/sun.png'
import found from './assets/found.png'
import './App.css';
import axios from 'axios';
import React from "react";

function App() {

  const [items, setItems] = React.useState({});
  const [location,setLocation]=React.useState('');
  

  const onChangeSearchInput=(event)=>{
    setLocation(event.target.value);
  }

  const getItems = async () => {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7c0558b2e6442617079a4d3969b14035');
    const resData = res.data;
    setItems(resData);
  }
  getItems();  

/* 
  React.useEffect(() => {

      
  }, []); */
  console.log(items);

 
  console.log(location);

  return (
    <div className="App">
      <div className='container'>
        <div className='search-box'>
          <i className='fa-solid fa-location-dot'></i>
          <input
            type="text" 
            placeholder='Enter your location'
            value={location} 
            onChange={onChangeSearchInput} 
            >
          </input>
          <button onClick={getItems} className='fa-solid fa-magnifying-glass'></button>
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
