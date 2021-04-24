import React, { createRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Days() {
  const [name, setName] = useState("");

  const [info, setInfo] = useState({
    coord: {
      lat: "",
      lon: "",
    },
  });
  const [state, setState] = useState("");

  const node = createRef();
  const his = useHistory();

  useEffect(() => {
    var getlist = (name) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d2c0715f020c3a6cd3e893289a84cbc7&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res -> :", res);
          if (res.cod === "404") {
            setState(res.message);
          } else {
            his.push(`/days/${name}/${res.coord.lat}/${res.coord.lon}`);
          }
        });
    };
    name && getlist(name);
    return () => {
      getlist = () => {};
    };
  }, [his, name]);

  return (
    <div className="main">
      <br />
      <br />
      {state ? (
        <div style={{ textAlign: "center" }}>{state}</div>
      ) : (
        <p style={{ textAlign: "center" }}>
          name: <input type="text" ref={node} />
          <button
            onClick={() => {
              setName(node.current.value);
            }}
          >
            Search
          </button>
        </p>
      )}
    </div>
  );
}
