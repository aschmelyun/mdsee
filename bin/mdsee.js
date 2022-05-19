#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2));
const fs = require('fs');

// validate that an argument exists for the filepath
// todo: better validation, lol
if (!args['_'][0]) {
    console.error('You must include a filepath as an argument.');
    process.exit(1);
}

// set the default port as 3000
if (!args.hasOwnProperty('port')) {
    args.port = 3000;
}

// watch for changes on the file
fs.watchFile(args['_'][0], { interval: 1000 }, (curr, prev) => {
    require('../lib/index').refresh(args);
});

require('../lib/index').init(args);