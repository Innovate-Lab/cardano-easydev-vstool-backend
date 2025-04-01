export enum ErrorCode {
  NOT_FOUND = 404,

  // Lucid 20000 - 20999
  LUCID_ERROR = 20000,
  GET_PUB_KEY_HASH_ERROR = 20001,
  CONNECT_WALLET_WITH_PRIVATE_KEY_ERROR = 20002,
  CONNECT_WALLET_WITH_SEED_PHRASE_ERROR = 20003,
  GENERATE_PRIVATE_KEY_ERROR = 20004,
  GENERATE_SEED_PHRASE_ERROR = 20005,

  // UTXO 21000 - 21999
  FETCH_UTXOS_ERROR = 21000,

  // Blockforst 22000 - 22999
  FETCH_TRANSACTIONS_ERROR = 22000,
  GET_DETAIL_TRANSACTION_ERROR = 22001,
  GET_NFTS_ERROR = 22002,
  GET_ASSET_DETAIL_ERROR = 22003,

  // Dapp Template 23000 - 23999
  GET_TEMPLATE_ERROR = 23000,

  // Validator 24000 - 24999
  GET_CONTRACT_ADDRESS_ERROR = 24000,
  EXECUTE_TRANSACTION_ERROR = 24001,
}
