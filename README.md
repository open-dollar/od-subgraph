<h1>OD Subgraph</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
</p>

> Resources for deploying a Graph protocol subgraph for the Open Dollar protocol

## Usage 📖

Install the necessary dependencies:

```bash
yarn install
```


We have a couple options when deploying our subgraph. We can deploy to the hosted service provided by The Graph,
we can deploy to a local Graph node, or we can deploy to our team's private graph node hosted on Render. Our local Graph node can be used with a local Ganache chain or any other network.

We'll go over setup for all of these options.

### Deploying to the hosted service
1) Generate the subgraph's types and ABIs:

```bash
yarn codegen
```

2) Build the subgraph with the following command:

```bash
yarn build
```

3) Create a new subgraph on the hosted service, [Subgraph Studio](https://thegraph.com/studio/)

4) In your newly created subgraph, you'll find instructions for initializing your subgraph with the Graph CLI and
   authenticating with the hosted service. We don't need to initialize the subgraph since we already have the code available to us,
   but we do need to authenticate. To do so, run the following command:

```bash
graph auth --studio SUBGRAPH_SECRET_HERE
```

5) Finally, deploy the subgraph with the following command. Make sure you rename the subgraph name in package.json to match the name of your subgraph:

```bash
yarn deploy
```

### Deploying to a local Graph node w/Ganaache
1) Generate the subgraph's types and ABIs:

```bash
yarn codegen
```

2) Build the subgraph with the following command:

```bash
yarn build
```

3) Set up the Ganache CLI

```bash
yarn global add truffle ganache-cli
```

4) Start the Ganache CLI. We add -h 0.0.0.0 to make it accessible from within Docker

```bash
ganache-cli -h 0.0.0.0
```

5) Replace the `network` property in `docker-compose.yml` with the following:

```yaml
network: mainnet:http://host.docker.internal:8545
```

6) Replace the `network` property in `subgraph.yaml` for each contract with the following:

```yaml
network: mainnet
```

7) Replace the startBlock property in `subgraph.yaml` for each contract with the latest block value in your running Ganache instance. It should look something like this:

```yaml
startBlock: 8
```

8) Start the Graph node with the following command:

```bash
docker-compose up
```

9) Create the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn create-local
```

10) Deploy the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn deploy-local
```

11) You can now query the subgraph at http://localhost:8000/subgraphs/name/NAME_OF_YOUR_SUBGRAPH/graphql

### Deploying to a local Graph node w/any network

1) Generate the subgraph's types and ABIs:

```bash
yarn codegen
```

2) Build the subgraph with the following command:

```bash
yarn build
```

3) Add your RPC endpoint to a ETHEREUM_RPC_URL variable in your .env file. Then, replace the `network` property in `docker-compose.yml` with the following (we'll use Arbitrum-Sepolia as an example):

```yaml
ethereum: 'arbitrum-sepolia:${ETHEREUM_RPC_URL}'
```

4) Replace the `network` property in `subgraph.yaml` for each contract with the following (if it's not already arbitrum-sepolia):

```yaml
network: arbitrum-sepolia
```

5) Start the Graph node with the following command. Make sure you wait for the Graph node to start logging its sync progress
   before deploying your subgraph:

```bash
docker-compose up
```

6) Create the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn create-local
```

7) Deploy the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn deploy-local
```

8) You can now query the subgraph at http://localhost:8000/subgraphs/name/NAME_OF_YOUR_SUBGRAPH/graphql. It may take a few minutes for the subgraph to sync before you can get results from the query.

### Deploying to our team's private Render Graph node

1) Generate the subgraph's types and ABIs:

```bash
yarn codegen
```

2) Build the subgraph with the following command:

```bash
yarn build
```

3) Add your RPC endpoint to a ETHEREUM_RPC_URL variable in your .env file. Then, replace the `network` property in `docker-compose.yml` with the following (we'll use Arbitrum-Sepolia as an example):

```yaml
ethereum: 'arbitrum-sepolia:${ETHEREUM_RPC_URL}'
```

4) Replace the `network` property in `subgraph.yaml` for each contract with the following (if it's not already arbitrum-sepolia):

```yaml
network: arbitrum-sepolia
```

5) Start the Graph node with the following command. Make sure you wait for the Graph node to start logging its sync progress
   before deploying your subgraph:

```bash
docker-compose up
```

6) Create a .env file and set the .env variables that are listed in the .env.example

7) Create the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn create-render
```

8) Deploy the subgraph with the following command, making sure to replace the name in package.json with the name of your subgraph:

```bash
yarn deploy-render
```

9) You can now query the subgraph at https://${GRAPH_NODE_PLAYGROUND_BASE_URL}/subgraphs/name/NAME_OF_YOUR_SUBGRAPH/graphql. It may take a few minutes for the subgraph to sync before you can get results from the query.

*Important*: note that you cannot access the playground through the NGINX endpoint, you must use the base URL of the graph node service itself

## Render Troubleshooting 

If an error occurs when deploying to render please check the following:

1) Verify that the username and password you're using for basic authentication are correct by checking the current
.env values in the nginx Render deployment 
2) Verify that the logs in each of the services (IPFS, graph node, DB) do not have errors and if they do then run a re-deploy
for that service (and probably the graph node service itself since it depends on IPFS and the DB)
3) Verify that the nginx.conf secret file in the graph node Render project is redirecting requests to the correct upstream servers 

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.