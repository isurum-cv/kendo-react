export interface MultiSelectDataObject {
  name: string;
  code: string;
}

export interface MultiSelectProps {
  selectedValue: MultiSelectDataObject | null;
  setSelectedValue: (value: MultiSelectDataObject | null) => void;
  multiSelectData: MultiSelectDataObject[];
}
