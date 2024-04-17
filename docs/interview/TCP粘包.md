# TCP 粘包

## 是什么

TCP粘包（TCP Packet Coalescing）是指在使用TCP协议进行数据传输时，发送端连续发送的多个数据包到达接收端时可能被合并为一个较大的数据块，或者接收端从缓冲区读取数据时，无法准确地区分出原本分开发送的多个数据包的边界的现象。

## 为什么

TCP是一个面向连接的、可靠的传输层协议，它将数据流看作无边界的字节流，而不像UDP那样保留每个数据报文的独立性。TCP协议为了提高传输效率，可能会将多个小的数据包聚合成一个大的数据块进行发送，或者由于网络状况、拥塞控制等因素，导致多个数据包在网络中排队等待，最终一起到达接收端。

### 可能产生原因：

1. 发送方因素：TCP协议内部的 Nagle 算法（默认的）为了减少网络中微小的数据包，可能会缓存较小的数据片段，并等到一定条件满足时再一起发送。
2. 接收方因素：TCP接收端有一个缓冲区，当数据包到达时会先存储在缓冲区中，如果接收应用没有及时读取数据，那么后续到达的数据包可能会与之前的数据包在缓冲区内连续存放，造成接收端无法区分原始数据包的边界。

图示

1. 理想情况下，接收方会按顺序依次接收msg1、msg2、msg3。

![image-20240417090413248](https://assets.tayeshi.cn/markdown/image-20240417090413248.png)

2. 但发送方为了提高效率，对消息进行了合并处理。

![image-20240417090423560](https://assets.tayeshi.cn/markdown/image-20240417090423560.png)

3. 接收方缓冲区大小有限，不知边界，无法正确处理发送来的数据。(半包)

   ![image-20240417090430343](https://assets.tayeshi.cn/markdown/image-20240417090430343.png)

## 解决办法

为了解决TCP粘包问题，应用程序在设计时通常需要在应用层制定一种协议或规则来划分数据包的边界，常见的解决方案包括：

- 定长消息：每个消息具有固定的长度，根据长度字段来判断消息的结束位置。
- 分界符法：在每个消息末尾添加特定的分隔符，接收方通过查找分隔符来分离出一个个独立的消息。
- 消息头+消息体长度法：在每个消息前添加一个包含消息长度的头部，根据头部的信息来提取完整的消息内容。

简单的处理代码：

```javascript
const net = require('net');

// 创建TCP服务器
const server = net.createServer((socket) => {
  console.log('Client connected');

  // 初始化缓存用于暂存接收到的数据
  let buffer = Buffer.alloc(0);

  socket.on('data', (chunk) => {
    // 每次接收到数据，将其追加到缓存中
    buffer = Buffer.concat([buffer, chunk]);

    // 假设我们约定每条消息是4字节长度
    while (buffer.length >= 4) {
      // 提取第一条消息
      const messageLength = buffer.readInt32BE(0);
      if (buffer.length < messageLength + 4) {
        // 如果剩余数据不足以构成一条完整消息，则停止本次循环，等待更多数据
        break;
      }

      // 解析出并处理第一条完整消息
      const message = buffer.slice(4, 4 + messageLength);
      console.log('Received message:', message.toString());

      // 移除已处理消息部分，剩余部分继续等待下次处理
      buffer = buffer.slice(4 + messageLength);
    }
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

