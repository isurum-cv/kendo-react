import { SetStateAction, useState } from "react";
import Input from "../../components/Input";
import Calendar from "../../components/Calendar";
import MultiSelect from "../../components/MultiSelect";
import { MultiSelectDataObject } from "../../components/MultiSelect/types";
import { DropdownDataObject } from "../../components/Dropdown/types";
import Dropdown from "../../components/Dropdown";
import Editor from "../../components/Editor";
import NumberInput from "../../components/NumberInput";
import Button from "../../components/Button";

function UserForm() {
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const onChangeDate = (value: string | Date | Date[] | null) => setDate(value);

  const [selectedCities, setSelectedCities] =
    useState<MultiSelectDataObject | null>(null);
  const cities: MultiSelectDataObject[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [selectedCity, setSelectedCity] = useState<DropdownDataObject | null>(
    null
  );
  const citiesDropdown: DropdownDataObject[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [text, setText] = useState<string>("");

  const [value, setValue] = useState<number | null | undefined>(20);

  return (
    <div className="card flex flex-column align-items-center gap-3 mt-3">
      <Input placeholder="Enter Your name" />
      <Calendar date={date} onChange={onChangeDate} />
      <MultiSelect
        multiSelectData={cities}
        selectedValue={selectedCities}
        setSelectedValue={setSelectedCities}
      />
      <Dropdown
        dropdownData={citiesDropdown}
        selectedValue={selectedCity}
        setSelectedValue={setSelectedCity}
      />
      <Button label="Submit" />
      <NumberInput number={value} setNumber={setValue} />
      <Editor setText={setText} text={text} />
    </div>
  );
}

export default UserForm;
