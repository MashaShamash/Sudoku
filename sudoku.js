const fs = require("fs");
function read(num) {
  const fs = require("fs");
  const read1 = fs.readFileSync("./puzzles.txt", "utf-8").split("\r\n");
  const getSudoku = read1[num - 1].split("");
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(getSudoku.slice(i * 9, (i + 1) * 9));
  }
  const number = board.map((row) =>
    row.map((el) => {
      if (el === "-") {
        return (el = null);
      }
      return Number(el);
    })
  );
  return number;
}
console.table(read(1));

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
