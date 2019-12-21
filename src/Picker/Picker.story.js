import React from 'react';

import Typography from '@material-ui/core/Typography';
import {DateTime} from 'luxon';
import {DatePicker} from './DatePicker';
import {TimePicker} from './TimePicker';
import {PickersProvider} from './PickersProvider';
import {DateTimePicker} from './DateTimePicker';

/*export default {
  title: 'Picker/Date',
  component: DatePicker,
};*/

export const DatePickerStory = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  return (
    <PickersProvider>
      <DatePicker
        selectedDate={selectedDate}
        onChange={date => setSelectedDate(date)}
        format="dd/MM/yyyy"
        name="datetimepicker"
        pointedDates={[DateTime.fromISO('2014-08-25T09:08:34.123')]}
      />
    </PickersProvider>
  );
};

export const CustomLabelDatePickerStory = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    DateTime.fromISO('2019-08-25T09:08:34.123')
  );

  return (
    <PickersProvider>
      <DatePicker
        selectedDate={selectedDate}
        onChange={date => setSelectedDate(date)}
        format="dd/MM/yyyy"
        name="customdatepicker"
        customTextFieldComponentInput={() => (
          <Typography variant="h6" color="secondary">
            {selectedDate.setLocale('pt-BR').toFormat('MMMM, yyyy')}
          </Typography>
        )}
      />
    </PickersProvider>
  );
};

export const WeeklyDatePickerStory = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  return (
    <PickersProvider>
      <DatePicker
        weekly
        selectedDate={selectedDate}
        onChange={date => setSelectedDate(date)}
        format="dd/MM/yyyy"
        name="datepicker"
      />
    </PickersProvider>
  );
};

export const TimePickerStory = () => {
  const [selectedTime, setSelecteTime] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  return (
    <PickersProvider>
      <TimePicker
        selectedTime={selectedTime}
        onChange={time => setSelecteTime(time)}
        name="timepicker"
      />
    </PickersProvider>
  );
};

export const DateTimePickerStory = () => {
  const [selectedDateTime, setSelecteDatetime] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  return (
    <PickersProvider>
      <DateTimePicker
        selectedDateTime={selectedDateTime}
        onChange={dateTime => setSelecteDatetime(dateTime)}
        name="datetimepicker"
      />
    </PickersProvider>
  );
};

/*storiesOf(`Picker`, module)
  .addDecorator(story => <DivFlex>{story()}</DivFlex>)
  .add('Date Picker', () => <DatePickerStory />)
  .add('Date Time Picker', () => <DateTimePickerStory />)
  .add('Custom Text Input Date Picker', () => <CustomLabelDatePickerStory />)
  .add('Weekly Date Picker', () => <WeeklyDatePickerStory />)
  .add('Color Picker', () => (
    <ColorPicker name="color" defaultValue="#000" label="Color Picker" />
  ))
  .add('Time Picker', () => <TimePickerStory />)
  .addParameters({ component: DatePicker });*/
