import { useState } from "react";
import { getYear, getMonth } from "date-fns";
import { uk } from "date-fns/locale";
import { 
  StyledDatePicker, 
  DatePickerWrapper, 
  DatePickerSelect,
  CalendarContainer
} from "./MyAccount.styled"; 

const range = (start, end, step = 1) => {
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

export const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || ""); 

  const years = range(1900, getYear(new Date()));
  const months = [
    "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
  ];

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date); 
  };

  return (
    <CalendarContainer>
      <StyledDatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        placeholderText="Оберіть дату"
        locale={uk} 
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
        }) => (
          <DatePickerWrapper>
            <DatePickerSelect value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </DatePickerSelect>

            <DatePickerSelect value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </DatePickerSelect>
          </DatePickerWrapper>
        )}
      />
    </CalendarContainer>
  );
};
