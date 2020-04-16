"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
class Server {
    constructor(app) {
        this.app = app;
        this.app.get("/api", (req, res) => {
            res.send("You have reached the API!");
        });
        this.app.get("*", (req, res) => {
            res.sendFile(path.resolve("./") + "/build/frontend/index.html");
        });
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }
}
exports.Server = Server;
