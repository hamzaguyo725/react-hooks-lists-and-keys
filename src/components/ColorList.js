import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "red",
  ];

  const colorElement = colors.map((name)=> {return <li style={{colors:name}}>{name}</li>})

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
       {colorElement}
      </ol>
    </div>
  );
}

export default ColorList;
