// JS 是弱类型，后端（除 python）是强类型
var a = 100;
// var a = "100"
// var a = true
// TypeScript 是把弱类型转为强类型，简单理解，就是带有类型检测的 JavaScript
//  规定什么类型就只能是什么类型
var x = 100;
// 安装  yarn add typescript -g
// 查看  tsc -v
// ts 转换成 js           tsc <fileName>.ts
// 自动 实时将 ts 转为 js  tsc <fileName>.ts -w
// 一、TypeScript 基础
// 1. 定义基本类型
var fruit = "apple";
var inventory = 5;
var isRed = true;
// 2. 特殊的基本类型 (null, undefined）
// null, undefined 是所有类型的子类,所以都不会报错
var nul = null;
var und = undefined;
var nul1 = null;
var nul2 = null;
var nul3 = null;
var und1 = undefined;
var und2 = undefined;
var und3 = undefined;
// 3. any 任意类型
// 用any类型，ts就没有意义
var say = 100;
var sayAgain = "string";
// 4. 联合类型 ( | )
var count1 = 100;
var count2 = "100";
var obj1 = {
  name: "Jessica",
  age: 18,
};
// 将两个接口合并起来
var obj2 = {
  name: "Tony",
  age: 18,
  sex: true,
  class: 3,
  address: "Earth",
};
var obj3 = {
  name: "Tony",
  age: 123,
  sex: true,
  class: 2000,
  address: "Earth",
};
// 三、枚举 Enum
// 在已知范围中选一个(如：几月份、星期几)，Element UI 都是枚举，如：button的type已知选项有6种，size有三种
// 枚举（在已知范围中选取一个，如：周一）
// /两种写法
// 写法一：只写key，不写value
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));
// Direction Direction2 报错可忽略
// 因为默认 js和ts中各有一个，之后删除ts文件即可
console.log(Direction); // 显示八项
console.log(Direction[0]); // Up
console.log(Direction.Up); // 0
// 写法二
var Direction2;
(function (Direction2) {
  Direction2["Up"] = "up";
  Direction2["Down"] = "down";
  Direction2["Left"] = "left";
  Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction); // 显示四项  看起是对象，实际是枚举类型
// 四、泛型 Generics (ts中：有<>就是泛型、定义数组就会用到泛型)
// ts中定义 元组 和 数组
// 一、定义元组（ts中 数组的类型不统一就叫 元祖）
// let arr = [1,2,3,'str']
var arr1 = [1, "str"];
// 元组类型和值的位置要一一对应
// 二、定义数组
// 方式一
var arr2 = [1, 2, 3];
// 方式二
var arr3 = ["asd"]; // 有<>是泛型
var arr4 = [1, 2, 3]; // 有<>是泛型
// 三、泛型
function echo(arg) {
  return arg;
}
echo1("100");
var str = echo("str");
str.push(); // 此时echo1返回值是any string 不能用.push() 但是现在无法检测错误
// <T> 占位符，不一定里边都写T，可以写多个
// 第一个冒号后是 参数类型，第二个冒号后是 返回值的类型
// void 返回值为空
// function echo1(arg: number): void
function echo2(arg, num) {
  return arg;
}
// let str = echo(100, 200)
// 四、约束性泛型(泛型与接口相结合）
// 案例一
function echo3(arr) {
  // arr.push()  写在这里会报错
  return arr;
}
var arr = echo3([1, 2, 3]);
function echo3(arr) {
  console.log(arr.length);
  return arr;
}
