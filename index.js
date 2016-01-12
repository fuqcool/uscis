'use strict'

const step = 1
const count = 100

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

let caseStatus = require('./lib/case-status')

let list = []

for (let i = 0; i < count; i++) {
  list.push('EAC' + String(1690032523 - i * step))
}

Promise.all(list.map(caseStatus)).then((a) => {
  a.forEach((obj) => console.log(obj.receiptNum, obj.status))
})

