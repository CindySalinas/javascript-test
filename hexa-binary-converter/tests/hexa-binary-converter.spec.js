
import * as Convert from './../lib/hexa-binary-converter';
import assert from 'assert';

describe('Convert', function(){
  it('should return a binary number', (done) => {
    let value = Convert.HexToBinary('f8');
    assert.equal(value, 11111000);
    done();
  });
  it('should return a hexadecimal number', (done) => {
    let value = Convert.binaryToHex(11111000);
    assert.equal(value, 'f8');
    done();
  });
  it('should return false if number is invalid', (done) => {
    let value = Convert.binaryToHex('test');
    assert.equal(value, false);
    done();
  });
})
