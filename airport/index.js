
import Scheduler from './lib/scheduler';

const AirPortScheduler = new Scheduler();

const currentDate = new Date();
// set a scheduled flight
AirPortScheduler.ScheduleAt(currentDate);
// available schedule Day
AirPortScheduler.Schedule();

const date = new Date();

const addedMinutes = new Date(date.setMinutes(date.getMinutes() + 10))

// check if date is available
AirPortScheduler.CouldScheduleAt(addedMinutes);

//remove a fligh
AirPortScheduler.UnscheduleAt(currentDate);
