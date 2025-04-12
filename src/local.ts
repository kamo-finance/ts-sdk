import { Transaction } from "@mysten/sui/transactions";
import { expFixedPoint64, KamoTransaction, newKamoTransaction, nthRootFixedPoint64 } from "./transaction";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { kamoClient, suiClient } from "./client/client";
import { bcs } from "@mysten/sui/bcs";
import dotenv from "dotenv";
import { binarySearchPtAmount, FixedPoint64, improvedBinarySearchPtAmount } from "./utils";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "./const";
import { firstPutUsdc } from "./kamo_generated/kusdc/system/functions";
import { KUSDCTransaction } from "./transaction/wrapper/kusdc"; 
import { value } from './kamo_generated/sui/nitro-attestation/functions';
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
    market: "KUSDC",
  });
  const {
    tx, coin
  } = (kamoTx as KUSDCTransaction).mint_kusdc({
    amount: 1000000,
    sender: kp.toSuiAddress(),
  });
  // await kamoTx.mint({
  //   sy_amount_in: BigInt(5000),
  //   sender: kp.toSuiAddress(),
  //   tx,
  //   coin,
  // });
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

async function first_put_usdc() {
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  const tx = await (kamoTx as KUSDCTransaction).firstPutUsdc({
    amount: 1000,
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

// async function addLiquidity() {
//   const kamoTx = newKamoTransaction({
//     market: "KUSDC",
//   });
//   const tx = await kamoTx.addLiquidity({
//     amountPT: 2097,
//     amountSY: 2000,
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
    market: "KUSDC",
  });
  const tx = await kamoTx.swapPtForSy({
    ptAmount: BigInt(100),
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
      options: {
        showEvents: true,
      }
    });
    console.log(digest);
    const events = digest.events?.[0]?.parsedJson as any;
    const ln_implied_rate_after_action = events.ln_implied_rate_after_action.value;
    const fixed_point64_ln_implied_rate_after_action = new FixedPoint64(BigInt(ln_implied_rate_after_action));
    console.log(ln_implied_rate_after_action);
    console.log(fixed_point64_ln_implied_rate_after_action.value);
    const fixed_point64_implied_rate_after_action = FixedPoint64.Exp(fixed_point64_ln_implied_rate_after_action);
    console.log(fixed_point64_implied_rate_after_action.decimalValue().toString());
  } else {
    console.log(result);
  }
}

async function swapSyForPt() {
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  const tx = await kamoTx.swapSyForPt({
    syAmount: BigInt(100),
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
      options: {
        showEvents: true,
      }
    });
    console.log(digest);
    const events = digest.events?.[0]?.parsedJson as any;
    const ln_implied_rate_after_action = events.ln_implied_rate_after_action.value;
    const fixed_point64_ln_implied_rate_after_action = new FixedPoint64(BigInt(ln_implied_rate_after_action));
    console.log(ln_implied_rate_after_action);
    console.log(fixed_point64_ln_implied_rate_after_action.value);
    const fixed_point64_implied_rate_after_action = FixedPoint64.Exp(fixed_point64_ln_implied_rate_after_action);
    console.log(fixed_point64_implied_rate_after_action.decimalValue().toString());
  } else {
    console.log(result);
  }
}

async function query() {
  // const exchangRate = await newKamoTransaction({
  //   market: "KUSDC",
  // }).getSyExchangeRate();
  // console.log(exchangRate);

  // const ptAmount = await kamoClient.getMintAmount({
  //   stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  //   syAmount: BigInt(1000),
  // });
  // console.log(ptAmount.toBigNumber().toString());

  // const yieldObjects = await kamoClient.getYieldObjects({
  //   stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  //   owner: kp.toSuiAddress(),
  // });
  // console.log(exchangRate);
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
  console.log(await improvedBinarySearchPtAmount(BigInt(809), await kamoTx.getSyExchangeRate()));
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

// main();

query();

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

// first_put_usdc();