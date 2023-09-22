//Modul 4. task 2. callback

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }
//   makeMessage("Royal Grand", makePizza);
//   makeMessage("Ultracheese", deliverPizza)

//Modul 4. task 3. callback
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`)
//   });
  
//Modul 4. task 4. callback
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSucces, onError) {
//       for (let pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSucces(pizzaName);
       
//       }
//         }
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
//   };
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
    
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//Modul 4. task 5. forEach

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//    orderedItems.forEach(item => { totalPrice += item})
//    return totalPrice;
//     }
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


//Modul 4. task 6. forEach
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     numbers.forEach(number => {if (number > value) {filteredNumbers.push(number)}});
  
    
//     return filteredNumbers;
//   }
//   filterArray([1, 2, 3, 4, 5], 3);
//   filterArray([1, 2, 3, 4, 5], 4);
//   filterArray([1, 2, 3, 4, 5], 5);
//   filterArray([12, 24, 8, 41, 76], 38)

//Modul 4. task 7. forEach

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     firstArray.forEach(fierstarr => { if(secondArray.includes(fierstarr)) { commonElements.push(fierstarr)}})
  
    
//     return commonElements;
//     // Change code above this line
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


//Modul 4. task 8. =>

//   const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
//   }

// Change code below this line

//Modul 4. task 10. =>

// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;
//     orderedItems.forEach(item => totalPrice += item)
//   return totalPrice
//   }
//   // Change code above this line
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

//Modul 4. task 11. =>

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => { 
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     })
//     return filteredNumbers
//   }

//Modul 4. task 12. =>

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });


//   return commonElements;
// }

//Modul 4. task 13. =>

// function changeEven (numbers, value) {
//     const newNumbers = [];
//     numbers.forEach((number) => {if (number % 2 === 0) {
//         newNumbers.push(number + value);
//       } else
//        newNumbers.push(number)
//     })
//       return newNumbers
//     }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//Modul 4. task 14. map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths)

//Modul 4. task 15. map()
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const titles = books.map(book => book.title);

//Modul 4. task 16. flatMap()

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);

//Modul 4. task 17. map()

// const getUserNames = (users) => users.map(user => user.name)
    

// console.log(getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ] ))

//Modul 4. task 19. filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73] ;

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

//Modul 4. task 20. filter()

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((allGenre, index, allGenres) => allGenres.indexOf(allGenre) === index);

//Modul 4. task 21. filter()
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);
//   console.log(topRatedBooks);
//   console.log(booksByAuthor);

//Modul 4. task 22. filter()

// const getUsersWithEyeColor = (users, color) => { return users.filter(user => user.eyeColor === color)};
    
//     console.log(getUsersWithEyeColor([
//         {
//           name: "Moore Hensley",
//           email: "moorehensley@indexia.com",
//           eyeColor: "blue",
//           friends: ["Sharron Pace"],
//           isActive: false,
//           balance: 2811,
//           gender: "male"
//         },
//         {
//           name: "Sharlene Bush",
//           email: "sharlenebush@tubesys.com",
//           eyeColor: "blue",
//           friends: ["Briana Decker", "Sharron Pace"],
//           isActive: true,
//           balance: 3821,
//           gender: "female"
//         },
//         {
//           name: "Ross Vazquez",
//           email: "rossvazquez@xinware.com",
//           eyeColor: "green",
//           friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//           isActive: false,
//           balance: 3793,
//           gender: "male"
//         },
//         {
//           name: "Elma Head",
//           email: "elmahead@omatom.com",
//           eyeColor: "green",
//           friends: ["Goldie Gentry", "Aisha Tran"],
//           isActive: true,
//           balance: 2278,
//           gender: "female"
//         },
//         {
//           name: "Carey Barr",
//           email: "careybarr@nurali.com",
//           eyeColor: "blue",
//           friends: ["Jordan Sampson", "Eddie Strong"],
//           isActive: true,
//           balance: 3951,
//           gender: "male"
//         },
//         {
//           name: "Blackburn Dotson",
//           email: "blackburndotson@furnigeer.com",
//           eyeColor: "brown",
//           friends: ["Jacklyn Lucas", "Linda Chapman"],
//           isActive: false,
//           balance: 1498,
//           gender: "male"
//         },
//         {
//           name: "Sheree Anthony",
//           email: "shereeanthony@kog.com",
//           eyeColor: "brown",
//           friends: ["Goldie Gentry", "Briana Decker"],
//           isActive: true,
//           balance: 2764,
//           gender: "female"
//         }
//       ], "green")) ;

//Modul 4. task 23. filter()

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {return users.filter(user => user.age > minAge && user.age< maxAge) 
 
// };


//Modul 4. task 24. filter()
// Change code below this line
// const getUsersWithFriend = (users, friendName) => {return users.filter( user => user.friends.includes(friendName))
   
// };

//Modul 4. task 25. filter()

// const getFriends = (users) => {return users.flatMap(user => user.friends).filter((user, index, users) => users.indexOf(user) === index)
// };
// console.log(getFriends([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ]))

//Modul 4. task 26. filter()
// const getActiveUsers = (users) => {return users.filter( user => user.isActive === true)
   
// };

//Modul 4. task 28. find()
// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);

//Modul 4. task 29. find()

// Change code below this line
// const getUserWithEmail = (users, email) => {return users.find(user => user.email === email)
   
// };

//Modul 4. task 30. every()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);

//Modul 4. task 31. every()

// const isEveryUserActive = (users) => {return users.every(user => user.isActive === true)
   
// };

//Modul 4. task 32. some()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(item => item % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(item => item % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(item => item % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 !== 0);

//Modul 4. task 33. some()

// const isAnyUserActive = users => {return users.some(user => user.isActive === true)
   
// };

//Modul 4. task 34. reduce()

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((totalTime, player, idx, playtimes) => {return totalTime + player}, 0 );
  
//   const averagePlayTime = totalPlayTime / playtimes.length;

//Modul 4. task 35. reduce()

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line

//   const totalAveragePlaytimePerGame = players.reduce((averagePlayTime, player) => {return averagePlayTime + player.playtime/player.gamesPlayed},0);

//  console.log(totalAveragePlaytimePerGame)

//Modul 4. task 36. reduce()

// const users =([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ])
//   const calculateTotalBalance = users => users.reduce((totalBalance, user) => {return totalBalance + user.balance},0)

// console.log(calculateTotalBalance(users))

//Modul 4. task 37. reduce()

// const users = ([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ])

// const getTotalFriendCount = users => users.reduce((totalFriend, user) => totalFriend + user.friends.length, 0);

// console.log(getTotalFriendCount(users));

//Modul 4. task 38 . sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];


// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors =[...authors].sort();

//Modul 4. task 39 . sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//Modul 4. task 40 . sort()

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
//   // Change code below this line
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

//Modul 4. task 41 . sort()

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
// },
// {
//   title: "Beside Still Waters",
//   author: "Robert Sheckley",
//   rating: 8.51,
// },
// {
//   title: "The Dream of a Ridiculous Man",
//   author: "Fyodor Dostoevsky",
//   rating: 7.75,
// },
// { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstbook, secondbook) => firstbook.author.localeCompare(secondbook.author));

// const sortedByReversedAuthorName = [...books].sort((firstbook, secondbook) => secondbook.author.localeCompare(firstbook.author));

// const sortedByAscendingRating = [...books].sort((firstbook, secondbook) => firstbook.rating-secondbook.rating);

// const sortedByDescentingRating = [...books].sort((firstbook, secondbook) => secondbook.rating - firstbook.rating);

// console.log(sortedByReversedAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//Modul 4. task 42 . sort()

// const sortByAscendingBalance = users => {return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance)
   
// };

// //Modul 4. task 43 . sort()

// const sortByDescendingFriendCount = users => {return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length)
   
// };

// //Modul 4. task 44 . sort()

// const sortByName = users => {return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name) )

// };

// //Modul 4. task 45 . filter map sort()

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line
  
//   const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((firstauthor, secondauthor) => firstauthor.localeCompare(secondauthor));

//   console.log(names);

// //Modul 4. task 46 . sort() map
  
// const getNamesSortedByFriendCount = users => {return [...users].sort((userA, userB) => userA.friends.length - userB.friends.length).map(user => user.name)
   
// };

// //Modul 4. task 47 . flatMap filter sort() 
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]
//   const getSortedFriends = users => {return users.flatMap(user => user.friends).filter( ((friend, index, friends) => friends.indexOf(friend) === index)).sort((userA, userB)=> userA.localeCompare(userB))
   
//   };

//   console.log(getSortedFriends(users));

// //Modul 4. task 48

// const getTotalBalanceByGender = (users, gender) => {return users.filter(user => user.gender === gender).reduce((total, user) => {return total + user.balance},0)

// };

// console.log(getTotalBalanceByGender( [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue", 
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ],`male`))



