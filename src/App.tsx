import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Inject, ScheduleComponent,Day, Week, WorkWeek, Month, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGBGfV5yd0VHal1XTnZWUj0eQnxTdEZiWH9YcXdUQGBVVEV2XQ==')

class App extends React.Component{

  private localData:EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2023, 10, 6,4,0),
      StartTime: new Date(2023, 10, 6, 5, 0),
      Subject: 'School',
      IsAllDay: true
    }]
  };
  public render() {
    return <ScheduleComponent 
    currentView='Month'
    eventSettings={this.localData}>
      
      <Inject services={[Day, Week, WorkWeek, Month]} />
    </ScheduleComponent>
  }
}

export default App;
