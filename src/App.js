import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchWeather} from './api/fetchWeather';

const App = () => {
  const [query,setQuery] = React.useState('');
  const [weather,setWeather] = React.useState('');

  const search = async (e) => {
   // debugger
    if(e.key === 'Enter'){
      const data = await fetchWeather(query)
      
      console.log(data);
      setWeather(data);
      setQuery('') // reset query
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="main-conteiner">
        <input 
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          onKeyPress={search}
         />
           {weather.main && (
             <div className="city">
               <h2 className="city-name">
                 <span>{weather.name}</span>
                 <sup>{weather.sys.country}</sup>
               </h2>
               <div className="city-temp">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
                </div>
                <div>
                    <img className="city-icon" src={
                     `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                     alt={weather.weather[0].description} ></img>
                     <p>{weather.weather[0].description}</p>
                </div>
              </div>
            
           )}
    </div>
    </div>
  );
}

export default App;
