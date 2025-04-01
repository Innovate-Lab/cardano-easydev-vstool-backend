import { ErrorCode } from "./code.js";

export const ErrorMessages: { [key in ErrorCode]: string } = {
  [ErrorCode.NOT_FOUND]: "Not Found",

  [ErrorCode.LUCID_ERROR]: "Error initializing Lucid",

  [ErrorCode.CONNECT_WALLET_WITH_PRIVATE_KEY_ERROR]: "Error connecting wallet with private key",
  [ErrorCode.CONNECT_WALLET_WITH_SEED_PHRASE_ERROR]: "Error connecting wallet with seed phrase",
  [ErrorCode.GENERATE_PRIVATE_KEY_ERROR]: "Error generating private key",
  [ErrorCode.GENERATE_SEED_PHRASE_ERROR]: "Error generating seed phrase",

  [ErrorCode.FETCH_UTXOS_ERROR]: "Error fetching UTXOs",

  [ErrorCode.FETCH_TRANSACTIONS_ERROR]: "Error fetching transactions",
  [ErrorCode.GET_DETAIL_TRANSACTION_ERROR]: "Error fetching transaction details",
  [ErrorCode.GET_NFTS_ERROR]: "Error fetching NFTs",
  [ErrorCode.GET_ASSET_DETAIL_ERROR]: "Error fetching asset details",
};
