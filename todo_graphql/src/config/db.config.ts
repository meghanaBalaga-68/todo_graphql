import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Todo } from "src/todo/todo.entity";

export default registerAs('orm.config', (): TypeOrmModuleOptions => ({
    type: 'mongodb',
    url: process.env.DB_URL,
    database: process.env.DB_NAME,
    entities:[Todo],
    synchronize: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}));