---
title: Rust
author: tianye
date: 2025-07-08
updated: 2025-07-08 18:49:21
tags: [rust]
---

# Rust

## rust语法

### 变量&常量

#### 变量

rust的变量在默认情况下是不可变的。如果需要变量可变，需要使用关键字`mut`

如`let x = 5;`可变为`let mut x = 5;`

如果是声明了但不使用的变量，加前缀`_`改为`_x`

#### 常量

`const MAX_POINTS: u32 = 100000`

### 基本类型

- 数值类型：有符号整数(i8, i16, i32, i64, isize)、无符号整数(u8, u16, u32, u64, usize)、浮点数(f32, f64)，有理数，复数
- 字符串：字符串字面量，字符串切片&str
- 布尔类型：true，false
- 字符类型：单个Unicode字符，存储为4个字节
- 单元类型：即(),其唯一的值也是()

#### 数值类型

##### 整型

有符号： $-2^{n-1}$~$2^{n-1}-1$

无符号：0~$2^{n}-1$

如: 

- i8 -> $-2^7$~$2^7-1$ -> -128~127

- u8 -> 0~$2^8-1$ -> 0~255

isize和usize取决于计算机的CPU类型，32位CPU则为32为，64位CPU则为64位。

默认为i32

整型溢出 todo

##### 浮点类型

单精度f32和双精度f64

##### NaN

特殊的类型 not a number, 数学上未定义的结果，

##### 基本运算

`+ - * / %`

##### 位运算

- &
- |
- ^
- !
- <<
- `>>`：

##### Range

`1..5`生成1到4的数字，不包含5。

`1..=5`生成1到5的数字，包含5。

常用于循环

```rust
for i in 1..=5 {
    println!("{}",i);
}
```

也可以是连续的字符

```rust
for i in 'a'..='z' {
    println!("{}",i);
}
```

##### 更多数值和计算

- 有理数和复数
- 任意大小的整数和任意精度的浮点数
- 固定精度的十进制小数，常用于货币相关的场景

可以使用`num`库等。

#### 字符

`''`包含的是字符，`""`包含的是字符串

字符`''`始终占4个字节的内存大小。

但字符串`""`默认utf8编码，是变长的，按具体字符集占长度。

#### bool

true & false，内存大小为1个字节。

#### 单元类型

`()`

### 所有权

`&x`访问x的引用

`*y`访问y引用所指向的值

### 复合类型

字符串 & 切片

元组

结构体

数组

### 模式匹配

match & if let





#### 关键字

#### pub

| 修饰符                     | 可见范围                       |
| -------------------------- | ------------------------------ |
| `pub`                      | 对**所有模块**可见（公开 API） |
| `pub(crate)`               | 对**当前 crate（整个包）**可见 |
| `pub(super)`               | 仅对**直接父模块**可见         |
| `pub(in path::to::module)` | 仅对**指定路径的模块**可见     |
| （无修饰符，默认）         | 仅对**当前模块**可见           |

### #[derive(xxx)]

- Debug: #[derive(Debug)]: 支持debug时，自动输出内部值。
- 





## 开发



### 调试

eg:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_config() {
        let config = get_config();
        println!("Config: {:?}", config)
        // assert_eq!(config.admin_username, "admin");
        // assert_eq!(config.admin_password, "password");
    }
}
```

`cargo test`

如果要查看test中的print，`cargo test -- --nocapture`

