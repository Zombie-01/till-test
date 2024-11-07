import { MutableRefObject } from "react";
import { message } from "antd";

const validateField = (ref: MutableRefObject<any>, name: string) => {
  if (name === "image") {
    if (!ref.current.files || ref.current.files[0] === undefined) {
      message.warning(`${name} оруулна уу.`);
      return true;
    }
  }

  if (name === "email" || name === "И-майл") {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(ref.current.value)) {
      message.warning("И-майл буруу байна.");
      return true;
    }
  }

  if (name === "Утасны дугаар") {
    if (!ref.current.value || ref.current.value.length !== 8) {
      message.warning("Утасны дугаар 8 оронтой байх ёстой.");
      return true;
    }
  }

  if (!ref.current?.value) {
    message.warning(`${name} оруулна уу.`);
    return true;
  }

  return false;
};

export default validateField;
