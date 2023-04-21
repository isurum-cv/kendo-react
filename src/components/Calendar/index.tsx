import { Calendar as CalendarPR } from "primereact/calendar";
import { CalendarOnChangeEvenType, CalendarTypes } from "./types";

const Calendar = ({ date, onChange }: CalendarTypes) => {
  return (
    <CalendarPR
      value={date}
      onChange={(e: CalendarOnChangeEvenType) => {
        onChange(e.value || null);
      }}
      showIcon
    />
  );
};

export default Calendar;
