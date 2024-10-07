const Sequelize = require("sequelize")
const database = require("../conexao")

const UsuarioDoenca = database.define('usuarioDoenca' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },

})

module.exports = UsuarioDoenca