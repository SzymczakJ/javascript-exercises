/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/prefer-default-export
// export class Operation {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   sum() {
//     return this.x + this.y;
//   }
// }

// export default Operation;

class Operation {
  /**
   * 
   * @param {*} x x coord of operation
   * @param {*} y y coord of operation
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /**
   * 
   * @returns sum of x and y
   */
  sum() {
    return this.x + this.y;
  }
}
module.exports = Operation;
