const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../data/db");

class Invoice extends Model{}

 Invoice.init({
    invoiceDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    paymentDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    tax_rate: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
        defaultValue: 18.00
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,   
        allowNull: false
    },
    invoicePath:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    download:{
        type: DataTypes.BOOLEAN,
        allowNull: false 
    }
},
{
    sequelize,
    modelName: "invoices",
    timestamps: true,
    paranoid: true  // Soft delete özelliği etkinleştirildi
});

module.exports = Invoice;
