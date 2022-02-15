// import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
 <>
   <style>{`
        .container {
          
  left: 0;
  top: 0;
  position: fixed;
        }
.bg-cyan {
  background-color: #1BF3F3;
}

.bg-gray-1 {
  background-color: #E7E7E7;
}

.bg-gray-2 {
  background-color: #D0D0D0;
}

.bg-gray-3 {
  background-color: #B9B9B9;
}

.bg-gray-4 {
  background-color: #A2A2A2;
}

.bg-gray-5 {
  background-color: #8B8B8B;
}

.bg-gray-6 {
  background-color: #737373;
}

.bg-gray-7 {
  background-color: #5C5C5C;
}

.bg-gray-8 {
  background-color: #454545;
}

.bg-gray-9 {
  background-color: #2E2E2E;
}

.bg-gray-10 {
  background-color: #171717;
}


.bg-black {
  background-color: #000000;
}

.bg-blue {
  background-color: #0303E5;
}

.bg-green {
  background-color: #05FB06;
}

.bg-margenta {
  background-color: #FF00FE;
}

.bg-red {
  background-color: #F90404;
}

.bg-white {
  background-color: #57ea15;
}

.bg-yellow {
  background-color: #F8E71C;
}

.color-242424 {
  color: #242424;
}

.cf {
  clearfix: left;
}

.fl {
  float: left;
}

.h-100 {
  height: 100%;
}

.mh-one-21st {
  margin-right: calc(100% / 21);
  margin-left: calc(100% / 21);
}

.vh-07 {
  height: 7vh;
}

.vh-10 {
  height: 10vh;
}

.vh-83 {
  height: 83vh;
}

.w-one-21st {
  width: calc(100% / 21);
}

.w-one-seventh {
  width: calc(100% / 7);
}

.w-three-seventh {
  width: calc(100%  / 7 * 3);
}

.w-100 {
  width: 100%;
}

`}
      </style>
<div className='container h-100 w-100'>
  <div className='cf w-100 vh-83'>
    <div className='bg-white fl h-100 w-one-seventh'></div>
    <div className='bg-yellow fl h-100 w-one-seventh'></div>
    <div className="bg-cyan fl h-100 w-one-seventh"></div>
    <div className="bg-green fl h-100 w-one-seventh"></div>
    <div className='bg-margenta fl h-100 w-one-seventh'></div>
    <div className='bg-red fl h-100 w-one-seventh'></div>
    <div className='bg-blue fl h-100 w-one-seventh'></div>
  </div>
  <div className='cf w-100 vh-07'>
    <div className='bg-blue fl h-100 w-one-seventh'></div>
    <div className='bg-margenta fl h-100 w-one-seventh'></div>
    <div className='bg-yellow fl h-100 w-one-seventh'></div>
    <div className='bg-red fl h-100 w-one-seventh'></div>
    <div className='bg-cyan fl h-100 w-one-seventh'></div>
    <div className='bg-black fl h-100 w-one-seventh'></div>
    <div className='bg-white fl h-100 w-one-seventh'></div>
  </div>
  <div className='cf w-100 vh-10'>
    <div className='bg-black fl h-100 w-one-21st'></div>
    <div className='bg-gray-10 fl h-100 w-one-21st'></div>
    <div className='bg-gray-9 fl h-100 w-one-21st'></div>
    <div className='bg-gray-8 fl h-100 w-one-21st'></div>
    <div className='bg-gray-7 fl h-100 w-one-21st'></div>
    <div className='bg-gray-6 fl h-100 w-one-21st'></div>
    <div className='bg-gray-5 fl h-100 w-one-21st'></div>
    <div className='bg-gray-4 fl h-100 w-one-21st'></div>
    <div className='bg-gray-3 fl h-100 w-one-21st'></div>
    <div className='bg-gray-2 fl h-100 w-one-21st'></div>
    <div className='bg-gray-1 fl h-100 w-one-21st'></div>
    <div className='bg-white fl h-100 w-one-21st'></div>
    <div className='bg-black fl h-100 w-three-seventh'></div>
  </div>
      </div>


      </>
    );
  }
  
  // /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/

  // <main>
  //   <h1>PAGE NOT FOUND</h1>
  //   <nav>
  //     <button>
  //       <Link to="/login">login</Link>
  //     </button>
  //     <button>
  //       <Link to="/">Main</Link>
  //     </button>
  //     <button>
  //       <Link to="/report">Statistics</Link>
  //     </button>
  //   </nav>
  // </main>