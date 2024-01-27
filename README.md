<p align="center">
<svg width="60" height="60" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.2501 0.559999C30.143 0.558021 23.1949 2.66387 17.2847 6.61115C11.3745 10.5584 6.76772 16.1698 4.04702 22.7355C1.32633 29.3013 0.613915 36.5265 1.99996 43.4971C3.38601 50.4678 6.80826 56.8709 11.8338 61.8964C16.8593 66.9219 23.2623 70.3441 30.2329 71.7301C37.2036 73.1161 44.4288 72.4038 50.9945 69.6831C57.5603 66.9624 63.1717 62.3556 67.119 56.4454C71.0663 50.5352 73.172 43.5871 73.1701 36.48C73.1674 26.9542 69.3822 17.8194 62.6464 11.0837C55.9107 4.34795 46.7758 0.56265 37.2501 0.559999ZM37.2501 63.07C31.9911 63.07 26.8502 61.5106 22.4775 58.5888C18.1048 55.6671 14.6966 51.5143 12.6841 46.6556C10.6716 41.7969 10.145 36.4505 11.171 31.2925C12.197 26.1346 14.7295 21.3967 18.4481 17.678C22.1668 13.9594 26.9047 11.4269 32.0626 10.4009C37.2206 9.37496 42.5669 9.90153 47.4256 11.9141C52.2843 13.9266 56.4371 17.3347 59.3588 21.7074C62.2806 26.0801 63.8401 31.221 63.8401 36.48C63.8414 39.9722 63.1545 43.4305 61.8187 46.6571C60.4829 49.8837 58.5243 52.8155 56.055 55.2849C53.5856 57.7543 50.6538 59.7128 47.4272 61.0486C44.2006 62.3845 40.7423 63.0713 37.2501 63.07Z" fill="#1A74EC"/>
    <path d="M37.2401 57.18C48.6723 57.18 57.9401 47.9123 57.9401 36.48C57.9401 25.0477 48.6723 15.78 37.2401 15.78C25.8078 15.78 16.54 25.0477 16.54 36.48C16.54 47.9123 25.8078 57.18 37.2401 57.18Z" fill="#1A74EC"/>
    <path d="M10.66 36.48C10.6587 39.9722 11.3456 43.4305 12.6814 46.6571C14.0172 49.8837 15.9758 52.8155 18.4451 55.2849C20.9145 57.7543 23.8462 59.7128 27.0729 61.0486C30.2995 62.3844 33.7578 63.0713 37.25 63.07V72.41C32.4818 72.4895 27.7455 71.6191 23.3172 69.8494C18.8889 68.0797 14.8572 65.4462 11.4571 62.1024C8.057 58.7586 5.35656 54.7713 3.51324 50.3732C1.66993 45.975 0.720581 41.2538 0.720581 36.485C0.720581 31.7161 1.66993 26.995 3.51324 22.5969C5.35656 18.1987 8.057 14.2114 11.4571 10.8676C14.8572 7.52378 18.8889 4.89023 23.3172 3.12054C27.7455 1.35085 32.4818 0.480438 37.25 0.559993V9.89001C33.7578 9.8887 30.2995 10.5756 27.0729 11.9114C23.8462 13.2472 20.9145 15.2057 18.4451 17.6751C15.9758 20.1445 14.0172 23.0763 12.6814 26.3029C11.3456 29.5296 10.6587 32.9878 10.66 36.48Z" fill="#6396FF"/>
    <path d="M37.24 15.78V57.18C42.73 57.18 47.9951 54.9991 51.8771 51.1171C55.7591 47.2351 57.94 41.97 57.94 36.48C57.94 30.99 55.7591 25.7249 51.8771 21.8429C47.9951 17.9609 42.73 15.78 37.24 15.78Z" fill="#6396FF"/>
</svg>

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
