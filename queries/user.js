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
    }).then(data => {
        let vaultsByOwner = {}
        let vaultsByCollateral = {}
        data.data.vaults.map(vault => {
            if (!vaultsByCollateral[vault.collateralType])
                vaultsByCollateral[vault.collateralType] = []
            vaultsByCollateral[vault.collateralType].push(vault.id)
        })
        const details = {
            vaults: data.data.vaults,
            vaultsByCollateral
        }
        console.log(details)
    })
