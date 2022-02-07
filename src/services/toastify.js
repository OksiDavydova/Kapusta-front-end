import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.dir(toast);

class Notify {
  success = (name) => {
    const successMsg = toast.success(`Добро пожаловать! ${name}`);
    return successMsg;
  };

  error = (msg = "что-то пошло не так") => {
    return toast.error(`${msg}`);
  };
  registerError = () => {};

  info = (msg = "some information") => {
    return toast.info(msg);
  };
}

export default new Notify();
