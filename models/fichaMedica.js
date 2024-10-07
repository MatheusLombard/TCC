const Sequelize  = require("sequelize");
const database = require('../conexao')
// const Usuarios = require('./usuarios')

const FichaMedica = database.define('FichaMedica', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    medicamentos: {
        type: Sequelize.STRING,
        allowNull: true,
     },
    alergias: {
        type: Sequelize.STRING,
        allowNull: true,
     },
    cancer: {
        type: Sequelize.STRING,
        allowNull: true,
     },
    cancer: {
        type: Sequelize.STRING,
        allowNull: true,
     },
    comorbidades: {
        type: Sequelize.STRING,
        allowNull: true,
     },
    tipoSanguineo: {
        type: Sequelize.STRING,
        allowNull: true,
     },
    obs: {
        type: Sequelize.STRING,
        allowNull: true,
     },
})



module.exports = FichaMedica