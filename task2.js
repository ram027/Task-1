const tast2Obj = require('./task2.json');
const iCanPrintJson = (obj) => {
      for (const element in obj) {
    if (typeof obj[element] === 'object'){ 
      iCanPrintJson(obj[element]);
    } else {
      console.log(`key: ${element} : ${obj[element]}`);
    }
  }
};
iCanPrintJson(tast2Obj);

