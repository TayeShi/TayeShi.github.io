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