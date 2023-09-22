// Модуль2 , завдання 2, раннє повернення
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
    
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
//      return "Access denied, wrong password!";
    
//   }

// Модуль2 , завдання 3, раннє повернення
// function checkStorage(available, ordered) {

//     if (ordered === 0) {
//       return "Your order is empty!";
//     } 
//     if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } 
//       return "The order is accepted, our manager will contact you";
    
//   }
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));

// Модуль2 , завдання 4, масив
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

//Модуль2 , завдання 6, зміна елементів масиву
// const fruits = ["apple", "plum", "pear", "orange"];
//  fruits[1] = "peach";
//  fruits[3] =  "banana";

// console.log(fruits)

//Модуль2 , завдання 7, довжина масиву
// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

//Модуль2 , завдання 8, довжина масиву
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

//Модуль2 , завдання 9, довжина масиву
// function getExtremeElements(array) {
//     let arraynew 
//     arraynew = array[0], array[array.length-1];
//     console.log(array[0], array[array.length-1]); 
//     return arraynew;
    
//    }

//    getExtremeElements([1, 2, 3, 4, 5]);
//    getExtremeElements(["Earth", "Mars", "Venus"]);
//    getExtremeElements(["apple", "peach", "pear", "banana"]);

//Модуль2 , завдання 10, split(delimiter)
// function splitMessage(message, delimiter) {
//     let words;
//    words = message.split(delimiter);
    
//     return words;
//   }
//   splitMessage("Mango hurries to the train", " ");
//   splitMessage("Mango", "");
//   splitMessage("best_for_week", "_")

//Модуль2 , завдання 11, split(delimiter)
// function calculateEngravingPrice(message, pricePerWord) {
//     const messageKalc = message.split(" ");
   
//     const totalPrice = messageKalc.length * pricePerWord;;
//     console.log(totalPrice)

//     return totalPrice
//     //console.log(`${messageLength} * ${pricePerWord}`);
//    //return `${messageLength} * ${pricePerWord}`;
    
//   }
  
//   calculateEngravingPrice("JavaScript is in my blood", 10);
//   calculateEngravingPrice("JavaScript is in my blood", 20);
//   calculateEngravingPrice("Web-development is creative work", 40);
//   calculateEngravingPrice("Web-development is creative work", 20)

//Модуль2 , завдання 12, join(delimiter)
// function makeStringFromArray(array, delimiter) {
//     let string;
//     string = array.join(delimiter);
  
//     // Change code above this line
//     return string;
//   }
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
//    makeStringFromArray(["M", "a", "n", "g", "o"], "");
//    makeStringFromArray(["top", "picks", "for", "you"], "_")

//Модуль2 , завдання 13, slug

// function slugify(title) {
//     function slugify(title) {
//         console.log(title.toLowerCase().split(" ").join("-"));
//         return title.toLowerCase().split(" ").join("-");
//       }
//   }
//   slugify("Arrays for begginers");
//   slugify("English for developer");
//   slugify("Ten secrets of JavaScript");
//   slugify("How to become a JUNIOR developer in TWO WEEKS")

//Модуль2 , завдання 14, slice
//   const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2) ;
// const nonExtremeEls = fruits.slice(1, -1) ;
// const lastThreeEls = fruits.slice(-3);

//Модуль2 , завдання 15, concat
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); 

//Модуль2 , завдання 16, concat slice
// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray).slice(0, maxLength);
  
//     return newArray;
  
//     }
//   makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
//   makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
//   makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
//   makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
//   makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);  
//   makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

//Модуль2 , завдання 17,  цикл for
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { 
//   console.log(i);
// }

//Модуль2 , завдання 18,  цикл for
// function calculateTotal(number) {

//     let summ = 0;
//     for( i = 1; i <= number; i+= 1) {
//         summ +=i;
//     }
//     console.log(summ);
//     return summ;
 
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal();

//Модуль2 , завдання 19,  цикл for
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//Модуль2 , завдання 20,  цикл for

// function calculateTotalPrice(order) {
//         let total = 0;
      
//         for(let i = 0; i < order.length; i += 1) {
//           total += order[i];
//         }
        
//         console.log(total);
//         return total;
//       }
//       calculateTotalPrice([12, 85, 37, 4]);
//       calculateTotalPrice([164, 48, 291]);
//       calculateTotalPrice([412, 371, 94, 63, 176]);
  
 //Модуль2 , завдання 21,  цикл for
//  function findLongestWord(string) {
//     const array = (string.split(" "));
//     let longWord = ` `;
//     let wordIdx = 0;
//     for (let i = 0; i < array.length; i += 1) {
//       if (longWord.length < array[i].length) {
//         wordIdx = i;
//         longWord = array[wordIdx];
//       }
//     }
//     console.log(longWord)
//     return longWord
    
//   }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

 //Модуль2 , завдання 22,  цикл for push
//  function createArrayOfNumbers(min, max) {
//     const numbers = [];
   
  
//     for (i = min; i <=max; i+=1 )
//     numbers.push(i)
//     console.log(numbers);
//     return numbers;
//   }
//   createArrayOfNumbers(1, 3);
//   createArrayOfNumbers(14, 17);
//   createArrayOfNumbers(29, 34);
//   createArrayOfNumbers();

//Модуль2 , завдання 23,  цикл for of, push
// function filterArray(numbers, value) {
//     const numbersNew = [];

//   for (numb of numbers) { 
//     if(numb > value) { 
//        numbersNew.push(numb);
//     }
//   }
//   console.log(numbersNew);
//      return numbersNew;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

//Модуль2 , завдання 24,  includes
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit); 

// }
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple"); 
// checkFruit()

//Модуль2 , завдання 25,  includes
// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (i = 0; i < array1.length; i += 1) {
//         if(array2.includes(array1[i])) {
//       newArray.push(array1[i]); 
//     }
//       }
//     console.log(newArray);
//     return newArray
  
//   }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30])

//Модуль2 , завдання 26,  for of
// function calculateTotalPrice(order) {
//     let total = 0;
    
//     for(const sum of order) {
//       total += sum;
//     }
    
//     return total;
//   }
//   calculateTotalPrice([12, 85, 37, 4]);
//   calculateTotalPrice([164, 48, 291]);
//   calculateTotalPrice([412, 371, 94, 63, 176]);
//   calculateTotalPrice([]);

//Модуль2 , завдання 27,  for of
// function filterArray(numbers, value) {
 
//     const filteredNumbers = [];
  
//     for ( const item of numbers) {
  
//       if (item > value) {
//         filteredNumbers.push(item);
//       }
//     }
  
//     return filteredNumbers;
  
//   }
//   filterArray([1, 2, 3, 4, 5], 3);
//   filterArray([1, 2, 3, 4, 5], 4);
//   filterArray([1, 2, 3, 4, 5], 5);
//   filterArray([12, 24, 8, 41, 76], 38);
//   filterArray([12, 24, 8, 41, 76], 20);

//Модуль2 , завдання 28,  остача від ділення
// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

//Модуль2 , завдання 29,  for
// function getEvenNumbers(start, end) {
//     double = [];
//      for (let i = (start); i <= end; i += 1) {
//        if(i % 2 === 0) {
//          double.push(i);
//        }
//      }
//       return double
      
//     }
//   getEvenNumbers(2, 5);
//    getEvenNumbers(3, 11);
//   getEvenNumbers(6, 12);
//   getEvenNumbers(8, 8);
//   getEvenNumbers(7, 7);

//Модуль2 , завдання 30, break
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }

//Модуль2 , завдання 31, for
// function findNumber(start, end, divisor) {

//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//        return i;
//       }
//     }
//   }
//   findNumber(2, 6, 5);
//   findNumber(8, 17, 3);
//   findNumber(6, 9, 4);
//   findNumber(16, 35, 7)

//Модуль2 , завдання 32, for
// function includes(array, value) {
  
//     for (let i = 0; i < array.length; i +=1) {
//       if  (array[i] === value) {
//         console.log(array[i] === value)
//         return (array[i] === value);
//       }
//     }
//     console.log(false)
//       return false;
//   }
//   includes([1, 2, 3, 4, 5], 3);
//   includes([1, 2, 3, 4, 5], 17);
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
//   includes(["apple", "plum", "pear", "orange"], "plum");
//   includes(["apple", "plum", "pear", "orange"], "kiwi");