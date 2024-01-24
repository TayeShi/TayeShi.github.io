# Go

## Go 基础

### 运算符

`<<<` 向左位移操作

eg:

```
a := 1 // 二进制表示: 0001
b := a << 1 // 二进制表示: 0010, 十进制表示: 2
```

### Constants Go 语言中的常数

`iota` 是一个特殊的常量生成器，它用于在 const 声明中生成一系列相关值而无需显式地写出每个值。每当 const 关键字出现时，iota 的计数会重置为 0，然后在每新的一行常量声明中自动递增。

eg:

```go
const (
    Sunday = iota    // 0
    Monday           // 1
    Tuesday          // 2
    Wednesday        // 3
    Thursday         // 4
    Friday           // 5
    Saturday         // 6
)

// 高级用法
const (
    a = 1 << iota  // 1: 1 << 0
    b              // 2: 1 << 1
    c              // 4: 1 << 2
    d              // 8: 1 << 3
)
```
