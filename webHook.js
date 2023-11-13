const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 10001; // 选择一个你喜欢的端口号

app.use(bodyParser.json()); // 解析 JSON 请求体

// 处理 Webhook 请求
app.post("/webhook", (req, res) => {
  const payload = req.body;
  // 处理 Webhook 收到的数据，根据你的需求进行相应的处理

  console.log("收到webhook的消息", payload);

  res.status(200).send("webhook消息成功解析");
});

app.get("/sendData", (req, res) => {
  console.log("接口测试");

  res.status(200).send("hello webhook");
});

// 启动服务器
app.listen(port, () => {
  console.log(`Webhook 服务 监听 at http://localhost:${port}`);
});
