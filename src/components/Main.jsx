import React from "react";
import Catalog from "./Catalog";
import Card from "./Card";

function Main({ openCategory, filteredProducts, showModal }) {
  return (
    <div>
        <p>Продажа цифровых устройств. Контакты: 8-800-555-35-35. Адрес: Ул.Пушкина 1</p>
      {showModal && <div className="modal">Заказ оформлен</div>}
      <Catalog openCategory={openCategory} />
      <div className="products">
        {filteredProducts.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Main;
