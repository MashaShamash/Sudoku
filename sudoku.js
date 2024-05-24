
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


function solve() {
  const sudoku = read(1);
  for (let i = 0; i < sudoku.length; i += 1) {
    for (let j = 0; j < sudoku.length; j++) {
      if (sudoku[i][j] === "-") {
        sudoku[i][j] = Math.floor(Math.random() * 8) + 1;
      }
      sudoku[i][j] = +sudoku[i][j];
      /**
       * Принимает игровое поле в том формате, в котором его вернули из функции read.
       * Возвращает игровое поле после попытки его решить.
       */
    }
  }
  return sudoku;
}

console.table(solve());
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
