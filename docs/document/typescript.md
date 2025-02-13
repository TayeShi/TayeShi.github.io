# Typescript

## Utility Types（公共类型）

参考: https://www.typescriptlang.org/docs/handbook/utility-types.html

### `Partial<Type>`

Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

构造一个包含T中所有属性且都为可选的type。

使用场景： 当需要更新T中部分参数时

### `Pick<Type， Keys>`

Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

构造一个从类型T中挑选部分指定属性组合而成的类型。

```typescript
interface User {
    id: number;
    name: string;
    age: number;
    gender: string;
}

// 使用 Pick 创建仅包含 name 和 age 属性的新类型
type UserInfo = Pick<User, 'name' | 'age'>;

// 应用实例
const userInfo: UserInfo = {
    name: "Alice",
    age: 30,
};
```

### `Omit<Type>`

Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.

构造一个从类型T中去掉部分指定属性组合而成的类型。与Pick相反

```typescript
interface User {
    id: number;
    name: string;
    age: number;
    gender: string;
}

// 使用 Omit 创建排除 gender 属性的新类型
type UserWithoutGender = Omit<User, 'gender'>;

// 应用实例
const userWithoutGender: UserWithoutGender = {
    id: 1,
    name: "Bob",
    age: 25,
};
```

## `tsconfig.json`
https://json.schemastore.org/tsconfig

### `compilerOptions`
指定TypeScript编译器如何编译你的项目

#### `module`
指定编译后的模块标准, 除了下面的，还包括`None`, `Node16`, `NodeNext`, `Preserve`

- `CommonJS`: 编译成`require()`、`module.exports`的格式
- `ESNext`: 使用最新的JavaScript模块标准（即ECMAScript模块）
- `ES2015/ES6/ES2020/ES2022`: 指定版本的ES
- `UMD(Universal Module Definition)`: 一种试图支持所有模块定义API的模式。它可以在AMD、CommonJS和全局变量定义之间自动切换，这使得它非常适合编写既能在浏览器环境中又能在服务器端运行的库
- `AMD(Asynchronous Module Definition)`: 主要用于浏览器环境，允许模块和依赖异步加载。完全基于浏览器的应用，并且你不想用打包工具，可以使用
- `System`: 一种动态模块加载器，可以加载各种格式的模块（包括ES模块、CommonJS和AMD），适用于开发阶段，因为它允许你以不同的模块格式混合使用代码