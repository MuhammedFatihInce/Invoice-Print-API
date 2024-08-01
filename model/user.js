const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../data/db");


class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resetToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resetTokenExpiration: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize, // Sequelize bağlantısı
    modelName: 'users', // Model adı
    timestamps: true, // Zaman damgalarının kullanılmaması
    paranoid: true
});

module.exports = User;