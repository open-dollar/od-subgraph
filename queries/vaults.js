const { postQuery } = require('./index');

// Run with `node queries/vaults.js`

// This query fetches the first 10 vaults from the subgraph
postQuery(`
    query MyQuery {
        vaults(first: 10) {
            id
            owner
            collateralType
            collateral
            debt
            saviour
            genesis
        }
    }`).then(data => console.log(JSON.stringify(data, null, 4)))

