import React from "react";
import { Button as ButtonPR } from "primereact/button";
import { ButtonProps } from "./types";

export default function Button({ label }: ButtonProps) {
  return <ButtonPR label={label} />;
}
