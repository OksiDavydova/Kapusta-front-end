// import { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  //   display: block;
  //   margin: 0 auto;
  //   border-color: red;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1;
`;

export default function Loader() {
  // закоментировала чтобы былдилось
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ff751d");

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input
        value={color}
        onChange={input => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}

      {/* <HashLoader color={color} loading={loading} css={override} size={150} /> */}
    </div>
  );
}
