//task 1;
//в отдельном файле

//task 2a;
 function sum(x){
     return function(y){
         return x + y;
     }
 };

 console.log(sum(5)(6));

 //task 2b;
 function sum(x) {
     function countSum(y) {
         return x + y;
     };
     return countSum;
 };

 var sum1 = sum(2);
 console.log(sum1(3));



// //task 3;
 var a = 5;

 (function() {
     alert(a);
 })()
// не хватает точки с запятой после цифры 5.


//task 4;
//  for (var i = 0; i < 10; i++) {
//  setTimeout(function() {
//      console.log(i);
//  }, 0);
//  }
//В данной taske переменная i в функции  указывает на последний элемент цикла (на момент вызова функции цикл уже отработал)

 //один из вариантов решения:
 for (var i = 0; i < 10; i++) {
     (function(index){ setTimeout(function() {
         console.log(index+1);
     }, 0)
     })(i);
 }
