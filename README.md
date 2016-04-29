# USCIS
Query your USCIS case status.

## Install

```
npm install -g uscis
```

If you want to use it as node module

```
npm install uscis --save
```

### Usage

#### Command Line

```
uscis EACXXXXXXXXXX
```

#### Node Module 

```javascript
const uscis = require('uscis')

uscis('EACXXXXXXXXXX').then((status) => {
  console.log(status.title)
  console.log(status.details)
})
```
