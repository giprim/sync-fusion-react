import React from 'react';
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from '@syncfusion/ej2-react-schedule';
const Scheduler = () => {
  const localData: EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(2020, 0, 11, 6, 30),
        StartTime: new Date(2020, 0, 11, 4, 0),
      },
    ],
  };
  return (
    <ScheduleComponent currentView='Month' eventSettings={localData}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Scheduler;
