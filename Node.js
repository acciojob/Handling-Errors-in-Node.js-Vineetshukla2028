const fs = require('fs');


fs.readFile(./index.js, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);   

  } else {
    console.log(data);
  }
});
