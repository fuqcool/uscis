'use strict'

const request = require('request')
const jsdom = require('jsdom')

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

module.exports = (receiptNum) => {
  return new Promise((resolve, reject) => {
    request.post({
      url: 'https://egov.uscis.gov/casestatus/mycasestatus.do',
      form: {
        appReceiptNum: receiptNum,
        caseStatusSearchBtn: 'CHECK STATUS'
      },
      timeout: 45000
    }, (err, res, body) => {
      if (err)
        return resolve(`!!${err.message}!!`)

      jsdom.env(body, (err, window) => {
        let dom = window.document.querySelector('.appointment-sec .rows h1')
        const title = dom.textContent

        dom = window.document.querySelector('.appointment-sec .rows p')
        const details = dom.textContent

        resolve({title, details})
      })
    })
  })
}
