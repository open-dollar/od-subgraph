<p align="center">
<img width="60" height="60"  src="https://raw.githubusercontent.com/open-dollar/od-app/dev/public/od-logo.svg">
</p>
<h1 align="center">
  OD Subgraph
</h1>

Graph Protocol subgraph for the Open Dollar protocol

# Usage

Install the necessary dependencies:

```bash
yarn install
```

We have a couple options when deploying our subgraph

- Hosted service (Subgraph Studio)
- Local Graph node (used with Anvil)
- Our team's private graph node

## Initial Setup

Run these commands prior to deployment

1. Generate the subgraph's types:

```bash
yarn codegen
```

2. Build the subgraph with the following command:

```bash
yarn build
```

## Deploy to Subgraph Studio

1. Create a new subgraph on the hosted service, [Subgraph Studio](https://thegraph.com/studio/)

2. In your newly created subgraph, you'll find instructions for initializing your subgraph with the Graph CLI and
   authenticating with the hosted service. We don't need to initialize the subgraph since we already have the code available to us,
   but we do need to authenticate. To do so, run the following command:

```bash
graph auth --studio SUBGRAPH_SECRET_HERE
```

3. Finally, deploy the subgraph with the following command. Make sure you rename the subgraph name in package.json to match the name of your subgraph:

```bash
yarn deploy
```

## Local Graph node w/ Anvil

1. Get Anvil running using the instructions in our contracts repo:

[opendollar/contracts](https://github.com/open-dollar/od-contracts?tab=readme-ov-file#anvil)

2. Update your `.env` with the following:

```yaml
ETHEREUM_RPC_URL=http://host.docker.internal:8545
```

3. Change the `startBlock` to "0" for all contracts in `subgraph.yaml`. It should look something like this:

```yaml
startBlock: 0
```

4. Start the Graph node with the following command:

```bash
docker-compose up
```

5. Create the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn create-local
```

6. Deploy the subgraph with the following command. You may wish to change the subgraph name in `package.json` with another name:

```bash
yarn deploy-local
```

7. You can now query the subgraph at:

https://localhost:8000/subgraphs/name/open-dollar---testnet/graphql

## Local Graph node w/ any network

1. Add your RPC endpoint to a ETHEREUM_RPC_URL variable in your .env file. Then, replace the `network` property in `docker-compose.yml` with the following (we'll use Arbitrum-Sepolia as an example):

```yaml
ethereum: "arbitrum-sepolia:${ETHEREUM_RPC_URL}"
```

2. Replace the `network` property in `subgraph.yaml` for each contract with the following (if it's not already arbitrum-sepolia):

```yaml
network: arbitrum-sepolia
```

3. Start the Graph node with the following command. Make sure you wait for the Graph node to start logging its sync progress
   before deploying your subgraph:

```bash
docker-compose up
```

4. Create the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn create-local
```

5. Deploy the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn deploy-local
```

6. You can now query the subgraph at http://localhost:8000/subgraphs/name/NAME_OF_YOUR_SUBGRAPH/graphql. It may take a few minutes for the subgraph to sync before you can get results from the query.

## Team's private Render Graph node

1. Add your RPC endpoint to a ETHEREUM_RPC_URL variable in your .env file. Then, replace the `network` property in `docker-compose.yml` with the following (we'll use Arbitrum-Sepolia as an example):

```yaml
ethereum: "arbitrum-sepolia:${ETHEREUM_RPC_URL}"
```

2. Replace the `network` property in `subgraph.yaml` for each contract with the following (if it's not already arbitrum-sepolia):

```yaml
network: arbitrum-sepolia
```

3. Start the Graph node with the following command. Make sure you wait for the Graph node to start logging its sync progress
   before deploying your subgraph:

```bash
docker-compose up
```

4. Create a .env file and set the .env variables that are listed in the .env.example (to find the current .env variables visit the Environment Variables section of the NGINX Render service)

5. Create the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn create-render
```

6. Deploy the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn deploy-render
```

# Private Render Subgraphs

Below you'll find documentation related to our private instace of the subhgraph.

### Querying

After deploying your subgraph to Render, you can now query the subgraph at

```
https://${GRAPH_NODE_PLAYGROUND_BASE_URL}/subgraphs/name/NAME_OF_YOUR_SUBGRAPH/graphql.
```

It may take a few minutes for the subgraph to sync before you can get results from the query.

> _Important_: note that you cannot access the playground through the NGINX endpoint, you must use the base URL of the graph node service itself

To use the subgraph in the SDK use the URL:

```
https://${GRAPH_NODE_PLAYGROUND_BASE_URL}/subgraphs/name/NAME_OF_YOUR_SUBGRAPH
```

Make sure to rebuild the SDK and point your
app to use your local build of the SDK before attempting to test your Render-deployed subgraph

#### Database Inspection

If you want to verify in the Render Postgres database that your subgraph exists, follow these steps:

1. Visit the Postgres service in Render and click on Shell in the sidebar
2. To query the shell we need to enter as a user first. Enter the following in the shell, replacing POSTGRES_USER with the POSTGRES_USER variable in the Render .env:

```bash
psql -U POSTGRES_USER
```

3. To see what databases are available in our Postgres database we can use this query:

```bash
\l
```

4. To enter the database with our subgraphs you can use the following query, replacing POSTGRES_DB with the POSTGRES_DB variable in the Render .env:

```bash
\c POSTGRES_DB
```

5. You can see all the available tables in POSTGRES_DB with the following command:

```bash
\dt
```

6. Finally, to see the names of the subgraphs deployed to Render we can use the following query (note that capitalization matters):

```bash
SELECT * FROM subgraphs.subgraph;
```

7. If no data is returned from the above query it's because there are no deployed subgraphs in our Render deployment.
   To be absolutely sure there are no deployed subgraphs we can use the following query:

```bash
SELECT COUNT(*) FROM subgraphs.subgraph;
```

If there are no deployed subgraphs then the count should be 0

## Render Troubleshooting

If an error occurs when deploying to render please check the following:

1. Verify that the username and password you're using for basic authentication are correct by checking the current
   .env values in the nginx Render deployment
2. Verify that the logs in each of the services (IPFS, graph node, DB) do not have errors and if they do then run a re-deploy
   for that service (and probably the graph node service itself since it depends on IPFS and the DB)
3. Verify that the nginx.conf secret file in the graph node Render project is redirecting requests to the correct upstream servers

## License

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.
