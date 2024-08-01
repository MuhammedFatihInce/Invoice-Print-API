const express = require("express");
const app = express();

const routers = require("./routes/routes");


app.use(express.json());

const sequelize = require("./data/db");
const dummyData = require("./data/dummy-data");
const Invoice = require("./model/invoice");
const User = require("./model/user");
// const Printer = require("./model/printer");


// one to many
User.hasMany(Invoice, {
    foreignKey: {
        name: 'userId',
        allowNull: true,
        // defaultValue: 1
    },
    onDelete: "SET NULL",
    onUpdate: "SET NULL",
});
Invoice.belongsTo(User);


(async () => {
    await sequelize.sync({ force: true });
    // await sequelize.sync({ alter: true });

    await dummyData();
})();
app.use("/api",routers);

app.listen(3000, function(){
    console.log("listening on port 3000");
});