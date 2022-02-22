import React from "react";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

function DatePicker() {
  //   const startValue: Date =
  //     (new Date().getFullYear(), new Date().getMonth(), 14);
  return (
    <div>
      <p>Where</p>
      <div className="calendarPicker">
      <DateRangePickerComponent
        placeholder="Please select the dates"
        format="dd-MMM-yy"
      />
      </div>
    </div>
  );
}

export default DatePicker;
