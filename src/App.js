/* import logo from './logo.svg'; */
import sun from './assets/sun.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='search-box'>
          <i className='fa-solid fa-location-dot'></i>
          <input type="text" placeholder='Enter your location'></input>
          <button className='fa-solid fa-magnifying-glass'></button>
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
