
import Scheduler from '../lib/scheduler';
import assert from 'assert';

describe('Flights scheduler', () => {

  const AirPortScheduler = new Scheduler();
  const currentDate = new Date();

  it('should schedule a flight date', (done) => {
    let scheduled = AirPortScheduler.ScheduleAt(currentDate);
    assert.equal(scheduled, true);
    done();
  });

  it('should remove a scheduled flight', (done) => {
    const date = new Date('2017-06-30');
    AirPortScheduler.ScheduleAt(date);
    let removed = AirPortScheduler.UnscheduleAt(date);
    assert.equal(removed, true);
    done();
  });

  it('should return false if date its take', (done) => {
    let scheduled = AirPortScheduler.ScheduleAt(currentDate);
    assert.equal(scheduled, false);
    done();
  });
});
