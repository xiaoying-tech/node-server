const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const port = 1001; //

app.use(bodyParser.json()); // 解析 JSON 请求体

// 指定要运行的脚本文件路径
const scriptPath = "webHookCallback.sh";
const execCallback = () => {
  // 使用 exec 函数运行脚本
  exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    // 打印脚本的标准输出
    console.log(`stdout: ${stdout}`);

    // 打印脚本的错误输出
    console.error(`stderr: ${stderr}`);
  });
};

// 处理 Webhook 请求
app.post("/webhook", (req, res) => {
  const payload = req.body;
  // 处理 Webhook 收到的数据，根据你的需求进行相应的处理

  console.log("收到webhook的消息", payload);
  execCallback();

  res.status(200).send("webhook消息成功解析");
});

app.get("/sendData", (req, res) => {
  console.log("接口测试");

  res.status(200).send("hello webhook");
});

// 启动服务器
app.listen(port, () => {
  console.log(`Webhook 服务 监听 ${port}`);
});
