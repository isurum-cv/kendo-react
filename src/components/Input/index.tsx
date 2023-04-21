import { InputText } from "primereact/inputtext";
import { InputTypes } from "./types";

const Input = ({ placeholder }: InputTypes) => {
  return (
    <InputText
      type="text"
      className="p-inputtext-sm w-3"
      placeholder={placeholder}
    />
  );
};

export default Input;
