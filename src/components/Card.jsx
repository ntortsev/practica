import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <img width={150} src={product.img} alt="" />
      <h2>{product.price} руб</h2>
      <Link to={`/practica/${product.id}`}>
        <button>Заказать</button>
      </Link>
    </div>
  );
}

export default Card;
