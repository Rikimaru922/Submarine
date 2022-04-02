import { devnet } from '../constants/cluster';

export const CLUSTER_API = devnet;
export const CLUSTER = 'devnet';
export const COMMITMENT = 'finalized';
export const NFT_UPDATE_AUTHORITY = 'DuQYWijgfS2wsymACUphE6RexkWiN5HfMQq5YPrcTXTw';
export const NFT_COLLECTION_NAME = 'Zilla Vs Kong';
export const PROGRAM_ID = 'CZbazLbeXcJFLdmhDbc2znDibhR7yXwSfghYEufotqBE';
export const VAULT_PDA = 'Dwifn7pWdizyndKHMEN7nPMNCK9jGQTP1DypDYo4KpPc';
export const REWARD_ATOKEN_ACCOUNT = 'EBFtcL8Gv5czu59tiGi2fjxVaS96r88e4xCr7okX2rex';
export const REWARD_TOKEN = 'GnBw4qZs3maF2d5ziQmGzquQFnGV33NUcEujTQ3CbzP3';
export const POOL_SEED = 'pool';
export const POOL_DATA_SEED = 'pool data';
export const VAULT_SEEDS = 'rewards vault';
export const PARENT_DATA_SEED = 'parent data';
export const METHODS = [
  { days: 5, reward: 1 },
  { days: 15, reward: 2 },
  { days: 30, reward: 3 },
  { days: 30, reward: 10 }
];
export const DAY_TIME = 60;