import { defineChain } from "viem";

// TODO: Add Chain details here.
export const monadDevnet = defineChain({
  id: 20143,
  name: "Monad Devnet",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: {
      // TODO: Add Monad RPC URL
      http: ["<MONAD_RPC_URL>"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Devnet Blockscout",
      // TODO: Add Explorer URL
      url: "<MONAD_BLOCKSCOUT_URL>",
    },
  },
});
