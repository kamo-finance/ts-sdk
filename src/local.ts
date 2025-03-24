import { Transaction } from "@mysten/sui/transactions";
import { expFixedPoint64, KamoTransaction, newKamoTransaction, nthRootFixedPoint64 } from "./transaction";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { kamoClient, suiClient } from "./client/client";
import { bcs } from "@mysten/sui/bcs";
import dotenv from "dotenv";
import { binarySearchPtAmount, improvedBinarySearchPtAmount } from "./transaction/utils";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "./const";
import { firstPutUsdc } from "./kamo_generated/kusdc/system/functions";
import { KUSDCTransaction } from "./transaction/wrapper/kusdc";
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
  console.log(val);
}

async function mint() {
  const kamoTx = newKamoTransaction({
    market: "HASUI",
  });
  const tx = await kamoTx.mint({
    sy_amount_in: BigInt(5000),
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
  const expiry = BigInt(Date.now() + 1000 * 60 * 60 * 24 * 365 * 2);
  const scalarRoot = BigInt("321807139714677870000");
  const initialAnchor = BigInt("21916576633974318274");
  const lnFeeRateRoot = BigInt("183551206696995753");
  const kUSDCTransaction = newKamoTransaction({
    market: "KUSDC",
  });
  const tx = await kUSDCTransaction.newState({
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
    amountPT: 2097,
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
    ptAmount: BigInt(1000),
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

async function swapSyForPt() {
  const kamoTx = newKamoTransaction({
    market: "HASUI",
  });
  const tx = await kamoTx.swapSyForPt({
    syAmount: BigInt(714),
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

async function query() {
  const exchangRate = await newKamoTransaction({
    market: "HASUI",
  }).getCurrentExchangeRate();
  console.log(exchangRate);

  const yieldObjects = await kamoClient.getYieldObjects({
    stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!,
    owner: kp.toSuiAddress(),
  });
  console.log(yieldObjects);
}

async function main() {
  // const kamoTx = newKamoTransaction({
  //   market: "HASUI",
  // });
  // const exchangeRate = await kamoTx.getCurrentExchangeRate();
  // const ptAmount = await improvedBinarySearchPtAmount(BigInt(1000), exchangeRate);
  // console.log(ptAmount);
  // const ptAmount2 = await binarySearchPtAmount(kamoTx, BigInt(1000));
  // console.log(ptAmount2);
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  const tx = await (kamoTx as KUSDCTransaction).firstPutUsdc({
    amount: 100,
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

async function swapYoForSy() {
  const kamoTx = newKamoTransaction({
    market: "HASUI",
  });
  console.log(await improvedBinarySearchPtAmount(BigInt(809), await kamoTx.getCurrentExchangeRate()));
  const tx = await kamoTx.swapYoForSy({
    yoAmount: BigInt(1000),
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
  // if (result.effects.status.status === "success") {
    const digest = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer: kp,
    });
    console.log(digest);
  // } else {
  //   console.log(result);
  // }
}

main();

// query();

// currentTimestamp();

// mint();

// addLiquidity();

// removeLiquidity();

// swapPtForSy();

// swapSyForPt();

// swapYoForSy();

// async function loop() {
//   while (1) {
//     await swapPtForSy();

//     await swapSyForPt();
//   }
// }

// loop();

// newState();