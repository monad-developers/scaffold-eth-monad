import { defineChain } from "viem";

// TODO: Add Chain details here.
export const monadTestnet = defineChain({
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: {
      // TODO: Add Monad RPC URL
      http: ["<MONAD_RPC_URL>"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Testnet Blockscout",
      // TODO: Add Explorer URL
      url: "<MONAD_EXPLORER_URL>",
    },
  },
});
