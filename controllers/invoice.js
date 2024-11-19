const { Op } = require("sequelize");

const Invoices = require("../model/invoice");
const Users = require("../model/user");

exports.get_invoices = async function (req, res) {
  try {
    const invoices = await Invoices.findAll();
    res.send(invoices);
  } catch (err) {
    console.log(err);
  }
};

exports.get_withUser = async function (req, res) {
  try {
    const invoices = await Invoices.findAll({
      include: {
        model: Users, // Bu, User kayıtlarını Invoice kaydı olmasa bile getirecektir
        attributes: ["name"],
      },
    });
    res.send(invoices);
  } catch (err) {
    console.log(err);
  }
};

exports.get_invoicePath = async function (req, res) {
  try {
    const invoices = await Invoices.findAll({
      attributes: ["id", "userId", "invoicePath"],
      include: {
        model: Users, // Bu, User kayıtlarını Invoice kaydı olmasa bile getirecektir
        attributes: ["name"],
      },
    });
    res.send(invoices);
  } catch (err) {
    console.log(err);
  }
};

exports.get_invoiceById = async function (req, res) {
  const id = req.params.id;
  try {
    const invoices = await Invoices.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    res.send(invoices);
  } catch (err) {
    console.log(err);
  }
};

exports.get_invoiceByUserId = async function (req, res) {
  const id = req.params.userid;
  try {
    const invoices = await Invoices.findAll({
      where: {
        userId: {
          [Op.eq]: id,
        },
      },
    });
    res.send(invoices);
  } catch (err) {
    console.log(err);
  }
};

exports.get_invoicePathByUserId = async function (req, res) {
  const UserId = req.params.userid;
  try {
    let invoices = await Invoices.findAll({
      attributes: ["id", "userId", "invoicePath", "download", "updatedAt"],
      include: {
        model: Users, // Bu, User kayıtlarını Invoice kaydı olmasa bile getirecektir
        attributes: ["name"],
      },
      where: {
        userId: {
          [Op.eq]: UserId,
        },
      },
    });

    invoices = invoices.map(function(invoice){
        invoice.user = invoice.user.name;
        invoiceId = invoice.id;
        userName = invoice.user;
        invoicePath = invoice.invoicePath;
        download = invoice.download;
        updatedAt = invoice.updatedAt;
        return {invoiceId, UserId, userName, invoicePath, download, updatedAt};
    })

    res.send(invoices);
  } catch (err) {
    console.log(err);
  }
};

exports.post_download = async function(req, res) {
  const id = req.body.invoiceId;
  const download = req.body.download;

  try {
      const invoices = await Invoices.findOne({
          where: {
              id: id
          }
      });

      if(!invoices)
      {
          const message = "Fatura bulunamadı.";
          const isSuccess = false;
          return res.send({message: message, isSuccess: isSuccess});
      }

      invoices.download = download;
      
      
      await invoices.save();

      const message = "İndirildi.";
      const isSuccess = true;
      return res.send({message: message, isSuccess: isSuccess});
  }
  catch(err) {
      console.log(err);
  }
}

