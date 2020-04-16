"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./backend/server");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
const server = new server_1.Server(app);
server.start(port);
