# JWT

Json Web Token。

参考https://datatracker.ietf.org/doc/html/rfc7519

## JWT的组成

```
eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```

由`header.payload.signature`组成

### header

header其实是JOSE Header（Joint Object Signing and Encryption Header）。是JSON Web Signature (JWS) 和 JSON Web Encryption (JWE) 中的一个重要组成部分。它位于 JWT（JSON Web Token）的头部，并且通常用于携带与签名或加密相关的元数据。

#### 标准参数

| key  | name      |                                |
| ---- | --------- | ------------------------------ |
| alg  | Algorithm | 指定了签名或加密算法。         |
| typ  | Type      | 指示了对象类型，通常是 `JWT`。 |
| ...  | ...       | 其他可以不太用管               |

通常如:

```
{
	"typ":"JWT",
    "alg":"HS256"
}
```

## payload

payload也就是JWT Claims。分为三种:

- Registered Claim Names: 保留的claim。
- Public Claim Names: 公共的信息。一般携带的信息放在这。
- Private Claim Names: 私有的声明。生产者和消费者都同意使用的声明。

Registered Claim Names保留的信息：
- `iss`:
- `sub`:
- `and`:
- `exp`:
- `nbf`:
- `iat`:
- `jti`: 
