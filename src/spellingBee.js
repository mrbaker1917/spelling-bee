const fs = require("fs");
const text = fs.readFileSync("words_alpha.txt", "utf-8");
const words = text.split("\r\n");

function spellingBee(letters, center) {
  const result = [];
  letters = letters.toLowerCase();
  center = center.toLowerCase();
  const re = new RegExp(
    `^([${letters}])*${center}+([${letters}])*$`
  );
  // gather valid words
  for (let w of words) {
    if (w.match(re) !== null && w.length > 3) {
      result.push(w);
    }
  }
  // print all valid words
  result.sort();
  for (let g of result) {
    console.log(g.toUpperCase());
  }
  console.log(`Found ${result.length} words!`);

  // print possible panagrams
  for (let p of result) {
    if (p.length >= 7) {
      let p_set = new Set(p);
      if (p_set.size >= 7) {
        console.log(`Possible Panagram: ${p.toUpperCase()}`);
      }
    }
  }
}

spellingBee("leiacm", "f");
