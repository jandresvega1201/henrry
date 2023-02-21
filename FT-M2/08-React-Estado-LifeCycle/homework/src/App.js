import React, { useState }from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from "./components/Cards";
export default function App() {
    const [cities, setCities] = useState([])
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
    function onSearch(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(respuesta => respuesta.json())
            .then(resp_json => {
                if (resp_json.main !== undefined) {
                    const city = {
                        min: Math.round(resp_json.main.temp_min),
                        max: Math.round(resp_json.main.temp_max),
                        img: resp_json.weather[0].icon,
                        id: resp_json.id,
                        wind: resp_json.wind.speed,
                        temp: resp_json.main.temp,
                        name: resp_json.name,
                        weather: resp_json.weather[0].main,
                        clouds: resp_json.clouds.all,
                        latitud: resp_json.coord.lat,
                        longitud: resp_json.coord.lon
                    };
                    setCities(ciudades => [...ciudades, city])
                }else {
                    alert("City not find")
                }
                console.log(resp_json)
            })
    }
    function cerrar(id) {
        setCities(cities => cities.filter(c => c.id !== id));
    }
    return (

        <div className="App">
            <Nav onSearch={onSearch}/>
            <Cards cities={cities} onClose={cerrar}
            />
        </div>
    )
}
