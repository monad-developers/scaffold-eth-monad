# 🏗 Scaffold-ETH-Monad

<div align="center">
<img src=".github/assets/hero_image.png" />
</div>

<h4 align="center">
  <a href="https://docs.monad.xyz">Documentation</a>
  | <a href="https://github.com/monad-developers/scaffold-eth-monad/issues">Report Issue</a>

</h4>

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

-   ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
-   🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
-   🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
-   🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
-   🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Front Page](.github/assets/front_page.png)

## Requirements

Before you start, install the following tools:

-   [Node (>= v18.18)](https://nodejs.org/en/download/)
-   Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
-   [Git](https://git-scm.com/downloads)

## Quickstart

To get started, follow the steps below:

1. Clone this repo & install dependencies

```sh
git clone https://github.com/monad-developers/scaffold-eth-monad.git
```

2. Open the project directory and install dependencies

```sh
cd scaffold-eth-monad && yarn install
```

2. Setup `.env` file for Hardhat:

Make a copy of `.env.example` in `packages/hardhat` folder, name it `.env` and enter the respective values

```
DEPLOYER_PRIVATE_KEY=
MONAD_RPC_URL=
MONAD_CHAIN_ID=
MONAD_EXPLORER_URL=
```

3. Deploying smart contracts on Monad:

Once the `.env` file is set up,  run the following command in your terminal:.

```sh
yarn deploy
```

This command deploys a test smart contract to the Monad testnet network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. Setup `.env` file for Next.js app (optional):

Make a copy of `.env.example` in `packages/nextjs` folder, name it `.env` and enter the respective values

```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=
```

5. On a second terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can adjust the app configuration in `packages/nextjs/scaffold.config.ts`.

**What's next**:

-   Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
-   Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
-   Edit your deployment scripts in `packages/hardhat/deploy`
-   Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`

## Documentation

Visit our [docs](https://docs.monad.xyz) to learn how to start building with Monad.

o learn more about Scaffold-ETH features, visit their [website](https://scaffoldeth.io).
