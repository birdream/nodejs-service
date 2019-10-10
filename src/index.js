'use strict';

const Hapi = require('hapi');
const Routes = require('./routes');

const init = async () => {

    const server = Hapi.server({
        port: 80,
        host: '0.0.0.0'
    });

    Routes.forEach(rt => {
        server.route(rt)
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();