const Sequelize  = require("sequelize");
const database = require('../conexao');
const FichaMedica = require("./fichaMedica");
const Doenca = require("./doenca");
const UsuarioDoenca = require("./usuarioDoenca");


const Usuarios = database.define('Usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    nome: {
       type: Sequelize.STRING,
       allowNull: true,
    },
    nascimento: {
       type: Sequelize.DATEONLY,
       allowNull: true,
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    telefonePessoal: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    telefoneEmergencia: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    CEP: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

Usuarios.belongsTo(FichaMedica, {
    constraint: true,
    foreignKey: 'IdFichaMedica'
})


Usuarios.belongsToMany(Doenca, {
    through: {
        model: UsuarioDoenca
    },
    foreignKey: 'idUsuario',
    constraint: true
})

module.exports = Usuarios

