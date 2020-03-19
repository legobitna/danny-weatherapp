import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// this is a test

function App() {
 let [weather, setWeather]=useState(null);

  let currentWeather = async (lat, lon) => {
    const api = "6a881f9013566155ac46834f4a78db79"
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
    let data = await fetch(url);
    let result = await data.json();

     console.log("result", result)
    setWeather(result)
    
  };

  let getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {currentWeather(position.coords.latitude, position.coords.longitude);
    });
  }

  

useEffect(getLocation, []);
if(weather == null){
  return <div class="red">loading...</div>
}

  return (
    <div className="container-fluid text-white my-auto">
      <div className="container mx-auto my-4 py-4">
        <div className="row justify-content-center text-center">
          <h1 className="col-12 display-4 my-2 py-3 text-success">
            Awesome Weather App
          </h1>
          <h1 className="col-12">{weather.name}</h1>
          <h2 className="col-12">{weather.weather[0].description}</h2>
          <h2 className="col-12">{ weather.main.temp}c</h2>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}



export default App;
