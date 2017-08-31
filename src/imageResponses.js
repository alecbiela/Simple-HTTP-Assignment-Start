const fs = require('fs');

const sponge = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSponge = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(sponge);
  res.end();
};

module.exports.getSponge = getSponge;
