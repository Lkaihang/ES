// 1. 逐一暴露
export let name = '123'
exprot let school = function(){

}
// 2. 对象暴露
export {
  name, school
}

//3. 默认暴露

export default {
  name:'123',
  school:''
}

//1. 通用的导入方式
import * as m1 from './../../.js'

//2. 解构形式
import {name, school } from './../../.js'

//3. 简便形式 针对默认暴露
import m3 from './../m3.js'

//4. 可以创建一个app.js文件 将模块导入
  在html文件的script标签中
 <!-- <script src='./../app.js' type='module'></script> -->