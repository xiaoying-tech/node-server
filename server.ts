import express, { Request, Response, Application } from "express";

const App: Application = express();
const PORT = 3000;

App.get("/api/data", (req: Request, res: Response): void => {
  console.log(3333);
  console.log(111111);
  res.send("Hello World! 11111");
});

App.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
