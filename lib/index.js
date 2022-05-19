const fs = require('fs');
const path = require('path');
const open = require('open');
const express = require('express');
const ws = require('ws');
const { marked } = require('marked');
const app = express();

require('log-timestamp');

let sock = null;

const init = (args) => {
    if (args.watch !== false) {
        const wsServer = new ws.Server({ port: 8088 });
        wsServer.on('connection', socket => {
            sock = socket;
        });
    }

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    app.use(express.static('dist'));

    app.get('/', (req, res) => {
        const data = fs.readFileSync(args['_'][0], 'utf8');
        const html = marked.parse(data);
        const filename = path.basename(args['_'][0]);

        res.render('index', {
            html: html,
            filename: filename
        });
    });

    app.listen(args.port, () => {
        console.log(`Listening on port ${args.port}`);

        if (args.browser !== false) {
            open(`http://localhost:${args.port}`);
        }
    });
};

const refresh = (args) => {
    if (args.watch !== false) {
        console.log('File changed, injecting updated source');
    }
    
    if (sock) {
        const data = fs.readFileSync(args['_'][0], 'utf8');
        const html = marked.parse(data);

        sock.send(html);
    }
};

module.exports = {
    init,
    refresh
};
