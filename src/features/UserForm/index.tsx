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
import PanelKU from "../../components/Panel";

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
    <div>
      <PanelKU title={"Profile Setup"}>
        {/* <Input placeholder="Enter Your name" />
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
        <Editor setText={setText} text={text} /> */}
        <div className="grid">
          <div className="col">
            <div className="grid">
              <div className="col-2"></div>
              <div className="col-2">
                <div className="flex justify-content-end">Name</div>
              </div>
              <div className="col-6">
                <Input placeholder="Enter Your name" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="grid">
              <div className="col-2">
                <div className="flex justify-content-end">Occupation</div>
              </div>
              <div className="col-6">
                <Input placeholder="Enter Your name" />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div className="grid">
          <div className="col">
            <div className="grid">
              <div className="col-2"></div>
              <div className="col-2">
                <div className="flex justify-content-end">Birthday</div>
              </div>
              <div className="col-6">
                <Calendar date={date} onChange={onChangeDate} />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="grid">
              <div className="col-2">
                <div className="flex justify-content-end">Skills</div>
              </div>
              <div className="col-6">
                <MultiSelect
                  multiSelectData={cities}
                  selectedValue={selectedCities}
                  setSelectedValue={setSelectedCities}
                />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div className="grid">
          <div className="col">
            <div className="grid">
              <div className="col-2"></div>
              <div className="col-2">
                <div className="flex justify-content-end">Gender</div>
              </div>
              <div className="col-6">
                <Dropdown
                  dropdownData={citiesDropdown}
                  selectedValue={selectedCity}
                  setSelectedValue={setSelectedCity}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="grid">
              <div className="col-2">
                <div className="flex justify-content-end">Experience</div>
              </div>
              <div className="col-6">
                <NumberInput number={value} setNumber={setValue} />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div className="grid">
          <div className="col">
            <div className="grid">
              <div className="col-2"></div>
              <div className="col-2">
                <div className="flex justify-content-end">Language</div>
              </div>
              <div className="col-6">
                <Dropdown
                  dropdownData={citiesDropdown}
                  selectedValue={selectedCity}
                  setSelectedValue={setSelectedCity}
                />
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div className="grid">
          <div className="col-1"></div>
          <div className="col-1">
            <div className="flex justify-content-end">Short bio</div>
          </div>
          <div className="col-8">
            <Editor setText={setText} text={text} />
          </div>
        </div>
        <div className="flex justify-content-end mt-3 pt-3 border-top-1">
          <div className="ml-3">
            <Button label="Cancle" />
          </div>
          <div className="ml-3">
            <Button label="Update" />
          </div>
        </div>
      </PanelKU>
    </div>
  );
}

export default UserForm;
