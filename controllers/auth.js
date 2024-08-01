const User = require("../model/user");
const bcrypt = require("bcrypt");
const ctypto = require("crypto");
const emailService = require("../helpers/send-mail");
const config = require("../config");
const { Op } = require("sequelize");

exports.post_register = async function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user  = await User.findOne({ where: { email: email }});
        if(user) {
            const isSuccess = false
            const message = "Girdiğiniz email adresiyle daha önce kayıt olunmuş."
            
            return res.send({message: message, isSuccess: isSuccess });

        }
        const newUser = await User.create({ name: name, email: email, password: hashedPassword });

        emailService.sendMail({
            from: config.email.from,
            to: newUser.email,
            subject: "Hesabınızı oluşturuldu.",
            text: "Hesabınızı başarılı şekilde oluşturuldu."
        });

        const message = "Hesabınızı başarılı şekilde oluşturuldu."
        const isSuccess = true;
       
        return res.send([{message: message, isSuccess: isSuccess },newUser]);
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_login = async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if(!user) {
            const message = "Email hatalı";
            const isSuccess = false;
            return res.send({message: message, isSuccess: isSuccess});
        }

        // parola kontrolü
        const match = await bcrypt.compare(password, user.password);

        if(match) {
            const isSuccess = true;
            const message = "Giriş Başarılı."
            
            return res.send({isSuccess: isSuccess, message: message});
        } 
        
        const isSuccess = false;
        const message = "Parola hatalı" 
        return res.send({isSuccess: isSuccess, message: message});  
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_reset = async function(req, res) {
    const email = req.body.email;

    try {
        var token = ctypto.randomBytes(32).toString("hex");
        const user = await User.findOne({ where: { email: email }});
        
        if(!user) {
            const message = "Email bulunamadı";
            const isSuccess = false;
            return res.send({message: message, isSuccess: isSuccess});
        }

        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + (1000 * 60 * 60);
        await user.save();

        emailService.sendMail({
            from: config.email.from,
            to: email,
            subject: "Reset Password",
            html: `
                <p>Parolanızı güncellemek için aşağıdaki Id'yi girdi olarak giriniz.</p>
                <p>
                    ${token}
                </p>
            `
        });
        
        const message = "parolanızı sıfırlamak için eposta adresinizi kontrol ediniz.";
        const isSuccess = true;
        return res.send({message: message, isSuccess: isSuccess});
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_newpassword = async function(req, res) {
    const token = req.body.token;
    const newPassword = req.body.password;

    try {
        const user = await User.findOne({
            where: {
                resetToken: token,
                resetTokenExpiration: {
                    [Op.gt]: Date.now()
                }
            }
        });

        if(!user)
        {
            const message = "Token bilginiz doğru değil";
            const isSuccess = false;
            return res.send({message: message, isSuccess: isSuccess});
        }

        user.password = await bcrypt.hash(newPassword, 10);
        user.resetToken = null;
        user.resetTokenExpiration = null;
        
        await user.save();

        const message = "parolanız güncellendi";
        const isSuccess = true;
        return res.send({message: message, isSuccess: isSuccess});
    }
    catch(err) {
        console.log(err);
    }
}