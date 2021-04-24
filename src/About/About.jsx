import React from "react";
import styles from "./About.moudle.css"
import weather from "../images/weather.png"

export default function About() {
  return (
    <div className="main">
      <article className={styles.article}>
        <p>This website mainly uses the weather API to display the data of several key cities, and contains multiple functions and content.</p>
        <p>This website provides access to weather data from any location on Earth, including more than 200,000 cities, and provides historical, current and forecast weather data.</p>
        </article>
      <img src={weather} width="100%" height="100%" alt="weather" />
    </div>
  );
}
