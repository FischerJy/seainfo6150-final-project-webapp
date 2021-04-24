import React from "react";
import { Link } from "react-router-dom";

export default function Card(info) {
  return (
    <div className="card">
      <p>name:{info.name}</p>
      <p>lat:{info.coord.lat}</p>
      <p>lon:{info.coord.lon}</p>
      <br />
      <div>
        wind
        <p>speed:{info.wind.speed}</p>
        <p>deg:{info.wind.deg}</p>
      </div>
      <br />
      <div>
        temp
        <p>temp:{info.main.temp}</p>
        <p>temp_max:{info.main.temp_max}</p>
        <p>temp_min:{info.main.temp_min}</p>
      </div>
      <br />
      <div>
        weather
        <p>main:{info.weather[0].main}</p>
        <p>description:{info.weather[0].description}</p>
        <p>
          <Link
            to={`/hours/${info.name}/${info.coord.lat}/${info.coord.lon}/${info.dt}`}
          >
            Hours Detail
          </Link>
        </p>
      </div>
    </div>
  );
}
