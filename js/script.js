// // 1й модуль,завд.5, шаблонні рядки//
// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// // 1й модуль,завд.6, замовлення продукту//
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// // 1й модуль,завд.7, function//
// function sayHi(params) {
//     console.log("Hello, this is my first function!")
//     }
//   sayHi()

// // 1й модуль,завд.8, function//

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b +c}`);
    
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// // 1й модуль,завд,9, return//
// function add(a, b, c) {
//   return a + b + c;
//   console.log(a + b + c);
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// // 1й модуль,завд,10, шаблонны рядки 2//
//   function makeMessage (name, price) {
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
//   };
//   makeMessage('Radar', 6150);
//   makeMessage('Scanner', 3500);

// 1й модуль,завд,11,function//
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
// const totalPrice = orderedQuantity * pricePerItem;
// return totalPrice;
// };
//   calculateTotalPrice (5, 10);
//   calculateTotalPrice (8, 60);
//   calculateTotalPrice (3, 400);
//   calculateTotalPrice (1, 3500);
//   calculateTotalPrice (12, 70);

// 1й модуль,завд,12,function//
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
  
//       const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
     
//       const mesagge = (`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);
//     // Change code above this line
//       return mesagge; 
//   };
//   makeOrderMessage(2, 100, 50);
//   makeOrderMessage(4, 300, 100);
//   makeOrderMessage(10, 70, 200);

//1й модуль,завд,13,function
//   function isAdult(age) {

//     const passed = (age>=18);
 
//     return passed;
//   }
//   isAdult(20);
//   isAdult(14);
//   isAdult(8);
//   isAdult(37);

//1й модуль,завд,14,function // перевірка паролю
// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     const isMatch = (password === 'jqueryismyjam');
  
//     return isMatch;
//   }
//   isValidPassword('mangodab3st');
//   console.log(isValidPassword('mangodab3st') === 'jqueryismyjam');
//   isValidPassword('kiwirul3z');
//   console.log(isValidPassword('kiwirul3z') === 'jqueryismyjam');
//   isValidPassword('jqueryismyjam');
//   console.log(isValidPassword('jqueryismyjam') === 'jqueryismyjam');
   
//1й модуль,завд,15,function // перевірка віку
//   function checkAge(age) {
//     let message;
  
//     if (age >=18) { 
//         console.log(message = 'You are an adult');
//     } else {
//         console.log(message = 'You are a minor');
//     }
  
//     return message;
//   }
//   checkAge(20);
//   checkAge(8);
//   checkAge(14);
//   checkAge(38);
  
//1й модуль,завд,15,function // замовлення товару
// function checkStorage(available, ordered) {
//     let message;
//     if(available < ordered) {
//       console.log(message = `Not enough goods in stock!`);
//       return message;
//     }
//       console.log(message = `Order is processed, our manager will contact you.`);
//     return message;
// }
  
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(200, 20);
//   checkStorage(200, 150);
//   checkStorage(150, 180);

//1й модуль,завд,18,function // перевірка замовлення
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (customerCredits < totalPrice) {
//       console.log(message = "Insufficient funds!");
//       return message;
//     } 
//       customerCredits -= totalPrice;
//       console.log(message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`);
//     return message;
      
//   }

//   makeTransaction(3000, 5, 23000);
//   makeTransaction(1000, 3, 15000);
//   makeTransaction(5000, 10, 8000);
//   makeTransaction(2000, 8, 10000);
//   makeTransaction(500, 10, 5000);

//1й модуль,завд,19,function // перевірка паролю
//   function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       console.log(message =  'Canceled by user!');
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       console.log(message = 'Welcome!');
//     } else {
//       console.log(message = 'Access denied, wrong password!');
//     }
  
//     return message;
//   }
//   checkPassword("mangohackzor");
//    checkPassword(null);
//   checkPassword("polyhax");
//   checkPassword("jqueryismyjam");

//1й модуль,завд.20,function // замовлення товару
// function checkStorage(available, ordered) {
//     let message;
//    if(ordered === 0) {
//      console.log(message = `There are no products in the order!`);
//    } else if (ordered > available) {
//     console.log(message = `Your order is too large, there are not enough items in stock!`);
//   } else {
//      console.log(message = `The order is accepted, our manager will contact you`);
//   }
//     return message;
//   }
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(70, 0);
//    checkStorage(200, 20);
//   checkStorage(200, 250);
//    checkStorage(150, 0);

//1й модуль,завд.21,function // &&
// function isNumberInRange(start, end, number) {
//     const isInRange = (start < number && number < end); 
//    console.log(isInRange);
//     return isInRange;
//   }
//   isNumberInRange(10, 30, 17);
//   isNumberInRange(10, 30, 5);
//    isNumberInRange(20, 50, 24);
//    isNumberInRange(20, 50, 76);

//1й модуль,завд.22,function // ||
//    function checkIfCanAccessContent(subType) {
//     const canAccessContent = ("pro" === subType || subType === "vip"); 
//     console.log(canAccessContent);
//     return canAccessContent;
//   }
//   checkIfCanAccessContent("pro");
//   checkIfCanAccessContent("starter");
//   checkIfCanAccessContent("vip");
//   checkIfCanAccessContent("free");

//1й модуль,завд.23,function // !
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; 
//     console.log(isNotInRange)
//     return isNotInRange;
//   }
//   isNumberNotInRange(10, 30, 17);
//   isNumberNotInRange(10, 30, 5);
//   isNumberNotInRange(20, 50, 24);
//   isNumberNotInRange(20, 50, 76);

//1й модуль,завд.24,function //  визначення знижки
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     if (totalSpent >= 50000) {
//       console.log(discount = GOLD_DISCOUNT);
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//       console.log(discount = SILVER_DISCOUNT);
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//       console.log(discount = BRONZE_DISCOUNT);
//     } else if(totalSpent < 5000) {
//        console.log(discount = BASE_DISCOUNT);
//     }
    
//     return discount;
//   }
//   getDiscount(137000);
//   getDiscount(46900);
//   getDiscount(8250);
//   getDiscount(1300);
//   getDiscount(5000);
//   getDiscount(20000);
//   getDiscount(50000);

//1й модуль,завд.25,function //  тернарний оператор
// function checkStorage(available, ordered) {
//     let message;
  
//   message = ordered > available ? console.log("Not enough goods in stock!") : console.log("The order is accepted, our manager will contact you");
   
//     return message;
//   }
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(200, 20);
//   checkStorage(200, 150);
//   checkStorage(150, 180);

//1й модуль,завд.26,function //  перевірка пароля  
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     message = password === ADMIN_PASSWORD ? console.log("Access is allowed") : console.log("Access denied, wrong password!");
  
//     return message;
//   }
//   checkPassword("jqueryismyjam");
//   checkPassword("angul4r1sl1f3");
//   checkPassword("r3actsux");

//1й модуль,завд.27,function //  switch
// function getSubscriptionPrice(type) {
//     let price;
  
//    switch (type) { 
//       case "starter": 
//       console.log(price = 0); 
//         break;
  
//       case "professional": 
//       console.log(price = 20); 
//         break;
  
//       case "organization": 
//       console.log(price = 50); 
//         break;
//     }
  
//     return price;
//   }

//   getSubscriptionPrice("professional");
//   getSubscriptionPrice("organization");
//   getSubscriptionPrice("starter");

//1й модуль,завд.28,function //  switch
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//     switch(password) {
//       case null: 
//           console.log(message = "Canceled by user!");
//           break;
//         case ADMIN_PASSWORD:
//             console.log(message = "Welcome!");
//           break;
//         default:
//             console.log(message = "Access denied, wrong password!");
  
//     // Change code above this line
//     return message;
//   }
//  }
//     checkPassword("mangohackzor");
//     checkPassword(null);
//     checkPassword("polyhax");
//     checkPassword("jqueryismyjam")

//1й модуль,завд.29,function //  switch
// function getShippingCost(country) {
//   let message;
//   const CHINADELIVERY = 100;
//   const CHILYDELIVERY = 250;
//   const AUSTRALIADELIVERY = 170;
//   const JAMICADELIVERY = 120;
//   switch (country) {
//      case "China":
//         console.log(message = `Shipping ${country} will cost ${CHINADELIVERY} credits`);
//       break;
//      case "Chile":
//         console.log(message = `Shipping ${country} will cost ${CHILYDELIVERY} credits`);
//       break;
//       case "Australia":
//         console.log(message = `Shipping ${country} will cost ${AUSTRALIADELIVERY} credits`);
//       break;
//       case "Jamaica":
//         console.log(message = `Shipping ${country} will cost ${JAMICADELIVERY} credits`);
//       break;
//           default:
//             console.log(message = "Sorry, there is no delivery to your country");
//         }
      
//         return message;
//       }
//       getShippingCost("Australia");
//       getShippingCost("Germany");
//       getShippingCost("China");
//       getShippingCost("Chile");
//        getShippingCost("Jamaica");
//       getShippingCost("Sweden");
      
//1й модуль,завд.30,function //  lenght
// function getNameLength(name) {
//     const message = console.log(`Name ${name} is ${name.length} characters long`); // Change this line
  
//     return message;
//   }
//   getNameLength("Poly");
//   getNameLength("Harambe");
//   getNameLength("Billy");
//   getNameLength("Joe");

//1й модуль,завд.31,function //  lenght 
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//1й модуль,завд.32,function //  slice

// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line
  
//     return substring;
//   }
//   getSubstring("Hello world", 3);
//   getSubstring("Hello world", 6);
//  getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

//1й модуль,завд.33,function //  slice
// function formatMessage(message, maxLength) {
//     let result;
//     if (message.length <= maxLength) {
//       result = message;
//       return result;
//     }
//       result = message.slice(0 , maxLength) + "...";
  
//     /// Change code above this line
//     return result;
//   }
//   formatMessage("Curabitur ligula sapien", 16);
//   formatMessage("Curabitur ligula sapien", 23);
//   formatMessage("Vestibulum facilisis purus nec", 30);
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);

//1й модуль,завд.34,function //  toLowerCase
// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     return normalizedInput;
//   }
//   normalizeInput("Hello world");
//   normalizeInput("This ISN'T SpaM");
//   normalizeInput("Big SALE");

//1й модуль,завд.35,function //  includes
// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//      return result;
//    }
//    checkForName("Egor Kolbasov", "Egor");
//    checkForName("Egor Kolbasov", "egor");
//    checkForName("Egor Kolbasov", "egOr");
//    checkForName("Egor Kolbasov", "Zhenya");
//    checkForName("Vadim Nekrasov", "Vadim");
//    checkForName("Vadim Nekrasov", "vadim");
//    checkForName("Vadim Nekrasov", "Dima");

//1й модуль,завд.36,function //  includes
// function checkForSpam(message) {
//     let result;
//     const normaliseMessage = message.toLowerCase();
//     result = normaliseMessage.includes("spam") || normaliseMessage.includes("sale");
  
//     // Change code above this line
//     return result;
//   }
  
//   checkForSpam("Latest technology news");
//   checkForSpam("JavaScript weekly newsletter");
//   checkForSpam("Get best sale offers now!");
//   checkForSpam("Amazing SalE, only tonight!");
//   checkForSpam("Trust me, this is not a spam message");
//   checkForSpam("Get rid of sPaM emails. Our book in on sale!");
//   checkForSpam("[SPAM] How to earn fast money?");

