"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const App = (0, express_1.default)();
const PORT = 3000;
App.use(express_1.default.static(__dirname + "/static"));
App.get("/data", (req, res) => {
    res.send("Hello World！！！!");
});
App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
