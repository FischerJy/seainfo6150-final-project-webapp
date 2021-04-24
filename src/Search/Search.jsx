import React, { createRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search() {
  const node = createRef();
  const his = useHistory();

  return (
    <div>
      <br />
      <br />
      <p style={{ textAlign: "center" }}>
        name: <input type="text" ref={node} />
        <button
          onClick={() => {
            his.push("/search/" + node.current.value);
          }}
        >
          Search
        </button>
      </p>
    </div>
  );
}
