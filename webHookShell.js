const { exec } = require("child_process");

// 指定要运行的脚本文件路径
const scriptPath = "webHookCallback.sh";

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
