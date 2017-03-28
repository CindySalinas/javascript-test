
export function binaryToHex(binary){

  const regex = new RegExp('^[01]+$');

  if(!binary.toString().match(regex)){
    console.log(`${binary} is not a binary number`);
    return false;
  }
  let raiseToPower = 0;
  let number = 0;
  binary.toString().split('').reverse().forEach(value => {
    //convert to decimal
    if(value == '1')
      number += Math.pow(2, raiseToPower);
    raiseToPower += 1;
  });

  number = number.toString(16);

  console.log(`Binary: ${binary} to Hexadecimal ${number}` )

  return number;
}

export function HexToBinary(hex){

  const regex = new RegExp(/^[0-9A-F]+$/i);

  if(!hex.toString().match(regex)){
    console.log(`${hex} is not a hexadecimal number`);
    return false;
  }

  let number  = [];
  let decimal = parseInt(hex, 16);

  while(decimal >= 1 ){
    number.unshift(Math.floor(decimal%2));
    decimal = decimal / 2;
  }

  number = number.join('');

  console.log(`Hexadecimal: ${hex} to Binary ${number}` )

  return number;

}
