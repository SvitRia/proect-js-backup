//Modul 3. Task 2  Objekt    

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner:{
//       name:"Henry",
//       phone:"982-126-1588",
//       email:"henry.carter@aptmail.com"
//     }
//   };

//Modul 3. Task 3  Objekt звернення до властивості об*єкта

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
 
  //Modul 3. Task 4  Objekt звернення до властивості об*єкта

//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length-1]
//   console.log(lastTag);

 //Modul 3. Task 5  Objekt звернення до властивості об*єкта

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

 //Modul 3. Task 6  Objekt; зміна властивості об*єкта

//  const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
//  apartment.price = 5000;
//  apartment.rating = 4.7;
//  apartment.owner.name = "Henry Sibola";
//  apartment.tags.push("trusted")

 //Modul 3. Task 7  Objekt: додавання властивостей об*єкта

//  const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
//  apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country:"Jamaica", city:"Kingston"};

//Modul 3. Task 8  Objekt: синтаксис коротких властивостей

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//  name,
//  price,
//  image,
//  tags 
// };
// console.log(name);

//Modul 3. Task 9  Objekt: синтаксис обчислювальних властивостей

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam"
// };

//Modul 3. Task 10  Objekt: for ...in

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment){
//   keys.push((key));
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//Modul 3. Task 11  Objekt: for ...in hasOwnProperty

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//  if (apartment.hasOwnProperty(key)) { 

//   keys.push(key);
//   values.push(apartment[key]);
// }
 
// }

//Modul 3. Task 12  Objekt.keys() for ...of hasOwnProperty

// function countProps(object) {
//   let propCount = 0;
  
// const keys = Object.keys(object);
// for (let key of keys) { 
//  if (object.hasOwnProperty(key)) {
//   propCount += 1;
// }
//  }
//   return propCount;
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

//Modul 3. Task 13  Objekt.keys() for ...of 

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
//  }

// console.log(values);
// console.log(keys)

//Modul 3. Task 14  Objekt.keys() 

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const countProps = Object.keys(object)
  
//   propCount = countProps.length;
  
//   return propCount
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

//Modul 3. Task 15  Objekt.keys() Object.values()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

//Modul 3. Task 16   Object.values()

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const countTotalSalary = Object.values(salaries);
//   for ( let values of countTotalSalary) {
//     totalSalary += values;
//   }

//   return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

//Modul 3. Task 17   маніпуляція масивом однотипних об'єктів

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

//Modul 3. Task 18

// const products = [ 
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (let product of products) {
//     if (productName === product.name) {
//       console.log(product.price);
//       return product.price
//     }
   
//   }
//   return null
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine")

//Modul 3. Task 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   let arr = [];
//   for (const product of products) {
//       if (product.hasOwnProperty(propName)) {
//       arr.push(product[propName]);
//     }
//   }
//   return arr; 
  
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

//Modul 3. Task 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//  let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = (product.price * product.quantity)
//     }
//   }
// console.log(totalPrice);
//   return totalPrice;

// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner")

//Modul 3. Task 21 Деструктуризація

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

//Modul 3. Task 22 Деструктуризація
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures


// const meanTemperature = (yesterday + today + tomorrow) / 3;

//Modul 3. Task 23 Деструктуризація

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday, 
//   today:highToday, 
//   tomorrow:highTomorrow, 
//   icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//Modul 3. Task 24 Деструктуризація

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//Modul 3. Task 25 Деструктуризація
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: { high: highToday, low: lowToday, icon: todayIcon, },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg', }
// } = forecast;

//Modul 3. Task 26 Деструктуризація

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh}} = forecast;

 
//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4)
//    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//  }
 
//  calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });
//  calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })

//Modul 3. Task 27 ... (spread)

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//Modul 3. Task 28 ... (spread)

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];



// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//Modul 3. Task 29 ... (spread)

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

//Modul 3. Task 30 ... (spread)

// function makeTask(data) {
//   const oldData = {
//     completed: false,
//     category: "General",
//     priority: "Normal"
//   };

//   const newdata = {...oldData, ...data}

//     return  newdata 
//   }


// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" }) 
// makeTask({ priority: "Low", text: "Choose shampoo" }) 
// makeTask({ text: "Buy bread" })

//Modul 3. Task 31 ... (spread)

// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   console.log(sum)
//   return sum;
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36)

//Modul 3. Task 32 ... (rest)

// function addOverNum(ferstNummer, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > ferstNummer) {
//       total += arg;
//     }
//   }
//  console.log(total)
//   return total;
  
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36)

//Modul 3. Task 33 ... (rest)

// function findMatches(ferstArg, ...args) {
//   const matches = []; 
//   for(const arg of args) {
//     if( ferstArg.includes(arg)) {
//       matches.push(arg)
//     }
//   }
//   console.log(matches)
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

//Modul 3. Task 34  метод об'єкта.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//  removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//  },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune")

//Modul 3. Task 35  метод об'єкта this

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

//Modul 3. Task 36  метод об'єкта 

// const atTheOldToad = {
//   potions:[],

// };

//Modul 3. Task 37  метод об'єкта 

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   }

// };

//Modul 3. Task 38  метод об'єкта

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName)

//   },
// };

//Modul 3. Task 39  метод об'єкта

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const indexPotions = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotions, 1)
//   },
// };

//Modul 3. Task 40  метод об'єкта

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const indexName = this.potions.indexOf(oldName);
//     this.potions.splice(indexName, 1, newName)

//   },
// };

//Modul 3. Task 41  метод об'єкта
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//   }
//   this.potions.push(newPotion);
// },

//   removePotion(potionName) {  
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);  
//     }
//       };
//       return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//      for (const potion of this.potions){
//     if (potion.name === oldName) {
//       return potion.name = newName;
//     }
//   }
//   return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
//  console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
//  console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//  console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//  console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
//  console.log(atTheOldToad.removePotion("Dragon breath"));
//  console.log(atTheOldToad.removePotion("Speed potion"));
//  console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
//  console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
