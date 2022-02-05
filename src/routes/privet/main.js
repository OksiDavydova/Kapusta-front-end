import { Link } from 'react-router-dom';

function Main() {
  return (
    /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/
    <main>
      <h1>MAIN PAGE</h1>
      <nav>
        <button>
          <Link to="/login">login</Link>
        </button>
        <button>
          <Link to="/statistics">Statistics</Link>
        </button>
      </nav>
    </main>
  );
}

export { Main };
