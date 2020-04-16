import { Server } from "./backend/server";
import express from 'express';
const app = express();

const port = parseInt(process.env.PORT) || 8080;

const server = new Server(app);
server.start(port);
