import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CATEGORIES_FOR_SELECT } from "../../const/constants";
const data = [
  {
    _id: {
      description: "3п",
      category: "зп",
      income: true,
    },
    totalDescription: 20000,
  },
  {
    _id: {
      description: "хлеб",
      category: "продукты",
      income: false,
    },
    totalDescription: 2600,
  },
  {
    _id: {
      description: "хлебушек",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "3п",
      category: "зп",
      income: true,
    },
    totalDescription: 25200,
  },
  {
    _id: {
      description: "йогурт",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "ж.д билеты",
      category: "транспорт",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "маршрутка",
      category: "транспорт",
      income: false,
    },
    _id: {
      description: "Бухлишко",
      category: "алкоголь",
      income: false,
    },
    totalDescription: 5000,
  },
  {
    _id: {
      description: "Украл батончик",
      category: "доп. доход",
      income: true,
    },
    totalDescription: 20,
  },

  {
    _id: {
      description: "хлебушек",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "Учеба",
      category: "образование",
      income: false,
    },
    totalDescription: 25200,
  },
  {
    _id: {
      description: "йогурт",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "студентческий",
      category: "образование",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "Учеба",
      category: "образование",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "Бухлишко",
      category: "алкоголь",
      income: false,
    },
    totalDescription: 5000,
  },
  {
    _id: {
      description: "Украл батончик",
      category: "доп. доход",
      income: true,
    },
    totalDescription: 20,
  },
  {
    _id: {
      description: "3п",
      category: "зп",
      income: true,
    },
    totalDescription: 20000,
  },
  {
    _id: {
      description: "хлеб",
      category: "продукты",
      income: false,
    },
    totalDescription: 2600,
  },
  {
    _id: {
      description: "хлебушек",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "3п",
      category: "зп",
      income: true,
    },
    totalDescription: 25200,
  },
  {
    _id: {
      description: "йогурт",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "ж.д билеты",
      category: "транспорт",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "маршрутка",
      category: "транспорт",
      income: false,
    },
    _id: {
      description: "Бухлишко",
      category: "алкоголь",
      income: false,
    },
    totalDescription: 5000,
  },
  {
    _id: {
      description: "Украл батончик",
      category: "доп. доход",
      income: true,
    },
    totalDescription: 20,
  },
  {
    _id: {
      description: "3п",
      category: "зп",
      income: true,
    },
    totalDescription: 20000,
  },
  {
    _id: {
      description: "хлеб",
      category: "продукты",
      income: false,
    },
    totalDescription: 2600,
  },
  {
    _id: {
      description: "хлебушек",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "3п",
      category: "зп",
      income: true,
    },
    totalDescription: 25200,
  },
  {
    _id: {
      description: "йогурт",
      category: "продукты",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "ж.д билеты",
      category: "транспорт",
      income: false,
    },
    totalDescription: 700,
  },
  {
    _id: {
      description: "маршрутка",
      category: "транспорт",
      income: false,
    },
    _id: {
      description: "Бухлишко",
      category: "алкоголь",
      income: false,
    },
    totalDescription: 5000,
  },
  {
    _id: {
      description: "Украл батончик",
      category: "доп. доход",
      income: true,
    },
    totalDescription: 20,
  },
];

export const getDataForDiagram = createAsyncThunk(
  "user/transaction",
  async () => {
    const response = await axios.get("/api/v1/transactions/sorted");

    const expense = CATEGORIES_FOR_SELECT[0].expense.reduce((acc, el) => {
      let total = 0;
      const newObj = {
        category: el,
        data: [],
      };
      data.map((e, ind) => {
        if (e._id.category === el) {
          total += e.totalDescription;
          newObj.data.push({
            id: ind,
            name: e._id.description,
            value: e.totalDescription,
            expense: e._id.income,
          });
        }
      });
      if (newObj.data.length === 0) return acc;

      acc.push({ total, ...newObj });
      return acc;
    }, []);

    const income = CATEGORIES_FOR_SELECT[1].income.reduce((acc, el) => {
      let total = 0;
      const newObj = {
        category: el,
        data: [],
      };
      data.map((e, ind) => {
        if (e._id.category === el) {
          total += e.totalDescription;
          newObj.data.push({
            id: ind,
            name: e._id.description,
            value: e.totalDescription,
            expense: e._id.income,
          });
        }
      });
      if (newObj.data.length === 0) return acc;

      acc.push({ total, ...newObj });
      return acc;
    }, []);

    const newData = {
      income,
      expense,
    };
    return newData;
  },
);
