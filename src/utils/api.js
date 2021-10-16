const fetch = require("node-fetch");

export default function getWords() {
  return fetch(
    // `https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt`
    `./refined_list.txt`
  )
    .then((res) => res.text())
    .then((data) => {
      return data.split("\r\n").filter(w => w.length > 3)
    })
}
