import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/

    <main>
      <h1>PAGE NOT FOUND</h1>
      <nav>
        <button>
          <Link to="/login">login</Link>
        </button>
        <button>
          <Link to="/">Main</Link>
        </button>
        <button>
          <Link to="/report">Statistics</Link>
        </button>
      </nav>
    </main>
  );
}
