var numbers = [5, 32, 43, 4];
var odd = numbers.filter(function(n) {
    return n % 2 !== 0;
   });

   console.log(odd);