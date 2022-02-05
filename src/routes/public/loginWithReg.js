import { Link } from 'react-router-dom';

function LoginWithReg() {
  return (
    /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/

    <main>
      <h1>LOGIN AND REGISTRATION PAGE</h1>
      <nav>
        <button>
          <Link to="/main">Main</Link>
        </button>
        <button>
          <Link to="/statistics">Statistics</Link>
        </button>
      </nav>
    </main>
  );
}

export { LoginWithReg };
