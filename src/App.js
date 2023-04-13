import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";

function App() {
  const products = [
    {
      id: 1,
      category: "Ноутбуки",
      name: "Ноутбук Huawei MateBook D 15 BOD-WDI9",
      img: "https://cdn.citilink.ru/S__-AxTo4kIvGP3fqfHzBMlCjupuKbQkF0zVhQrniZY/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1774325_v01_b.jpg",
      price: 36990,
      descr:
        '15.6", IPS, Intel Core i3 1115G4 3.0ГГц, 2-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel UHD Graphics , Windows 11 Home, серый [53013ghc]',
    },
    {
      id: 2,
      category: "Ноутбуки",
      name: "Ноутбук игровой HIPER G16",
      img: "https://cdn.citilink.ru/kaXhkz5iAWY-yiGXGxJIfZgJOvxv104o0J5k3lNg-M4/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1842990_v01_b.jpg",
      price: 175340,
      descr:
        "IPS, Intel Core i7 11700 2.5ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Windows 11 Professional, черный [g16rtx3070a11700w11]",
    },
    {
      id: 3,

      category: "Смартфоны",
      name: "Смартфон Huawei nova Y90 4/128Gb, зеленый",
      img: "https://cdn.citilink.ru/rCQm0Sw3rOXjgi_Vc4WMDOgvMtdkaGRUyMDsYk2XzQE/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1809822_v01_b.jpg",
      price: 49990,
      descr:
        "Смартфон Huawei Nova Y90 имеет большой объем оперативной памяти и производительную операционную систему. Это позволяет общаться с близкими, играть, загружать и запускать приложения без торможения работы устройства.",
    },
    {
      id: 4,
      category: "Смартфоны",
      name: "Смартфон Huawei Mate 50 8/256Gb, серебристый",
      img: "https://cdn.citilink.ru/dodxEaho_qZYqAebM2iwAPVTSJNfFg-i2IYmlFwMjPk/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1892198_v01_b.jpg",
      price: 49990,
      descr:
        "Смартфон Huawei Mate 50 представлен в корпусе из пластика и алюминия со степенью защиты IP68, которая обеспечивает устойчивость к влаге и пыли.",
    },
    {
      id: 5,
      category: "Телевизоры",
      name: '32" Телевизор SunWind SUN-LED32XB200, HD, черный ',
      img: "https://cdn.citilink.ru/T3DZ3W7OZsF1hXZbdM30zq2FUsQ5vwEhREtF0PUlw1A/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1779004_v01_b.jpg",
      price: 7490,
      descr:
        "Диагональ экрана устройства составляет 32 дюйма (81 см), он поддерживает воспроизведение медиаконтента с максимальным разрешением до 1368х768 пикселей в формате HD. Дисплей данной модели обновляется с частотой 60 Гц – оптимальной для кино, динамичных спортивных матчей и видеоигр, а его углы обзора настолько широки, что достигают 178 градусов в обеих ориентациях. Яркость и контраст прибора подобраны таким образом, чтобы смотреть происходящее на нём было комфортно из любой точки помещения.",
    },
    {
      id: 6,
      category: "Телевизоры",
      name: '43" Телевизор Hyundai H-LED43BU7003',
      img: "https://cdn.citilink.ru/iMVJOdvs5cfnUDGl_yoc6zhKGn26rurI2SaMUCfLMcA/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1783632_v01_b.jpg",
      price: 22990,
      descr:
        "Инновационная технология Precision Colour совершенствует цветопередачу. Матрица 10 бит открывает зрителям обширную палитру оттенков. Умные алгоритмы передают четкие насыщенные тона. На экране телевизора отображаются мельчайшие детали, картинка перед вами словно оживает.",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showModal, setShowModal] = useState(false);

  const openCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              showModal={showModal}
              filteredProducts={filteredProducts}
              openCategory={openCategory}
            />
          }
        />
        <Route
          path="/:id"
          element={<ProductPage openModal={openModal} products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
