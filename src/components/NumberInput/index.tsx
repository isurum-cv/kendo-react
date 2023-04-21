import React, { useState } from "react";
import {
  InputNumber as InputNumberPR,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { NumberInputProps } from "./type";

export default function NumberInput({ number, setNumber }: NumberInputProps) {
  return (
    <InputNumberPR
      inputId="stacked-buttons"
      value={number}
      onValueChange={(e: InputNumberValueChangeEvent) => setNumber(e.value)}
      showButtons
      mode="decimal"
    />
  );
}
