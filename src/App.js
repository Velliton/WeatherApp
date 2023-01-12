/* import logo from './logo.svg'; */
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
      </div>
    </div>
  );
}

export default App;
