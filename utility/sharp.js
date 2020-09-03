const sharp = require('sharp');
const fs = require('fs');
const directory = '../img';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .toFile(`${directory}/${file}-small.jpg`, (err,info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    });
  } 
  );