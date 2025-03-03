import { Transaction } from "@mysten/sui/transactions";
import { KamoTransaction, newKamoTransaction } from "./transaction";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { suiClient } from "./client/client";
import { bcs } from "@mysten/sui/bcs";
import dotenv from "dotenv";
dotenv.config();

const pk = process.env.SUI_PRIVATE_KEY ?? "";
const kp = Ed25519Keypair.fromSecretKey(pk);

async function currentTimestamp() {
  const tx = new Transaction();
  tx.moveCall({
    target: "0x2::clock::timestamp_ms",
    arguments: [
      tx.object.clock(),
    ]
  });
  const result = await suiClient.devInspectTransactionBlock({
    transactionBlock: tx,
    sender: kp.toSuiAddress(),
  });
  const returnValues = result.results?.[0].returnValues?.[0]?.[0];
  const val = bcs.u64().parse(Uint8Array.from(returnValues ?? []));
}

async function mint() {
  const kamoTx = newKamoTransaction({
    market: "HASUI",
  });
  const tx = await kamoTx.mint({
    sy_amount_in: BigInt(2000),
    sender: kp.toSuiAddress(),
  });
  tx.setSender(kp.toSuiAddress());
  tx.setGasBudget(100000000);
  const builtTx = await tx.build({
    client: suiClient,
  });
  const result = await suiClient.dryRunTransactionBlock({
    transactionBlock: builtTx,
  });
  if (result.effects.status.status === "success") {
    const digest = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer: kp,
    });
    console.log(digest);
  } else {
    console.log(result);
  }
}

async function newState() {
  const expiry = BigInt(Date.now() + 1000 * 60 * 60 * 24);
  const scalarRoot = BigInt("160903569857338934925");
  const initialAnchor = BigInt("21916576633974318274");
  const lnFeeRateRoot = BigInt("183551206696995753");
  const tx = await KamoTransaction.NewState({
    expiry,
    scalarRoot,
    initialAnchor,
    lnFeeRateRoot,
    owner: kp.toSuiAddress(),
  });
  tx.setSender(kp.toSuiAddress());
  tx.setGasBudget(100000000);
  const builtTx = await tx.build({
    client: suiClient,
  });
  const result = await suiClient.dryRunTransactionBlock({
    transactionBlock: builtTx,
  });
  if (result.effects.status.status === "success") {
    const digest = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer: kp,
    });
    console.log(digest);
  } else {
    console.log(result);
  }
}

async function addLiquidity() {
  const kamoTx = newKamoTransaction({
    market: "HASUI",
  });
  const tx = await kamoTx.addLiquidity({
    amountPT: 2000,
    amountSY: 2000,
    sender: kp.toSuiAddress(),
  });
  tx.setSender(kp.toSuiAddress());
  tx.setGasBudget(100000000);
  const builtTx = await tx.build({
    client: suiClient,
  });
  const result = await suiClient.dryRunTransactionBlock({
    transactionBlock: builtTx,
  });
  if (result.effects.status.status === "success") {
    const digest = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer: kp,
    });
    console.log(digest);
  } else {
    console.log(result);
  }
}

async function removeLiquidity() {
  const kamoTx = newKamoTransaction({
    market: "HASUI",
  });
  const tx = await kamoTx.removeLiquidity({
    amountLP: 1000,
    sender: kp.toSuiAddress(),
  });
  tx.setSender(kp.toSuiAddress());
  tx.setGasBudget(100000000);
  const builtTx = await tx.build({
    client: suiClient,
  });
  const result = await suiClient.dryRunTransactionBlock({
    transactionBlock: builtTx,
  });
  if (result.effects.status.status === "success") {
    const digest = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer: kp,
    });
    console.log(digest);
  } else {
    console.log(result);
  }
}

async function swapPtForSy() {
  const kamoTx = newKamoTransaction({
    market: "HASUI",
  });
  const tx = await kamoTx.swapPtForSy({
    ptAmount: BigInt(300),
    sender: kp.toSuiAddress(),
  });
  tx.setSender(kp.toSuiAddress());
  tx.setGasBudget(100000000);
  const builtTx = await tx.build({
    client: suiClient,
  });
  const result = await suiClient.dryRunTransactionBlock({
    transactionBlock: builtTx,
  });
  if (result.effects.status.status === "success") {
    const digest = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer: kp,
    });
    console.log(digest);
  } else {
    console.log(result);
  }
}

swapPtForSy();

// async function burn() {
//   const kamoTx = newKamoTransaction({
//     market: "HASUI",
//   });
//   const tx = await kamoTx.burn({
//     ptAmountBurned: BigInt(1000),
//     sender: kp.toSuiAddress(),
//   });
//   tx.setSender(kp.toSuiAddress());
//   tx.setGasBudget(100000000);
//   const builtTx = await tx.build({
//     client: suiClient,
//   });
//   const result = await suiClient.dryRunTransactionBlock({
//     transactionBlock: builtTx,
//   });
//   if (result.effects.status.status === "success") {
//     const digest = await suiClient.signAndExecuteTransaction({
//       transaction: tx,
//       signer: kp,
//     });
//     console.log(digest);
//   } else {
//     console.log(result);
//   }
// }

// burn();