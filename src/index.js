'use strict';

const Hapi = require('hapi');
const Routes = require('./routes');

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: '127.0.0.1',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    // server.path(__dirname);
    // server.route({ path: '/file', method: 'GET', handler: { file: './index.html' } });

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