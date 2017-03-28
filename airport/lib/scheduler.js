'use strict';

class Scheduler {

  constructor() {
    this.scheduledFlights = [];
  }

  // validate if time is a valid date
  validateTime(time) {
    if (typeof time === 'string' || typeof time === 'number')
      return false;
    return Math.floor(new Date(time) / 1000);
  }

  // returns true if there’s room to schedule at ‘time’
  CouldScheduleAt(time) {
    let minutes = this.validateTime(time);
    if (!minutes) {
      console.log('could not schedule');
      return false;
    }
    // verify that this date it's not scheduled
    let index = this.scheduledFlights.indexOf(minutes);

    console.log(index === -1 ? 'could schedule' : 'could not schedule');
    return index === -1 ? true : false;
  }

  // returns true if we successfully scheduled
  ScheduleAt(time) {
    // verify that this date it's not scheduled
    if (!this.CouldScheduleAt(time)) {
      console.log('Could not schedule a flight');
      return false;
    }
    // get time for current date
    let minutes = Math.floor(new Date(time) / 1000);
    // fill scheduled flight
    minutes = minutes;
    this.scheduledFlights.push(minutes);
    console.log('Flight scheduled');
    return true;
  }

  // Choose an available time to schedule at, and return that time
  Schedule() {
    if (!this.scheduledFlights.length)
      return new Date();

    let sortedArray = this.scheduledFlights.sort();
    let last = this.scheduledFlights[this.scheduledFlights.length - 1];
    let availableDate = new Date((last + (60 * 20)) * 1000);
    console.log('available date: ' + availableDate);
    return availableDate;
  }

  // returns true if we successfully unscheduled something
  UnscheduleAt(time) {
    let minutes = this.validateTime(time);
    if (!minutes) {
      console.log('Could not removed a flight');
      return false;
    }

    let flightIndex = this.scheduledFlights.indexOf(minutes);

    if (flightIndex === -1) {
      console.log('Could not removed a flight');
      return false;
    }

    this.scheduledFlights.splice(flightIndex, 1);
    console.log('Flight removed');
    return true;
  }
}

export {
  Scheduler as
  default
}
