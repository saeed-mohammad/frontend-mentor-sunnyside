import React from "react";
import content from "./List/ContentList";
import "../style/Egg.scss";
const Egg = () => {
  return (
    <section className="eggGlass" id="Egg">
      {content.map((ct, ind) => (
        <div className={`section ${ct.section}`} key={ind}>
          <div className="img">
            <img src={ct.desk_img} alt={ct.desk_img} className="desktop_img" />
            <img src={ct.mob_img} alt={ct.mob_img} className="mobile_img" />
          </div>
          <div className={`content ${ct.className}`}>
            <div className="content-wrap">
              <h3>{ct.title}</h3>
              <p>{ct.para}</p>
              <a href={`#${ct.anchor}`}>{ct.anchor}</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Egg;
