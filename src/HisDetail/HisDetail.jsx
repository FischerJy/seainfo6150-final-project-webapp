import React, { createRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

var day3Time = (() => {
  var arr = [];
  for (let index = 0; index < 3; index++) {
    arr.push(dayjs().subtract(index, "day").unix());
  }
  return arr;
})();

export default function HistoryDetail() {
  const { lat, lon, name, dt } = useParams();

  const [info, setInfo] = useState([
    {
      current: {
        dt: "",
      },
    },
  ]);

  useEffect(() => {
    var getlist = ({ lat, lon, dt }) => {
      var ajaxArr = day3Time.map(async (it) => {
        return await fetch(
          `https://api.openweathermap.org/data/2.5/onecall/timemachine?dt=${it}&lat=${lat}&lon=${lon}&appid=d2c0715f020c3a6cd3e893289a84cbc7&units=metric`
        ).then((res) => res.json());
      });

      Promise.all([...ajaxArr]).then((res) => {
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
          {name} 3 day Historical Weather Data{" "}
          {dayjs(day3Time[0] * 1000).format("YYYY-MM-DD")} ~
          {dayjs(day3Time[2] * 1000).format("YYYY-MM-DD")}
        </h1>
        <div>
          <ul className="ul-wrap">
            {info.map((it, index) => (
              <li key={index}>
                <div>
                  <p>
                    time:
                    {dayjs(it.current.dt * 1000).format("YYYY-MM-DD HH:mm:ss")}
                  </p>
                  <p>temp:{it.current.temp}</p>
                  <p>wind_deg:{it.current.wind_deg}</p>
                  <p>clouds:{it.current.clouds}%</p>
                  <p>feels_like:{it.current.feels_like}</p>
                  <p>visibility:{it.current.visibility}m</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
