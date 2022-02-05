import { Route, Routes, Link } from 'react-router-dom';
import { PeriodStatistics } from './statisticsPage';

// Эта переменная чисто для тестирования будущей работы с БД
// const arrayIdForLinkAndRoutes = [
//   {
//     id: 1,
//     nameLink: 'Алкоголь',
//   },
//   {
//     id: 2,
//     nameLink: 'Продукты',
//   },
//   {
//     id: 3,
//     nameLink: 'Развлечения',
//   },
//   {
//     id: 4,
//     nameLink: 'Здоровье',
//   },
//   {
//     id: 5,
//     nameLink: 'Транспорт',
//   },
//   {
//     id: 6,
//     nameLink: 'Все для дома',
//   },
//   {
//     id: 7,
//     nameLink: 'Техника',
//   },
//   {
//     id: 8,
//     nameLink: 'Коммуналкаб связь',
//   },
//   {
//     id: 9,
//     nameLink: 'Спорт, хобби',
//   },
//   {
//     id: 10,
//     nameLink: 'Образование',
//   },
//   {
//     id: 11,
//     nameLink: 'Прочее',
//   },
// ];

function Statistics() {
  return (
    /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/
    <main>
      <h1>STATISTICS PAGE</h1>
      <nav>
        <button>
          <Link to="/login">login</Link>
        </button>
      </nav>
      <button>
        <Link to="/main">Вернуться на главную</Link>
      </button>
      <br />
      <button>
        <Link to="period/01.01.22">Январь 2022</Link>
      </button>
      <button>
        <Link to="period/01.02.22">Февраль 2022</Link>
      </button>
      <button>
        <Link to="period/01.12.21">Декабрь 2021</Link>
      </button>
      <br />
      <Routes>
        <Route path="period/01.01.22/*" element={<PeriodStatistics />} />
        <Route path="period/01.02.22/*" element={<PeriodStatistics />} />
        <Route path="period/01.12.21/*" element={<PeriodStatistics />} />
      </Routes>
    </main>
  );
}
export { Statistics };
