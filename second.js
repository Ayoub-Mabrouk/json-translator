const fs = require('fs');

let rawdata = fs.readFileSync('json-files/originalLanguage.json');
let data = JSON.parse(rawdata);
let  translatedArray = fs.readFileSync('txt-files/dataToPast.txt','utf8').replace(/\r\n/g,'\n').split("\n")

let done=nested(data,translatedArray);
fs.writeFileSync('json-files/tanslatedLanguage.json', JSON.stringify(done, null, 4));

function nested(obj,translatedArray){
    let newObj={};
    for (let property in obj) {
            if (typeof obj[property] == "object") {
                newObj[property]=nested(obj[property],translatedArray);
            }
            else {
                newObj[property]=translatedArray.shift();
            }
    }
    return newObj;
}