const { postQuery } = require('./index');

// Run with `node queries/user.js`

postQuery(`
    query MyQuery($address: String!) {
        vaults(where: {owner: $address}) {
            id
            collateralType
            collateral
            debt
            genesis
        }
    }`,
    {
        address: "0x1df428833f2c9fb1ef098754e5d710432450d706"
    }).then(data => console.log(JSON.stringify(data, null, 4)))

