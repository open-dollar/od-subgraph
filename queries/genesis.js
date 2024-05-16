const { postQuery } = require('./index');

const ADDRESS_1 = "0xaa15eAa5Fac15b47d2B8A695d2F84a44C2b46115"
const ADDRESS_2 = "0x8caa7eBE5C6Ae6087fb65315d1B5aA7AcD33b854"
postQuery(`
    query MyQuery($address: String!) {
        vaults(where: {owner: $address, genesis: true}) {
            id
            genesis
        }
    }`,
    {
        address: ADDRESS_1
    }).then(data => {
        console.log(data.data.vaults.length > 0 ? `${ADDRESS_1} Genesis vault - TRUE` : `${ADDRESS_1} Genesis vault - FALSE`);
    })

postQuery(`
    query MyQuery($address: String!) {
        vaults(where: {owner: $address, genesis: true}) {
            id
            genesis
        }
    }`,
    {
        address: ADDRESS_2
    }).then(data => {
        console.log(data.data.vaults.length > 0 ? `${ADDRESS_2} Genesis vault - TRUE` : `${ADDRESS_2} Genesis vault - FALSE`);
    })

