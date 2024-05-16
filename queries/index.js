const fetch = require('node-fetch');

const SUBGRAPH_URL = 'https://api.studio.thegraph.com/query/52770/open-dollar---mainnet/v1.8.0-rc.1';

const postQuery = (query, variables) => {
    return fetch(SUBGRAPH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        }),
    })
        .then(r => r.json())
        .then(data => {
            return data;
        })
}

module.exports = {
    postQuery
}
