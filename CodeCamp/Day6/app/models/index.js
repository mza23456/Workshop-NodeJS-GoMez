const config = require("../config/db.js");

const DataType = requrie("sequelize");
const sequelize = new DataType(
    config.DB, 
    config.USER, 
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    } 
);

const db = {};
db.DataType = DataType;
db.sequelize = sequelize;

db.employee = require("../models/employee.model.js")(sequelize, DataType);
db.setting = require("../models/setting.model.js")(sequelize, DataType);

//One to One
db.employee.hasOne(db.setting, {
    onDelete: 'CASCADE'
});
db.setting.belongsTo(db.employee);

module.exports = db;