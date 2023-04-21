import React, { useState } from "react";
import {
  Dropdown as DropdownPR,
  DropdownChangeEvent,
} from "primereact/dropdown";
import { DropdownProps } from "./types";

interface City {
  name: string;
  code: string;
}

const Dropdown = ({
  dropdownData,
  selectedValue,
  setSelectedValue,
}: DropdownProps) => {
  return (
    <DropdownPR
      value={selectedValue}
      onChange={(e: DropdownChangeEvent) => setSelectedValue(e.value)}
      options={dropdownData}
      optionLabel="name"
      placeholder="Select a City"
      className="w-full md:w-14rem"
    />
  );
};

export default Dropdown;
