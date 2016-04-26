# USCIS
Query your USCIS case status in command line.

## Install

```
npm install -g uscis
```

### Usage

```
uscis EACXXXXXXXXXX
```

```javascript
const case = require('uscis')

case('EACXXXXXXXXXX').then((status) => {
  console.log(status.title)
  console.log(status.details)
})
```
