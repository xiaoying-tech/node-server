"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const App = (0, express_1.default)();
const PORT = 3000;
App.use(express_1.default.static(path_1.default.join(__dirname, "static")));
App.get("/data", (req, res) => {
    res.send("Hello World!");
});
App.use("/", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    var html = fs_1.default.readFileSync(path_1.default.join(__dirname, "static/index.html"));
    res.end(html);
});
App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
