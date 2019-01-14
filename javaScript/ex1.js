//ex1
var num;

do {
  num = prompt("105", 0);
} while (num <= 100 && num != null);

//ex2
nextPrime:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); 
  }

//ex3
//var num = 1;
//
//for ( ; num < 100; num++ ) {
//
//if ( num % 5 === 0 && num % 3 === 0 ){
//
//	 document.write( num, " = FizzBuzz" )
//
//}else if ( num % 5 === 0 ){
//
//	 document.write( num, " = Buzz" );
//
//}else if ( num % 3 === 0 ){
//
//	 document.write( num, " = Fizz" );
//
//}else{
//
//	 console.log( num, "" );
//
//}
//}
var num = 1;

for(var i = 1; i <= 100; i++ ){
	
  if((i % 3 == 0) && (i % 5 == 0)){
		
    console.log('FizzBuzz');
		
  } else if ((i % 3 == 0)) {
		
    console.log('Buzz');
		
  } else if ((i % 5 == 0)) {
		
    console.log('Fizz');
  }
	
  else {
		
    console.log( i );
  }
}