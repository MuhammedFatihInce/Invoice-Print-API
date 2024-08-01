const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../data/db");


class Printer extends Model {}

Printer.init({
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PortNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    HostAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize, // Sequelize bağlantısı
    modelName: 'printers', // Model adı
    timestamps: false, // Zaman damgalarının kullanılmaması
    paranoid: true
});

module.exports = Printer;