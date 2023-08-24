import { toast as toastify, ToastContainer } from "react-toastify";

class Toast {
  public success(message: string) {
    toastify.success(message);
  }

  public error(message: string) {
    toastify.error(message);
  }

  public info(message: string) {
    toastify.info(message);
  }

  public warning(message: string) {
    toastify.warning(message);
  }
}

const toast = new Toast();

const ToastWrapper = (
  <ToastContainer
    theme="dark"
    pauseOnHover
    style={{ fontFamily: "Jost", fontSize: 16 }}
  />
);

export { toast, ToastWrapper };
