'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/tt',
        handler: (request, h) => {
            return 'Hello World!';
        }
    }
]