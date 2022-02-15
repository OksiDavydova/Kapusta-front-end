import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastifyContainer() {
  return <ToastContainer autoClose={2000} draggable={false} />;
}
