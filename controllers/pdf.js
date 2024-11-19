const singleFileUpload = require('../helpers/singleFileUpload.js')
const multipleFileUpload = require('../helpers/multipleFileUpload.js')
const fs = require('fs');
// const express = require("express");


exports.upload_pdf = function (req,res){
    try {
      singleFileUpload(req, res, function(error) {
        if (error) {
          console.log("err",error)
        } else {
            res.json(req.file).status(200)
        }
      })
    } catch (error) {
        console.log("error",error)
    }
  }

exports.upload_multipleFile = function (req,res){
  try {
    multipleFileUpload(req, res, function(error) {
      if (error) {
        console.log("err",error)
      } else {
          res.json(req.file).status(200)
      }
    })
  } catch (error) {
      console.log("error",error)
  }
}

