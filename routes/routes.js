const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const invoiceController = require("../controllers/invoice");
const authController = require("../controllers/auth");
const printerController = require("../controllers/printer")

// Users
router.get("/users/get/:id",userController.get_userById);
router.get("/users/get",userController.get_user);

// Invoices
router.get("/invoices/users/get", invoiceController.get_withUser);
router.get("/invoices/path/get/:userid", invoiceController.get_invoicePathByUserId);
router.get("/invoices/path/get", invoiceController.get_invoicePath);
router.use("/invoices/get/invoiceId/:id", invoiceController.get_invoiceById);
router.get("/invoices/get/userId/:userid", invoiceController.get_invoiceByUserId);
router.use("/invoices/get", invoiceController.get_invoices);
router.post("/invoices/post/download", invoiceController.post_download);


// Auth
router.post("/auth/register", authController.post_register);
router.post("/auth/login", authController.post_login);
router.post("/auth/reset", authController.post_reset);
router.post("/auth/newpassword", authController.post_newpassword);


// Printer
router.post("/printer/post", printerController.post_printer);
router.get("/printer/get", printerController.get_printer);
router.post("/printer/updateStatus", printerController.post_updateStatus);



module.exports = router;