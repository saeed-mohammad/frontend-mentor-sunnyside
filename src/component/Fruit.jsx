import React from "react";
import "../style/Fruit.scss";
import fruits from "./List/Fruits";
import "../style/Egg.scss";
const Fruit = () => {
  return (
    <section className="fruit">
      {fruits.map((fruit, ind) => (
        <div className={`fruit-section ${fruit.cName}`} key={ind}>
          <h3>{fruit.title}</h3>
          <p>{fruit.para}</p>
        </div>
      ))}
    </section>
  );
};

export default Fruit;
