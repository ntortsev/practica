import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductPage({ products, openModal }) {
  let { id } = useParams();

  const item = products.find((p) => Number(p.id) === Number(id));

  console.log(item);
  return (
    <div className="item">
      <h2>{item?.name}</h2>
      <img src={item?.img} alt="" />
      <p>{item?.descr}</p>
      <h2>{item?.price} руб</h2>
      <Link to="/">
        <button onClick={openModal}>Оформить заказ</button>
      </Link>
    </div>
  );
}

export default ProductPage;
