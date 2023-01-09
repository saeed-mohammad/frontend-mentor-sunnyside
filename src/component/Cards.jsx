import React from "react";
import cards from "./List/Card";
import "../style/Card.scss";

const Cards = () => {
  return (
    <section className="cards">
      <h4>CLIENT TESTIMONALS</h4>
      <div className="card-container">
        {cards.map((card, ind) => (
          <div className="card-container-items" key={ind}>
            <a href={`#${card.name}`}>
              <div className="card-img">
                <img src={card.profile_img} alt="profile_img" />
              </div>
              <p className="blue-text">{card.para}</p>
              <h5>{card.name}</h5>
              <p className="grey-text">{card.profile}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
