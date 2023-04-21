export interface DropdownDataObject {
  name: string;
  code: string;
}

export interface DropdownProps {
  selectedValue: DropdownDataObject | null;
  setSelectedValue: (value: DropdownDataObject | null) => void;
  dropdownData: DropdownDataObject[];
}
