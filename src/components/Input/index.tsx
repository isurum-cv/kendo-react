import { InputText } from "primereact/inputtext";
import { InputTypes } from "./types";

const Input = ({ placeholder }: InputTypes) => {
  return (
    <InputText type="text" className=" w-full" placeholder={placeholder} />
  );
};

export default Input;
