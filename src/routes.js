'use strict';

const hello = require('./handlers/hello')

module.exports = [
    {
        method: 'GET',
        path: '/tt',
        handler: hello
    },
    {
        method: 'GET',
        path: '/xixi/{whatever}',
        handler: hello
    },
    {
        method: 'GET',
        path: '/haha',
        handler: hello
    }
]