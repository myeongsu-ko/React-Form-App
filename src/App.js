import React, { createRef, useState } from "react";
import "./App.css";

function App() {
  const [data, setDate] = useState([
    { id: 1, name: "cos" },
    { id: 2, name: "ssar" },
    { id: 3, name: "lala" },
    { id: 4, name: "kaka" },
  ]);
  //버튼 클릭했을때 kaka 의 색을 blue로 바꾸고 싶다.

  const h1Element = Array.from({ length: data.length }).map(() => createRef());
  //객체 4개 만들고

  const changeColor = () => {
    h1Element[2].current.style.color = "red";
  };
  return (
    <div>
      {data.map((d) => (
        <h1 ref={h1Element[d.id - 1]}>{d.name}</h1>
      ))}
      <button onClick={changeColor}>클릭</button>
    </div>
  );
}

export default App;
