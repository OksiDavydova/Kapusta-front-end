import { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export default function LoaderReport() {
  let [loading] = useState(true);
  let [color] = useState("#ff751d");

  return (
    <HashLoader color={color} loading={loading} css={override} size={150} />
  );
}
