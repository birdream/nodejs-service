'use strict';

const hello = require('./handlers/hello')

module.exports = [
    {
        method: 'GET',
        path: '/file',
        handler: (req, h) => {
            // console.log(Object.keys(h.request))
            console.log('========')
            return h
                .response('<script>prompt(1)</script>')
                .type('text/html')
                .header('X-Custom', 'my-value')
                .code(201)
        },
        // handler: {
        //     directory: {
        //         path: './index.html',
        //     }
        // }
    },
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