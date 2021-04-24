import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";
import { Link } from "react-router-dom";
import styles from "./../App.css";
export default function Beijing() {
  const [info, setInfo] = useState({
    wind: {},
    coord: {},
    main: {},
    weather: [{}],
  });

  useEffect(() => {
    var getlist = () => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=d2c0715f020c3a6cd3e893289a84cbc7&units=metric"
      )
        .then((res) => res.json())
        .then((res) => {
          setInfo(res);
        });
    };
    getlist();
    return () => {
      getlist = () => {};
    };
  }, []);

  return (
    <div className="main">
      <div className="card-wrap">
      <Link to="./../Home/Home" className={styles.back}>
        Back
      </Link>
        <Card {...info} />
      </div>
    </div>
  );
}
