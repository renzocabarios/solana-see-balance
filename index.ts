import {
  Cluster,
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import * as bs58 from "bs58";
import * as dotenv from "dotenv";
dotenv.config();

const connection: Connection = new Connection(
  clusterApiUrl((process.env.CLUSTER as Cluster) ?? "devnet")
);

const ACCOUNT_1: Keypair = Keypair.fromSecretKey(
  bs58.decode(process.env.PRIVATE_KEY ?? "")
);

async function main() {
  let balance: number = await connection.getBalance(ACCOUNT_1.publicKey);
  console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
}

main();
