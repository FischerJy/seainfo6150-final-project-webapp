import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

export default function City() {
  const [info, setInfo] = useState({
    wind: {},
    coord: {},
    main: {},
    weather: [{}],
  });
  const { name } = useParams();

  useEffect(() => {
    var getlist = (name) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d2c0715f020c3a6cd3e893289a84cbc7&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res -> :", res);
          setInfo(res);
        });
    };
    getlist(name);
    return () => {
      getlist = () => {};
    };
  }, [name]);

  return (
    <div className="main">
      <div className="card-wrap">
        <Card {...info} />
      </div>
    </div>
  );
}
