import React from "react";
import { ToastContainer } from "react-toastify";

export default function ToastifyContainer() {
  return <ToastContainer autoClose={2000} draggable={false} />;
}
