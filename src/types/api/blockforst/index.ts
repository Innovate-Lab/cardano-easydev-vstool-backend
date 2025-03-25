interface Amount {
    unit: string;
    quantity: string;
}

export interface UtxoResponse {
    address: string;
    tx_hash: string;
    tx_index: number;
    output_index: number;
    amount: Amount[];
    block: string;
    data_hash: string | null;
    inline_datum: string | null;
    reference_script_hash: string | null;
}

export interface AssetDetailsResponse {
    asset: string;
    policy_id: string;
    asset_name: string;
    fingerprint: string;
    quantity: string;
    initial_mint_tx_hash: string;
    mint_or_burn_count: number;
    onchain_metadata: object | null;
    onchain_metadata_standard: string | null;
    onchain_metadata_extra: null;
    metadata: null;
}

export interface TransactionResponse {
    tx_hash: string;
    tx_index: number;
    block_height: string;
    block_time: number;
}

export interface TransactionDetailResponse {
    hash: string;
    block: string;
    block_height: number;
    block_time: number;
    slot: number;
    index: number;
    output_amount: Amount[];
    fees: string;
    deposit: string;
    size: number;
    invalid_before: string | null;
    invalid_hereafter: string;
    utxo_count: number;
    withdrawal_count: number;
    mir_cert_count: number;
    delegation_count: number;
    stake_cert_count: number;
    pool_update_count: number;
    pool_retire_count: number;
    asset_mint_or_burn_count: number;
    redeemer_count: number;
    valid_contract: boolean;
}
