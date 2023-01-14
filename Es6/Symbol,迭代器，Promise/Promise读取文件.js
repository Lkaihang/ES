//1. 引入 fs模块
const fs = require('fs');

//2. 调用方法读取文件
// fs.readFile('../resources/名言.md', (err, data) =>{
//   //如果失败
//   if(err) throw err;
//   //成功
//   console.log(data.toString());
// })

//3. 使用Promise封装
const p = new Promise(function(resolve, reject){
  setTimeout(()=>{
    fs.readFile('../resources/名言.md', (err, data) =>{
      //如果判断失败
      if(err) reject(err);
      //如果成功
      resolve(data);
    })
  },1000)
});

p.then(function(value){
  console.log(value.toString());
}, function(reason){
  console.log('读取失败!');
})