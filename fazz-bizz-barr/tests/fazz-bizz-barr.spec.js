
import FazzBizzBarr from './../lib/fazz-bizz-barr';
import assert from 'assert';

describe('Fazz-bizz-barr', function(){
  it('should return a string equal to Fazz', (done) => {
    let value = FazzBizzBarr(3);
    assert.equal(value, 'Fazz');
    done();
  });
  it('should return a number', (done) => {
    let value = FazzBizzBarr(2);
    assert(typeof value, 'number');
    assert.equal(value, 2);
    done();
  });
  it('should return a string equal to Fazz Barr', (done) => {
    let value = FazzBizzBarr(21);
    assert.equal(value, 'Fazz Barr');
    done();
  });
  it('should return a error', (done) => {
    let value = FazzBizzBarr('test');
    assert(typeof value, 'number');
    done();
  });
})
