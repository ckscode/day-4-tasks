//Odd numbers in an array

//!a.Print odd numbers in an array
//Anonymous function
var anony=function(arr){
    var result = []
    console.log("a.Anonymous function")
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    console.log(result)
}
anony([1,2,3,4,5,6,7,8]);

//IIFE function
var a = [1,2,3,4,5,6,7,8];
(function(){
    var result = []
    console.log("a.IIFE function")
    for(var i =0;i<a.length;i++){
        if(a[i]%2!==0){
            result.push(a[i])
        }
    }
    console.log(result)
})();



//b.Convert all the strings to title caps in a string array

//Anonymous
var string = ["hello welcome to javascRipt programming"];

var capsString=function(str){
    var result2 = [];
    str.forEach(element => {

       var chars = element.toLowerCase().split(' ');
       
       for(var i=0;i<chars.length;i++){
           var word = chars[i].charAt(0).toUpperCase() + chars[i].slice(1);
           result2.push(word);
       }    
    });
    var final = result2.join(' ');
    console.log('b.Anonymous')
    console.log(final);
};

capsString(string);


//IIFE

let string2 = ["hello welcome" ,"to javascRipt", "programming"];

(function(str){
    var result3 = [];
    str.forEach(element => {
        var chars = element.toLowerCase().split(' ');
        for(var i=0;i<chars.length;i++){
            var word = chars[i].charAt(0).toUpperCase() + chars[i].slice(1);
            result3.push(word);
        }    
     });
     var final = result3.join(' ');
     console.log('b.IIFE')
     console.log(final);
})(string2)


//!c.Sum of all numbers in an array

var arr = [2,3,4,5,6,7,8,9]
//Anonymous function
var anony=function(arr){
    var sum =0;
    console.log("c.Anonymous function")
    for(var i =0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
};
console.log(anony(arr));

//IIFE
(function(){
    var sum = 0;
    console.log("c.IIFE function")
    for(var i =0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum)
})();



//!d.return all the prime numbers in an array 
//Anonymous
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
    console.log("d.Anonymous");
    console.log(result4);
}
primeNumber(numbers);


//IIFE
(function (num){
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
    console.log("d.IIFE");
    console.log(result4);
})(numbers);



//!e.Return all the palindromes in an array

//Anonymous

var words = ["level", "radar", "hello", "madam", "malayalam", "noon"];
var findPalindromes=function (array) {
  
    return array.filter(str =>{
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;} );
}


let palindromes = findPalindromes(words);
console.log("e.Anonymous");
console.log(palindromes);

//IIFE

(function(words){

    var findPalindromes=function (array) {
  
        return array.filter(str =>{
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;} );
    }
    
    
    let palindromes = findPalindromes(words);
    console.log("e.IIFE");
    console.log(palindromes);
})(words);



//!f.Return median of two sorted arrays of the same size
//Anonymous
var nums1 = [1, 3, 5];
var nums2 = [2, 4, 6];
var findMedianSortedArrays= function (nums1, nums2) {
    // Merge the two sorted arrays into one sorted array
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    
    // Calculate the median
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        // If the length is even, return the average of the two middle elements
        console.log("f.Anonymous")
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
        // If the length is odd, return the middle element
        console.log("f.Anonymous")
        return mergedArray[middle];
    }
}

console.log(findMedianSortedArrays(nums1, nums2));


//IIFE

(function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        console.log("f.IIFE")
        console.log("Median:"+(mergedArray[middle - 1] + mergedArray[middle]) / 2) ;
    } else {
        console.log("f.IIFE")
        console.log("Median:"+mergedArray[middle]) ;
    }
})(nums1, nums2);



//!g.Remove duplicates from an array

//Anonymous
var dupli = [1, 2, 2, 3, 4, 4, 5];
var removeDupilcates = function(arr){
      var cleanArray = [];
      for(var i=0;i<arr.length;i++){
        if(!cleanArray.includes(arr[i])){
            cleanArray.push(arr[i]);
        }
      }

      console.log("g.Anonymous");
      console.log(cleanArray);
}

removeDupilcates(dupli);


//IIFE

(function(arr){
    var cleanArray = [];
    for(var i=0;i<arr.length;i++){
      if(!cleanArray.includes(arr[i])){
          cleanArray.push(arr[i]);
      }
    }

    console.log("g.IIFE");
    console.log(cleanArray);
})(dupli)



//h.Rotate an array by K times
//Anonymous

var rotateArray1 = function(array,k) {

    for (let i = 0; i < k; i++) {
        array.unshift(array.pop());
    }
    console.log(array);
    return array;
  }

rotateArray1([1,2,3,4,5],3);//k=3


//IIFE
(function(array,k){
    for (let i = 0; i < k; i++) {
        array.unshift(array.pop());
    }
    console.log(array);
    return array;
  
})([1,2,3,4,5],3)//k=3
  