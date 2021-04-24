import React, { createRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Days() {
  const { lat, lon, name } = useParams();

  const [info, setInfo] = useState({
    daily: [
      {
        temp: {},
      },
    ],
  });

  useEffect(() => {
    var getlist = ({ lat, lon }) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=d2c0715f020c3a6cd3e893289a84cbc7&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res -> :", res);
          setInfo(res);
        });
    };
    getlist({ lat, lon });
    return () => {
      getlist = () => {};
    };
  }, [lat, lon]);

  return (
    <div className="main">
      <br />
      <br />
      <div>
        <h1>{name} Weathers Of 7 Days</h1>

        <div className="card-wrap">
          {info.daily.map((it, index) => (
            <div className="card" key={index}>
              <Link to={`/day/${name}/${lat}/${lon}/${it.dt}`}>
                <div>
                  <p>
                    Time:
                    {dayjs(it.dt * 1000).format("YYYY-MM-DD")}
                    <br />
                    {new Date(it.dt * 1000).toLocaleDateString("en", {
                      weekday: "long",
                    })}
                  </p>
                  <p>Temp:{it.temp.day}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
