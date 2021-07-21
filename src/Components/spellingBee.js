// const fs = require("fs");
// const text = fs.readFileSync("C:/Users/Asus/spelling-bee/src/words_alpha.txt", "utf-8");
// const words = text.split("\r\n");

// import { words } from "./data.js"
// console.log(words)

// function SpellingBee(letters, center) {
//   const result = [];
//   letters = letters.toLowerCase();
//   center = center.toLowerCase();
//   const re = new RegExp(`^([${letters}])*${center}+([${letters}])*$`);
//   // gather valid words
//   for (let w of words) {
//     if (w.match(re) !== null && w.length > 3) {
//       result.push(w);
//     }
//   }
//   result.sort();
//   return result;
// }

// function Panagrams(arr) {
//   // find possible panagrams
//   const pgs = [];
//   for (let p of arr) {
//     if (p.length >= 7) {
//       let p_set = new Set(p);
//       if (p_set.size >= 7) {
//         pgs.push(p.toUpperCase());
//       }
//     }
//   }
//   return pgs
// }

// export default SpellingBee