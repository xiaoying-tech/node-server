"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const App = (0, express_1.default)();
const PORT = 3000;
App.get("/api/data", (req, res) => {
    console.log(3333);
    res.send("Hello World! 11111");
});
App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
