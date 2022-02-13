import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useState, useEffect } from "react";

import { Card } from "./Card";

import { CategoryList, CategoryListWrapper } from "./CategoryStyled";
// import { ChartMobile } from "../Chart";
import { CashPicker } from "./CashPicker";

// const array = [
//   {
//     categoryName: "продукты",
//     src: `#icon-products `,
//     price: 700,
//     id: "1",
//   },
//   {
//     categoryName: "алкоголь",
//     src: `#icon-alcohol`,
//     price: 570,
//     id: "2",
//   },
//   {
//     categoryName: "развлечение",
//     src: `#icon-kite`,
//     price: 480,
//     id: "3",
//   },
//   {
//     categoryName: "здоровье",
//     src: `#icon-hands-holding-heart`,
//     price: 930,
//     id: "4",
//   },
//   {
//     categoryName: "транспорт",
//     src: `#icon-car`,
//     price: 770,
//     id: "5",
//   },
//   {
//     categoryName: "все для дома",
//     src: `#icon-couch`,
//     price: 260,
//     id: "6",
//   },
//   {
//     categoryName: "техника",
//     src: `#icon-tools`,
//     price: 1700,
//     id: "7",
//   },

//   {
//     categoryName: "коммуналка",
//     src: `#icon-invoice`,
//     price: 700,
//     id: "8",
//   },
//   {
//     categoryName: "хобби",
//     src: `#icon-hobby`,
//     price: 800,
//     id: "9",
//   },
//   {
//     categoryName: "образование",
//     src: `#icon-book`,
//     price: 1300,
//     id: "10",
//   },

//   {
//     categoryName: "прочее",
//     src: `#icon-other  `,
//     price: 84,
//     id: "11",
//   },
//   // {
//   //   categoryName: "salary",
//   //   src: `${sprite}#icon-salary`,
//   //   price: 36,
//   //   id: "12",
//   // },
//   // {
//   //   categoryName: "additional-salary",
//   //   src: `${sprite}#icon-additional-salary`,
//   //   price: 35,
//   //   id: "13",
//   // },
// ];

function CategoryReportList({ children }) {
  // ---------------------------Кусок кода Влада----Просто закомментировал, т.к. не разобрался------
  // --------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-----------------------------

  // const [data, setData] = useState(() => {
  //   return children.filter(el => {
  //     return {
  //       categoryName: el.categoryName,
  //       sum: el.sum,
  //     };
  //   });
  // });

  // useEffect(() => {
  //   const filterArray = children.filter(el => {
  //     return {
  //       categoryName: el.categoryName,
  //       sum: el.sum,
  //     };
  //   });
  //   setData(filterArray);
  // }, [children]);

  // console.log("CategoryReportList", children);

  // const onClick = e => {
  //   children.find(el => {
  //     if (el.categoryName === e.target.name) {
  //       return setData(el.data);
  //     }
  //   });
  // };

  // ------------------------Конец куска кода------------------------
  // ----------------------!!!!!!!!!!!!!!!!!!!!!!!!--------------------

  // НИЖЕ МОЙ КУСОК КОДА, КОТОРЫЙ НАПИСАЛ, ЧТОБЫ РИСОВАЛИСЬ ИКОНКИ -----------------

  const [data, setData] = useState(children.filter(item => item.expense));
  const [filter, setFilter] = useState([]);
  const [chartData, setChartData] = useState([1, 2, 3]);

  const updateData = value => {
    setData(value);
  };

  const updateChartData = value => {
    const filteredChartData = data.filter(item => item.category === value);
    setChartData(filteredChartData);
  };

  useEffect(() => {
    function categoryArr(data) {
      let set = new Set();
      data.map(item => {
        for (let key in item)
          if (item[key] === item.category) set.add(item[key]);
      });
      return Array.from(set);
    }

    const arr = categoryArr(data);

    function filteredArr(data, arr) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        let value = 0;
        data.map(item => {
          if (item.category === arr[i]) value += item.value;
        });
        result.push({ category: arr[i], value: value });
      }
      return result.sort((a, b) => b.value - a.value);
    }

    setFilter(filteredArr(data, arr));
  }, [data]);

  return (
    <CategoryListWrapper>
      <CashPicker children={children} updateData={updateData} />
      <CategoryList>
        {/* ------------------Кусок кода Влада, который просто закомментировал */}
        {/* {children.map(({ id, price = 500, categoryName, src }) => (
          <Card
            key={id}
            id={id}
            total={price}
            categoryName={categoryName}
            svgPath={src}
            onClick={onClick}
          />
        ))} */}
        {filter.map(({ value, category }) => (
          <Card
            key={uuidv4()}
            value={value}
            category={category}
            updateChartData={updateChartData}
          />
        ))}
      </CategoryList>
      {/* <ChartMobile chartData={chartData}></ChartMobile> */}
    </CategoryListWrapper>
  );
}

export default CategoryReportList;
