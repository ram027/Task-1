const tast2Obj = JSON.stringify(require('./task2.json'));
const iCanPrintJson = (obj) => {
    obj = JSON.parse(obj);
    const { glossary } = obj;
    const { title, GlossDiv } = glossary;
    console.log(`Glossary title is ${title}`);
    const { title:glossDivTitle, GlossList } = GlossDiv;
    console.log(`GlossDiv title is ${glossDivTitle}`);
    const { GlossEntry } = GlossList;
    for (let el in GlossEntry) {
        console.log(`GlossEntry ${el} is ${GlossEntry[el]}`);
    }
   
};
iCanPrintJson(tast2Obj);
