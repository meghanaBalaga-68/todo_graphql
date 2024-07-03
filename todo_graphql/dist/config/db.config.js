"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const todo_entity_1 = require("../todo/todo.entity");
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'mongodb',
    url: process.env.DB_URL,
    database: process.env.DB_NAME,
    entities: [todo_entity_1.Todo],
    synchronize: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}));
//# sourceMappingURL=db.config.js.map