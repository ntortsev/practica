import React, { useEffect, useState } from "react";

function Catalog({ openCategory }) {
  const categories = ["Смартфоны", "Ноутбуки", "Телевизоры"];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    openCategory("all");
  }, []);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Каталог товаров</button>
      {visible && (
        <ul>
          <li onClick={() => openCategory("all")}>Все</li>
          {categories.map((c, i) => (
            <li
              onClick={() => {
                openCategory(c);
                setVisible(false);
              }}
              key={i}
            >
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Catalog;
