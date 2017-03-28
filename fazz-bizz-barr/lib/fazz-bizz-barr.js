
export default function index(number){
  let print = '';
  //validate if value is a number
  if(number && Number.isInteger(number)){
    let validate = [{
      value: 3,
      print: 'Fazz'
    },{
      value: 5,
      print: 'Bizz'
    },{
      value: 7,
      print: 'Barr'
    }];

    validate.forEach((data)=>{
      print += data.value !== 0 && number % data.value === 0 ? data.print + ' ': '';
    });

    if(!print)
      print = number;
    else
      print =  print.trim();

    console.log(`Value: ${number} Result: ${print}`);

    return print;
  }
  else
    console.log(`${number} is not a number`);
}
