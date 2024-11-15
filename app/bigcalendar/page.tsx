"use client";

import React, { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const calendarEvents = [
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 10, 12, 8, 0), // Nov 12, 2024, 8:00 AM
    end: new Date(2024, 10, 12, 8, 45), // Nov 12, 2024, 8:45 AM
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 10, 12, 9, 0),
    end: new Date(2024, 10, 12, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 10, 12, 10, 0),
    end: new Date(2024, 10, 12, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 10, 13, 11, 0),
    end: new Date(2024, 10, 13, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 10, 11, 13, 0),
    end: new Date(2024, 10, 11, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 10, 14, 14, 0), // Nov 14, 2024, 2:00 PM
    end: new Date(2024, 10, 14, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 10, 14, 8, 0),
    end: new Date(2024, 10, 14, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 10, 20, 9, 0), // Nov 20, 2024, 9:00 AM
    end: new Date(2024, 10, 20, 9, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 10, 20, 11, 0),
    end: new Date(2024, 10, 20, 11, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 10, 21, 14, 0), // Nov 21, 2024, 2:00 PM
    end: new Date(2024, 10, 21, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 10, 22, 8, 0), // Nov 22, 2024, 8:00 AM
    end: new Date(2024, 10, 22, 8, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 10, 22, 10, 0),
    end: new Date(2024, 10, 22, 10, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 10, 22, 13, 0),
    end: new Date(2024, 10, 22, 13, 45),
  },
];


export default function CalendarComponent() {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="h-screen">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(0, 0, 0, 8, 0, 0)} // Universal 8:00 AM
        max={new Date(0, 0, 0, 17, 0, 0)} // Universal 5:00 PM
      />
    </div>
  );
}
