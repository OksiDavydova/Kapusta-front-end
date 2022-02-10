import React from 'react';
import { Card } from './Card';

import { CategoryList } from './CategoryStyled';

const array = [
  {
    categoryName: 'продукты',
    src: '#icon-products',
    price: 700,
    id: '1',
  },
  {
    categoryName: 'алкоголь',
    src: '#icon-alcohol',
    price: 570,
    id: '2',
  },
  {
    categoryName: 'развлечение',
    src: '#icon-kite',
    price: 480,
    id: '3',
  },
  {
    categoryName: 'здоровье',
    src: '#icon-hands-holding-heart',
    price: 930,
    id: '4',
  },
  {
    categoryName: 'транспорт',
    src: '#icon-car',
    price: 770,
    id: '5',
  },
  {
    categoryName: 'все для дома',
    src: '#icon-couch',
    price: 260,
    id: '6',
  },
  {
    categoryName: 'техника',
    src: '#icon-tools',
    price: 1700,
    id: '7',
  },

  {
    categoryName: 'коммуналка',
    src: '#icon-invoice',
    price: 700,
    id: '8',
  },
  {
    categoryName: 'хобби',
    src: '#icon-hobby',
    price: 800,
    id: '9',
  },
  {
    categoryName: 'образование',
    src: '#icon-book',
    price: 1300,
    id: '10',
  },

  {
    categoryName: 'прочее',
    src: '#icon-other',
    price: 84,
    id: '11',
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
