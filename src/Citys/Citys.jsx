import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

var list = ["London", "Lobeira", "Cudillero", "Colunga", "Somiedo", "Shanghai"];

export default function Citys() {
  return (
    <div className="city-list" style={{ textAlign: "center" }}>
      {list.map((it, index) => (
        <Link to={`/city/${it}`} key={index}>
          {it}
        </Link>
      ))}
    </div>
  );
}
