module.exports = function toReadable (number) {
  number = number.toString();
	let result = '';
	let toNine = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twentyToNinety = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];
    let dozens;
  if (number < 10) {
      result = `${result}${toNine[number]}`;
    } else if(number >= 10 && number < 20){
      result = tenToNineteen[number[1]];
      
    } else if(number >=20 && number < 100){
      result = `${twentyToNinety[Math.floor((number / 100) * 10) - 2]}ty ${toNine = number[1] > 0 ? toNine[number[1]]: ''}`;
      result = result.trim();
      
    } else if(number >= 100 && number < 1000){
      let hundred = Math.floor(number / 100);
      
      result = `${toNine[hundred]} hundred ${dozens = number[1] == 0 && number[2] == 0 ? result : (number[1] == 0  ? toNine[number[2]] : (number[1] > 0 && number[1] < 2 ? tenToNineteen[number[2]] : (number[1] > 1 && number[2] >= 1 ? twentyToNinety[number[1] - 2] + 'ty' + ' ' + toNine[number[2]] : (number[1] > 1 &&  number[2] == 0 ? twentyToNinety[number[1] - 2] + 'ty' + result : ''))))}`
      
      result = result.trim();
    } else {
      result;
    }
  return result;
}
