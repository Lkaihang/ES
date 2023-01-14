//1. 引入fs
const fs = require('fs');


//使用Promise 实现

const p = new Promise((resolve, reject) =>{
  fs.readFile('../resources/名言.md', (err, data) => {
    resolve(data);
  })
});

p.then(value =>{
  return new Promise((resolve, reject) =>{
    fs.readFile('../resources/墓志铭.md', (err, data) =>{
      resolve([value,data]);
    })
  })
}).then(value => {
  console.log(value.toString());
})
