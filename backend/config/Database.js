import { Sequelize } from "sequelize";

const db = new Sequelize('filmku', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;