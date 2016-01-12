'use strict'

let request = require('request')
let jsdom = require('jsdom')

module.exports = (receiptNum) => {
  return new Promise((resolve, reject) => {
    request.post({
      url: 'https://egov.uscis.gov/casestatus/mycasestatus.do',
      form: {
        appReceiptNum: receiptNum,
        caseStatusSearchBtn: 'CHECK STATUS'
      }
    }, function (err, res, body) {
      if (err) {
        reject(err)
      } else {
        jsdom.env(body, (err, window) => {
          let dom = window.document.querySelector('.appointment-sec .rows h1')
          resolve({status: dom.textContent, receiptNum})
        })
      }
    })
  })
}

