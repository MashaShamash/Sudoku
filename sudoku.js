const {EOL} = require("os")


const fs = require('fs');
function read() {
  const readFileSync = fs.readFileSync("./puzzles.txt", "utf-8").split(EOL).map((el) => el.split(""));
  return readFileSync;
  // let sudokuString = []; 
  
  // // while (readFileSync.length) {
  // //   sudokuString.push(readFileSync.splice(0, 9));
  // // }
  // // return sudokuString;

}
console.log(read());


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
