import express, { Request, Response, Application } from "express";
import path from "path";
import fs from "fs";

const App: Application = express();
const PORT = 3000;

App.use(express.static(path.join(__dirname, "static")));

App.get("/api/data", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

App.use("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  var html = fs.readFileSync(path.join(__dirname, "static/index.html"));
  res.end(html);
});

App.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
  console.log("测试一下，是否可以自动化拉代码！！！");
});

