import { Route, Routes, Link } from "react-router-dom";

export default function CategoryToReport() {
  return (
    <>
      <div>
        <button>
          <Link to="1">Алкоголь</Link>
        </button>
        <button>
          <Link to="2">Продукты</Link>
        </button>
        <button>
          <Link to="3">Развлечения</Link>
        </button>
        <button>
          <Link to="4">Здоровье</Link>
        </button>
        <button>
          <Link to="5">Транспорт</Link>
        </button>
        <button>
          <Link to="6">Все для дома</Link>
        </button>
        <button>
          <Link to="7">Техника</Link>
        </button>
        <button>
          <Link to="8">Коммуналка, связь</Link>
        </button>
        <button>
          <Link to="9">Спорт, хобби</Link>
        </button>
        <button>
          <Link to="10">Образование</Link>
        </button>
        <button>
          <Link to="11">Прочее</Link>
        </button>
      </div>
      <Routes>
        <Route path="1" element={<h1>Алкоголь</h1>} />
        <Route path="2" element={<h1>Продукты</h1>} />
        <Route path="3" element={<h1>Развлечения</h1>} />
        <Route path="4" element={<h1>Здоровье</h1>} />
        <Route path="5" element={<h1>Транспорт</h1>} />
        <Route path="6" element={<h1>Всё для дома</h1>} />
        <Route path="7" element={<h1>Техника</h1>} />
        <Route path="8" element={<h1>Коммуналкаб связь</h1>} />
        <Route path="9" element={<h1>Спорт, хобби</h1>} />
        <Route path="10" element={<h1>Образование</h1>} />
        <Route path="11" element={<h1>Прочее</h1>} />
      </Routes>
    </>
  );
}