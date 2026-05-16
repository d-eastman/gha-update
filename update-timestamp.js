const fs = require('fs');
const path = require('path');

const timestamp = new Date().toISOString();
const filePath = path.join(__dirname, 'timestamp.txt');

fs.writeFileSync(filePath, timestamp + '\n', 'utf8');
console.log(`Written: ${timestamp}`);
