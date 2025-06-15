// components/DatePickerWrapper.jsx
'use client'; // For Next.js App Router

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerWrapper = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex justify-center items-center">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        className="text-base"
      />
    </div>
  );
};

export default DatePickerWrapper;
