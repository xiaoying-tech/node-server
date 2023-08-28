import express, { Request, Response, Application } from "express";

const App: Application = express();
const PORT = 3000;

App.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

App.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
