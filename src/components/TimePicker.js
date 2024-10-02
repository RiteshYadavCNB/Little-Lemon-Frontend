import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState, useEffect } from 'react';


export default function DateAndTimePicker() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedTime, setSelectedTime] = useState(dayjs().hour(10).minute(0));

    useEffect(()=>{
        const currentDate = dayjs();
        setSelectedDate(currentDate);
        const currentTime = dayjs().hour(10).minute(0);
        setSelectedTime(currentTime);
    }, [])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} width={200}>
            <DatePicker label="Pick Date" value={selectedDate} minDate={selectedDate} onChange={(newDate)=>setSelectedDate(newDate)} />
            <TimePicker label="Pick Time" value={selectedTime} minTime={dayjs().hour(10).minute(0)} maxTime={dayjs().hour(21).minute(0)} ampm onChange={(newTime)=>setSelectedTime(newTime)} />
        </Stack>
        </LocalizationProvider>
    );
}