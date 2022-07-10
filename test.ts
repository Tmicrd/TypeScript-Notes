// JS 是弱类型，后端（除 python）是强类型
var a = 100
// var a = "100"
// var a = true

// TypeScript 是把弱类型转为强类型，简单理解，就是带有类型检测的 JavaScript
//  规定什么类型就只能是什么类型
let x: number = 100

// 安装  yarn add typescript -g  
// 查看  tsc -v       
// ts 转换成 js           tsc <fileName>.ts        
// 自动 实时将 ts 转为 js  tsc <fileName>.ts -w

// 一、TypeScript 基础
// 1. 定义基本类型
let fruit: string = "apple"
let inventory: number = 5
let isRed: boolean = true

// 2. 特殊的基本类型 (null, undefined）
// null, undefined 是所有类型的子类,所以都不会报错
let nul: null = null
let und: undefined = undefined

let nul1: number = null
let nul2: string = null
let nul3: boolean = null

let und1: number = undefined
let und2: string = undefined
let und3: boolean = undefined

// 3. any 任意类型
// 用any类型，ts就没有意义
let say: any = 100
let sayAgain: any = "string"

// 4. 联合类型 ( | )
let count1: number | string = 100
let count2: number | string = "100"

// 二、接口 Interface  &
// 避免将类型写错，如：将 100 写成 ‘100’
// 接口前边都要加大写的 I 如：IUserInfo
// Interface 和 let、const 的用法一样

// 案例一
interface IUserInfo {
    name: string,
    age: number,
    sex?: boolean 
    // 加 ? 表示可有可无，即使在obj1中不写 sex:true 
    // obj1 也不会报错
}

let obj1: IUserInfo = {
    name: "Jessica",
    age: 18,
    // sex: true,
}

// 案例二
interface IUserInfo {
    name: string,
    age: number,
    sex?: boolean 
}

interface IUser {
    class: number,
    address: string
}

// 将两个接口合并起来
let obj2: IUserInfo & IUser = {
    name: "Tony",
    age: 18,
    sex: true,
    class: 3,
    address: "Earth"
}

// type  定义类型别名(重命名，更简洁）
type IAll = IUserInfo & IUser

let obj3: IAll = {
    name: "Tony",
    age: 123,
    sex: true,
    class: 2000,
    address: "Earth"
} 

// 三、枚举 Enum
// 在已知范围中选一个(如：几月份、星期几)，Element UI 都是枚举，如：button的type已知选项有6种，size有三种
// 枚举（在已知范围中选取一个，如：周一）
// /两种写法

// 写法一：只写key，不写value
enum Direction {
    Up,
    Down,
    Left,
    Right
}
// Direction Direction2 报错可忽略
// 因为默认 js和ts中各有一个，之后删除ts文件即可

console.log(Direction); // 显示八项
console.log(Direction[0]); // Up
console.log(Direction.Up); // 0


// 写法二
enum Direction2 {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}
console.log(Direction); // 显示四项  看起是对象，实际是枚举类型

// 四、泛型 Generics (ts中：有<>就是泛型、定义数组就会用到泛型)
// ts中定义 元组 和 数组

// 一、定义元组（ts中 数组的类型不统一就叫 元祖）
// let arr = [1,2,3,'str']

let arr1: [number, string] = [1,"str"]
// 元组类型和值的位置要一一对应

// 二、定义数组
// 方式一
let arr2: number[] = [1,2,3]

// 方式二
let arr3: Array<string> = ['asd'] // 有<>是泛型
let arr4: Array<number> = [1,2,3] // 有<>是泛型

// 三、泛型
function echo(arg) {
    return arg
}

echo1('100')

let str = echo('str')
str.push() // 此时echo1返回值是any string 不能用.push() 但是现在无法检测错误

// <T> 占位符，不一定里边都写T，可以写多个
// 第一个冒号后是 参数类型，第二个冒号后是 返回值的类型
// void 返回值为空
// function echo1(arg: number): void 

function echo2<T, U>(arg: T, num: U) : T {
    return arg
}

// let str = echo(100, 200)

// 四、约束性泛型(泛型与接口相结合）

// 案例一
function echo3<T>(arr: T): T {
    // arr.push()  写在这里会报错
    return arr
}
let arr = echo3([1,2,3])
// arr.push()   写在这里不报错

// 案例一的解决方法（约束型泛型）
interface ILen {
    length: number
}

function echo3<T extends ILen>(arr: T): T {
    console.log(arr.length)
    return arr
}

