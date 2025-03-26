import axios from "axios";
import { AssetDetailsResponse, TransactionDetailResponse, TransactionResponse, UtxoResponse } from "../types/api/blockforst/index.js";
import { config } from "../config/index.js";

class BlockforstService {
    private baseUrl: string;
    private projectId: string;

    constructor() {
        this.baseUrl = config.blockfrost.baseUrl;
        this.projectId = config.blockfrost.projectId;
    }

    async getUtxosByAddress(address: string) {
        if (!address) throw new Error('Address is required');

        try {
            const { data } = await axios.get<UtxoResponse[]>(
                `${this.baseUrl}/addresses/${address}/utxos`,
                {
                    headers: {
                        'Project_id': this.projectId
                    }
                }
            );
            return data;
        } catch (error) {
            console.error('Error fetching UTXOs:', error);
            throw error;
        }
    }

    private async getAssetDetails(unit: string) {
        if (!unit) throw new Error('Unit is required');

        try {
            const { data } = await axios.get<AssetDetailsResponse>(
                `${this.baseUrl}/assets/${unit}`,
                {
                    headers: {
                        'Project_id': this.projectId
                    }
                }
            );
            return data;
        } catch (error) {
            console.error('Error fetching asset details:', error);
            throw error;
        }
    }

    async getNFTs(address: string) {
        try {
            if (!address) throw new Error('Address is required');

            const utxos = await this.getUtxosByAddress(address);

            const nonLovelaceAssets = utxos.flatMap(utxo =>
                utxo.amount.filter(asset => asset.unit !== 'lovelace')
            );

            const nfts = await Promise.all(nonLovelaceAssets.map(async (asset) => {
                const assetDetails = await this.getAssetDetails(asset.unit);
                return {
                    ...asset,
                    assetDetails
                };
            }));

            return nfts;
        } catch (error) {
            console.error('Error fetching NFTs:', error);
            throw error;
        }
    }

    async getTransactions(address: string) {
        if (!address) throw new Error('Address is required');

        try {
            const { data } = await axios.get<TransactionResponse[]>(
                `${this.baseUrl}/addresses/${address}/transactions`,
                {
                    headers: {
                        'Project_id': this.projectId
                    }
                }
            );

            const transactionDetails = await Promise.all(data.map(async (transaction) => {
                return await this.getDetailTransaction(transaction.tx_hash);
            }));

            return transactionDetails;
        } catch (error) {
            console.error('Error fetching transactions:', error);
            throw error;
        }
    }

    async getDetailTransaction(txHash: string) {
        if (!txHash) throw new Error('Transaction hash is required');

        try {
            const { data } = await axios.get<TransactionDetailResponse[]>(
                `${this.baseUrl}/txs/${txHash}`,
                {
                    headers: {
                        'Project_id': this.projectId
                    }
                }
            );
            return data;
        } catch (error) {
            console.error('Error fetching transactions:', error);
            throw error;
        }
    }
}

export const blockforstService = new BlockforstService();