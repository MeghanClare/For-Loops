// FizzBuzz
// Count up from 0 to 100
// For every number divisible by 5 print 'Fizz'
// For every number divisible by 3 print 'Buzz'

//for (var number = 1; number <= 100; number = number + 1){
//	if (number === 0);{
// 		console.log('Buzz');
// 		} else {
// 			console.log(number);
//	}
// }

// for (var number = 1; number <= 100; number = number + 1) {
// 	if (number % 5 === 0) {
// 		if (number % 3 === 0) {
// 			console.log('FizzBuzz');
// 		} else {
// 			console.log('Fizz'); }
// 	} else { 
// 		if (number % 3 === 0) {
// 			console.log('Buzz'); 
// 		}
// 		else {
// 			console.log(number);
// 		}
// 	}
// }
for (var number = 1; number <= 100; number = number +1) {
	if (number % 5 === 0 && number % 3 === 0) {
		console.log('FizzBuzz') 
	} else if (number % 3 === 0) {
		console.log('Fizz')
	} else if (number % 5 === 0) {
		console.log('Buzz'); 
	} else {
		console.log(number)
	}
}
