const Sequelize  = require("sequelize");
const database = require('../conexao')

const Doenca = database.define('Doenca', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    doenca: {
       type: Sequelize.STRING,
       allowNull: true,
    }
});

module.exports = Doenca