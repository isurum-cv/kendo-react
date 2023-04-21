import { CalendarChangeEvent } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { SetStateAction } from "react";

export interface CalendarTypes {
  date: string | Date | Date[] | null;
  onChange: (value: string | Date | Date[] | null) => void;
}

export type CalendarOnChangeEvenType = CalendarChangeEvent;
