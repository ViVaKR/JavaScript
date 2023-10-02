
const yaml = require('js-yaml');
const fs = require('fs');

try
{
    const doc = yaml.load(fs.readFileSync('./sample.yaml', 'utf8'));
    console.log(doc, typeof doc);
    console.log(doc.name, doc.major, typeof doc);
}
catch (e)
{
    console.log(e);
}