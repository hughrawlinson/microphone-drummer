const features = require('./features/coaster.wav.json')

const keys = Object.keys(features);

const output = [];

for (var i = 0; i < features[keys[0]].length; i++) {
  output.push(keys.reduce((acc, el) => ({
    ...acc,
    [el]: features[el][i]
  }), {}));
}

console.log(JSON.stringify(output, null, 2));

