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
    minutely: [
      {
        dt:'',
      },
    ],
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
          {name} 60 minutes a hours weather Of{" "}
          {dayjs(info.minutely[0].dt * 1000).format("YYYY-MM-DD HH:mm:ss")}~
          {dayjs(info.minutely[info.minutely.length - 1].dt * 1000).format(
            "YYYY-MM-DD HH:mm:ss"
          )}
        </h1>
        <div>
          <ul className="ul-wrap">
            {info.minutely.map((it, index) => (
              <li key={index}>
                <div>
                  <p>
                    time:{dayjs(it.dt * 1000).format("YYYY-MM-DD HH:mm:ss")}
                  </p>
                  <p>precipitation:{it.precipitation}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
