//!a.Print odd numbers in an array

var anony=(arr)=>{
    console.log("a.odd numbers")
    var result = []
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    console.log(result)
}
anony([1,2,3,4,5,6,7,8])





//b.Convert all the strings to title caps in a string array
var string = ["hello welcome to javascRipt programming"];

var capsString=(str)=>{
    var result2 = [];
    str.forEach(element => {

       var chars = element.toLowerCase().split(' ');
       
       for(var i=0;i<chars.length;i++){
           var word = chars[i].charAt(0).toUpperCase() + chars[i].slice(1);
           result2.push(word);
       }    
    });
    var final = result2.join(' ');
    console.log("b.Strings to title caps")
    console.log(final);
};

capsString(string);


//!c.Sum of all numbers in an array

var arr = [2,3,4,5,6,7,8,9]
//Anonymous function
var anony=(arr)=>{
    console.log("c.sum of numbers in array")
    var sum =0;
    for(var i =0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(anony(arr))


//Prime numbers
var numbers = [2,3,4,6,7,8,9,10];
var primeNumber = function (num){
    var result4 = [];
    for(var l = 2;l<=num.length;l++){
        var n = true;
    
        for(var i =2;i<=l;i++){
            if(l%i === 0 && i!== l){
                n = false
            }
        }
        if(n===true){
            result4.push(l);
        }
    }
    console.log("d.primenumbers");
    console.log(result4);
}
primeNumber(numbers);


//e.Palindromes in an array
var words = ["level", "radar", "hello", "madam", "malayalam", "noon"];
var findPalindromes=(array)=> {
  
    return array.filter(str =>{
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;} );
}


let palindromes = findPalindromes(words);
console.log("e.palindromes");
console.log(palindromes);