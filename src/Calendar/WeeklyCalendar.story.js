/* eslint-disable no-console */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { storiesOf } from '@storybook/react';
import { DateTime } from 'luxon';

import { WeeklyCalendar } from './WeeklyCalendar';
import { GROUPS } from '../../.storybook/hierarchySeparators';

storiesOf(`${GROUPS.CALENDAR}|Calendar`, module).add('Weekly', () => (
  <Paper>
    <WeeklyCalendar
      onDayChange={day => {
        console.info('onDayChange: ', day && day.toISODate());
      }}
      onWeekChange={weekDays => {
        console.info('onWeekChange: ', weekDays);
      }}
      currentDate={DateTime.local()}
    />
  </Paper>
));