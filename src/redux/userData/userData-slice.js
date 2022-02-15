import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    description: "3п",
    category: "зп",

    sum: 20000,
  },
  {
    description: "хлеб",
    category: "продукты",

    sum: 2600,
  },
  {
    description: "хлебушек",
    category: "продукты",

    sum: 700,
  },
  {
    description: "йогурт",
    category: "products",

    sum: 700,
  },
  {
    description: "ж.д билеты",
    category: "транспорт",

    sum: 700,
  },
  {
    description: "маршрутка",
    category: "транспорт",

    sum: 50,
  },
];

const UserData = createSlice({
  name: "user/data",
  initialState: data,
  reducers: {},
  extraReducers: {},
});

console.log(UserData)

export default UserData.reducer;


