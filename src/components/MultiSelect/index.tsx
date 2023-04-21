import React, { useState } from "react";
import {
  MultiSelect as MultiSelectPR,
  MultiSelectChangeEvent,
} from "primereact/multiselect";
import { MultiSelectDataObject, MultiSelectProps } from "./types";

const MultiSelect = ({
  selectedValue,
  setSelectedValue,
  multiSelectData,
}: MultiSelectProps) => {
  return (
    <div className="card flex justify-content-center">
      <MultiSelectPR
        value={selectedValue}
        onChange={(e: MultiSelectChangeEvent) => setSelectedValue(e.value)}
        options={multiSelectData}
        display="chip"
        optionLabel="name"
        placeholder="Select Cities"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
      />
    </div>
  );
};

export default MultiSelect;
