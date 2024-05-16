const { postQuery } = require('./index');

postQuery(`
    query AllUsers {
        vaults(first:1000) {
            id
            owner
            collateral
            debt
            collateralType
        }
    }`).then(data => {
    let owners = []
    let vaultsByOwner = {}
    let vaultsByCollateral = {}
    data.data.vaults.map(vault => {
        if (!owners.includes(vault.owner))
            owners.push(vault.owner)
        if (!vaultsByOwner[vault.owner])
            vaultsByOwner[vault.owner] = []
        vaultsByOwner[vault.owner].push(vault.id)
        if (!vaultsByCollateral[vault.collateralType])
            vaultsByCollateral[vault.collateralType] = []
        vaultsByCollateral[vault.collateralType].push(vault.id)
    })
    const details = {
        vaults: data.data.vaults,
        owners: owners,
        vaultsByOwner,
        vaultsByCollateral
    }
    console.log(details)
})
