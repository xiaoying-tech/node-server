import express, { Request, Response, Application } from "express";

const App: Application = express();
const PORT = 3000;

// App.use(express.static(path.join(__dirname, "static")));

App.get("/api/data", (req: Request, res: Response): void => {
  console.log(1111);
  res.send("Hello World!");
});

// App.use("/", function (req, res) {
//   res.setHeader("Content-Type", "text/html");
//   var html = fs.readFileSync(path.join(__dirname, "static/index.html"));
//   res.end(html);
// });

App.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
