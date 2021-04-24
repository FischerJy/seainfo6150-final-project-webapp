import React, { createRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function DayDetail() {
  const { lat, lon, name, dt } = useParams();

  const [info, setInfo] = useState({
    wind: {},
    coord: {},
    main: {},
    weather: [{}],
  });

  useEffect(() => {
    var getlist = ({ lat, lon, dt }) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?dt=${dt}&lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=d2c0715f020c3a6cd3e893289a84cbc7&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res -> :", res);
          setInfo(res.current);
        });
    };
    getlist({ lat, lon, dt });
    return () => {
      getlist = () => {};
    };
  }, [lat, lon, dt]);

  return (
    <div className="main">
      <br />
      <br />
      <div>
        <h1>
          {name} Weathers Of {dayjs(dt * 1000).format("YYYY-MM-DD")}
        </h1>

        <div className="card-wrap-a" >
          <div>
            <p>temp : {info.temp}</p>
            <p>wind_speed : {info.wind_speed}</p>
            <p>clouds : {info.clouds}%</p>
            <p>feels_like : {info.feels_like}</p>
            <p>visibility : {info.visibility}m</p>
          </div>
        </div>
      </div>
    </div>
  );
}
