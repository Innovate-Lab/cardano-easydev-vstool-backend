import { ErrorCode } from "./code.js";

export const ErrorMessages: { [key in ErrorCode]: string } = {
  [ErrorCode.NOT_FOUND]: "Not Found",

  // Lucid 20000 - 20999
  [ErrorCode.LUCID_ERROR]: "Error initializing Lucid",
  [ErrorCode.GET_PUB_KEY_HASH_ERROR]: "Error fetching pub key hash",
  [ErrorCode.CONNECT_WALLET_WITH_PRIVATE_KEY_ERROR]: "Error connecting wallet with private key",
  [ErrorCode.CONNECT_WALLET_WITH_SEED_PHRASE_ERROR]: "Error connecting wallet with seed phrase",
  [ErrorCode.GENERATE_PRIVATE_KEY_ERROR]: "Error generating private key",
  [ErrorCode.GENERATE_SEED_PHRASE_ERROR]: "Error generating seed phrase",

  // UTXO 21000 - 21999
  [ErrorCode.FETCH_UTXOS_ERROR]: "Error fetching UTXOs",

  // Blockforst 22000 - 22999
  [ErrorCode.FETCH_TRANSACTIONS_ERROR]: "Error fetching transactions",
  [ErrorCode.GET_DETAIL_TRANSACTION_ERROR]: "Error fetching transaction details",
  [ErrorCode.GET_NFTS_ERROR]: "Error fetching NFTs",
  [ErrorCode.GET_ASSET_DETAIL_ERROR]: "Error fetching asset details",

  // Dapp Template 23000 - 23999
  [ErrorCode.GET_TEMPLATE_ERROR]: "Error fetching template",

  // Validator 24000 - 24999
  [ErrorCode.GET_CONTRACT_ADDRESS_ERROR]: "Error fetching contract address",
  [ErrorCode.EXECUTE_TRANSACTION_ERROR]: "Error executing transaction",
};
