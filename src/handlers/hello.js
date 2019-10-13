'use strict';

module.exports = async function(request, h) {
    const url = request.url;

    return `
    \n
|=============|
|Hello Norman!|in Req: ${url}
|=============|\n
    \n`
}