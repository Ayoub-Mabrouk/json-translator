const fs = require('fs');

let rawdata = fs.readFileSync('json-files/originalLanguage.json');
let data = JSON.parse(rawdata);
let values = nested(data)

function nested(obj){
    let values=[];
    for (let property in obj) { 
            if (typeof obj[property] == "object") {
                values=values.concat(nested(obj[property]));
            }
            else {
                values=values.concat(obj[property])
            }
    }
    return values;
}

var file = fs.createWriteStream('txt-files/dataToCopy.txt');
values.forEach((v) => {
    file.write(v+ '\n');
  });
file.end();