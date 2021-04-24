import React, { createRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function HoursDetail() {
  const { lat, lon, name, dt } = useParams();

  const [info, setInfo] = useState({
    current: {},
    daily: [],
    hourly: [],
    lat: "",
    lon: "",
    minutely: [],
    timezone: "",
  });

  useEffect(() => {
    var getlist = ({ lat, lon, dt }) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?dt=${dt}&lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=d2c0715f020c3a6cd3e893289a84cbc7&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res -> :", res);
          setInfo(res);
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
          {name} 48 hours a day weather Of{" "}
          {dayjs(dt * 1000).format("YYYY-MM-DD")}
        </h1>
        <div>
          <ul className="ul-wrap">
            {info.hourly.map((it, index) => (
              <li key={index}>
                <Link to={`/mins/${name}/${info.lat}/${info.lon}/${it.dt}`}>
                  <div>
                    <div>
                      <p>
                        time:{dayjs(it.dt * 1000).format("YYYY-MM-DD HH:mm:ss")}
                      </p>
                    </div>
                    <div>
                      <p>temp:{it.temp}</p>
                      <p>wind_deg:{it.wind_deg}</p>
                    </div>
                    <div>
                      <p>clouds:{it.clouds}%</p>
                      <p>feels_like:{it.feels_like}</p>
                    </div>
                    <p>visibility:{it.visibility}m</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
