import React from "react";
import { Card } from "./Card";
import sprite from "../../assets/svg/symbol-defs.svg";

import { CategoryList } from "./CategoryStyled";
//

const array = [
  {
    categoryName: "продукты",
    src: `${sprite}#icon-products `,
    price: 700,
    id: "1",
  },
  {
    categoryName: "алкоголь",
    src: `${sprite}#icon-alcohol`,
    price: 570,
    id: "2",
  },
  {
    categoryName: "развлечение",
    src: `${sprite}#icon-kite`,
    price: 480,
    id: "3",
  },
  {
    categoryName: "здоровье",
    src: `${sprite}#icon-hands-holding-heart`,
    price: 930,
    id: "4",
  },
  {
    categoryName: "транспорт",
    src: `${sprite}#icon-car`,
    price: 770,
    id: "5",
  },
  {
    categoryName: "все для дома",
    src: `${sprite}#icon-couch`,
    price: 260,
    id: "6",
  },
  {
    categoryName: "техника",
    src: `${sprite}#icon-tools`,
    price: 1700,
    id: "7",
  },

  {
    categoryName: "коммуналка",
    src: `${sprite}#icon-invoice`,
    price: 700,
    id: "8",
  },
  {
    categoryName: "хобби",
    src: `${sprite}#icon-hobby`,
    price: 800,
    id: "9",
  },
  {
    categoryName: "образование",
    src: `${sprite}#icon-book`,
    price: 1300,
    id: "10",
  },

  {
    categoryName: "прочее",
    src: `${sprite}#icon-other  `,
    price: 84,
    id: "11",
  },
  // {
  //   categoryName: "salary",
  //   src: `${sprite}#icon-salary`,
  //   price: 36,
  //   id: "12",
  // },
  // {
  //   categoryName: "additional-salary",
  //   src: `${sprite}#icon-additional-salary`,
  //   price: 35,
  //   id: "13",
  // },
];
function CategoryReportList() {
  const toRender = array;
  return (
    <>
      <CategoryList>
        {toRender.map(({ id, price, categoryName, src }) => (
          <Card
            key={id}
            id={id}
            total={price}
            categoryName={categoryName}
            svgPath={src}
          />
        ))}
      </CategoryList>
    </>
  );
}

export default CategoryReportList;
