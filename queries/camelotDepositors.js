

const url = "https://api.thegraph.com/subgraphs/name/camelotlabs/camelot-amm-v3-2"

const postQuery = (query) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
        .then(r => r.json())
}

postQuery(`
    query MyQuery {
        mints(
            first:1000,
            where: {or: [
                {pool: "0x824959a55907d5350e73e151ff48dabc5a37a657"}, 
                {pool: "0xf935263c9950eb2881ff58bd6a76c3d2564a78d5"}, 
            ]}
        ) {
            origin
        }
    }`
).then(data => {
    let allUsers = []
    data.data.mints.map(mint => {
        if (!allUsers.includes(mint.origin)) allUsers.push(mint.origin)
    })
    console.log(allUsers)
})
