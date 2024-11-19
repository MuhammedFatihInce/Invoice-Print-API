const Printer = require("../model/printer");
const { Op } = require('sequelize');

exports.post_printer = async function(req, res) {
    const id = req.params.userid;
    const Name = req.body.Name;
    const PortNumber = req.body.PortNumber;
    const HostAddress = req.body.HostAddress;
    const Status = req.body.Status;

    try {
        const printer  = await Printer.findOne({ where: { [Op.and]: [{ Name: Name }, { HostAddress: HostAddress }],}});
        if(printer) {
            const isSuccess = false
            const message = "Yazıcı daha önce kayıt olunmuş."
            
            return res.send({message: message, isSuccess: isSuccess });

        }
        const newPrinter = await Printer.create({ Name: Name, PortNumber: PortNumber, HostAddress: HostAddress, Status: Status, userId: id });

        const message = "Yazıcı bilgisi başarılı şekilde kaydedildi."
        const isSuccess = true;
       
        return res.send({message: message, isSuccess: isSuccess });
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_printer = async function (req, res) {
  const id = req.params.userid;
    try {
      const printer = await Printer.findAll({ 
        where:{
          userId: id
      }
    });
      res.send(printer);
    } catch (err) {
      console.log(err);
    }
  }

exports.post_updateStatus = async function(req, res) {
  const id = req.params.userid;
  const Name = req.body.Name;
  const HostAddress = req.body.HostAddress;
  const status = req.body.Status;

  try {
      const printer = await Printer.findOne({
          where: {
            userId: id,
            Name: Name,
            HostAddress: HostAddress
          }
      });

      if(!printer)
      {
          const message = "Fatura bulunamadı.";
          const isSuccess = false;
          return res.send({message: message, isSuccess: isSuccess});
      }

      printer.Status = status;
      
      
      await printer.save();

      const message = "Güncellendi.";
      const isSuccess = true;
      return res.send({message: message, isSuccess: isSuccess});
  }
  catch(err) {
      console.log(err);
  }
}

  