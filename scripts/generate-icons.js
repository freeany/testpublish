const icongen = require('icon-gen');
const path = require('path');

const options = {
  report: false,
  ico: {
    name: 'icon',
    sizes: [16, 24, 32, 48, 64, 128, 256]
  },
  icns: {
    name: 'icon',
    sizes: [16, 32, 64, 128, 256, 512, 1024]
  }
};

const inputPath = path.join(__dirname, '..', 'assets', 'icon.svg');
const outputPath = path.join(__dirname, '..', 'assets');

icongen(inputPath, outputPath, options)
  .then((results) => {
    console.log('Icons generated successfully!');
    console.log('Generated files:', results);
  })
  .catch((err) => {
    console.error('Error generating icons:', err);
  });