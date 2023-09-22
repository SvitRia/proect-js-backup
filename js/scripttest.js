// // function add(...args) {
// //       let sum = 0;
// //      for (const arg of args) {
// //        sum += arg;
// //       }
// //      console.log(sum)
// //  return sum;
// //     }
    
//     // add(15, 27);
//     // add(12, 4, 11, 48);
//     // add(32, 6, 13, 19, 8);
//     // add(74, 11, 62, 46, 12, 36)

//    // Наведено список людей. Зроби фільтр на ім'я/прізвище.
//    // Наведено список людей. Зроби фільтр на ім'я/прізвище.
// const refs = {
//     contactsList: document.querySelector('.contacts')
// }
// const actors = ['Peter Miller', 'John Carter', 'Amanda Diaz', 'Brad Sanders', 'Devis Brooks', 'Robert Morgan']
// function randerContactsMarkup(actors) {
//     const markup = actors.map((actor) => `<li class="contact">${actor}</li>`
        
//     ).join('')
//     refs.contactsList.insertAdjacentHTML("beforeend",markup)
// // console.log(markup);
    
// }

// randerContactsMarkup(actors)

// function isOpposite(s1,s2){
//     const sum = [];
//     for(i = 0; i < s1.length; i += 1) { 
//     if(s1[i] === s2[i]){sum.push(1)} else {sum.push(2)}
//     };
//     if(sum.every((el) => el === 1)){console.log('false');} else {console.log("true")}
   
//     }
//     isOpposite("ab","AB")

// function abbrevName(name){
//     let ini
//     let firstName
//     let lastName
//     ini = name.toUpperCase().split(" ");
//     firstName = ini[0].split("").slice(0, 1);
//     lastName = ini[1].split("").slice(0, 1);
    
//     return `${firstName}.${lastName}`
// }
// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }
//   function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }

// function findSmallestInt(args) {
   
//     let integer = args[0];
//     for( i = 1; i < args.length; i += 1 ) {
    
//       if(args[i] < integer) {
       
//        integer = args[i];
//       }
//     }
 
//     return integer
//   }
  
function noSpace(x){
    return x.split(" ").join("")
   }
   console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
