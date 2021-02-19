/*
 * @Autor: GeekMzy
 * @Date: 2021-02-20 06:59:06
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-20 07:00:33
 * @FilePath: /js-base/src/promise.js
 */

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve()
  console.log(2);
})

promise.then(() => {
  console.log(3);
})

console.log(4);