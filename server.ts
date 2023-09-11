import express, { Request, Response, Application } from "express";
import path from "path";

const App: Application = express();
const PORT = 3000;

App.use(express.static(path.join(__dirname, "static")));

App.get("/data", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

App.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});

