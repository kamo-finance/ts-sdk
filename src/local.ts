import { coinWithBalance, Transaction } from "@mysten/sui/transactions";
import { expFixedPoint64, KamoTransaction, newKamoTransaction, nthRootFixedPoint64 } from "./transaction";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { KamoClient, suiClient } from "./client/client";
import { bcs } from "@mysten/sui/bcs";
import dotenv from "dotenv";
import { binarySearchPtAmount, FixedPoint64, improvedBinarySearchPtAmount } from "./utils";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "./const";
import { firstPutUsdc } from "./kamo_generated/kusdc/system/functions";
import { KUSDCTransaction } from "./transaction/wrapper/kusdc"; 
import { value } from './kamo_generated/sui/nitro-attestation/functions';
import { YieldMarket } from "./market";
import { SuiGraphQLClient } from "@mysten/sui/graphql";
import { graphql } from '@mysten/sui/graphql/schemas/latest';
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

async function faucet() {
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  const tx = (kamoTx as KUSDCTransaction).faucet_kusdc({
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
  }
}

async function mint() {
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  // const {
  //   tx, coin
  // } = (kamoTx as KUSDCTransaction).mint_kusdc({
  //   amount: 1000000,
  //   sender: kp.toSuiAddress(),
  // });
  // tx.transferObjects([coin], kp.toSuiAddress());
  const tx = await kamoTx.mint({
    sender: kp.toSuiAddress(),
    sy_amount_in: BigInt(50 * 10 ** 6),
    // tx,
    // coin,
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

async function addLiquidity() {
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  const market = await YieldMarket.GetFromState({
    stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  });
  // const {
  //   syNeeded,
  //   lpToAccount
  // } = market.addLiquidityExactPt({
  //   ptAmount: BigInt(2000),
  // });
  // console.log(syNeeded, lpToAccount);
  // const tx = await kamoTx.addLiquidity({
//   amountPT: Number(2000),
  //   amountSY: Number(syNeeded),
  //   sender: kp.toSuiAddress(),
  // });

  const {
    ptNeeded,
    lpToAccount: lpToAccount,
  } = market.addLiquidityExactSy({
    syAmount: BigInt(1000),
  });
  console.log(ptNeeded, lpToAccount);
  const tx = await kamoTx.addLiquidity({
    amountPT: Number(ptNeeded),
    amountSY: Number(1000),
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
    market: "KUSDC",
  });
  const exchangeRate = await kamoTx.getSyExchangeRate();
  const market = await YieldMarket.GetFromState({
    stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  });
  const {
    netSyToAccount,
    netSyFee
  } = market.swapExactPtForSy({
    ptAmount: BigInt(100),
    exchangeRate,
    now: Date.now(),
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
  const exchangeRate = await kamoTx.getSyExchangeRate();
  const market = await YieldMarket.GetFromState({
    stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  });
  const a = await market.swapExactSyForPt({
    syAmount: BigInt(100),
    exchangeRate,
    now: Date.now(),
  });
  console.log(a);
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
    // const digest = result;
    console.log(digest.events?.[0]?.parsedJson);
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
  // const kamoClient = new KamoClient({
  //   client: suiClient,
  // });

  // const yieldObjects = await kamoClient.getYieldObjects({
  //   stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  //   owner: kp.toSuiAddress(),
  // });

  // const balances = await kamoClient.getBalances({
  //   stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  //   owner: kp.toSuiAddress(),
  // });

  // console.log(exchangRate, balances);
  const gqlClient = new SuiGraphQLClient({
    url: 'https://sui-testnet.mystenlabs.com/graphql',
  });
  const stateQuery = graphql(`
    query Object($type: SuiAddress!) {
      objects(
        filter: {
          type: $type
        }
      ) {
        nodes {
          address
        }
      }
    }
  `);

  const result = await gqlClient.query({  
    query: stateQuery,
    variables: {
      type: "0xf92b375b7c9fbfd6f01ba80e9904addc495976b1d774f6f72146423e8376bea8::wrapper::State",
    },
  });
  console.log(result.data?.objects.nodes[0].address);
}

async function main() {
  const tx = new Transaction();
  const coin = coinWithBalance({
    balance: BigInt(1),
  });
  const coin2 = coinWithBalance({
    balance: BigInt(1),
  });
  tx.mergeCoins(coin, [coin2]);
  tx.transferObjects([coin], kp.toSuiAddress());
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
  const market = await YieldMarket.GetFromState({
    stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  });
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  const syExchangeRate = await kamoTx.getSyExchangeRate();
  console.log(market.swapExactYoForSy({
    yoAmount: BigInt(558.90 * 10 ** 6),
    syExchangeRate,
    now: Date.now(),
  }));

  const tx = await kamoTx.swapYoForSy({
    yoAmount: BigInt(558.90 * 10 ** 6),
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
  //   const digest = await suiClient.signAndExecuteTransaction({
  //     transaction: tx,
  //     signer: kp,
  //   });
  //   console.log(digest);
  // } else {
    console.log(result);
  // }
}

async function swapSyForYo() {
  const kamoTx = newKamoTransaction({
    market: "KUSDC",
  });
  const market = await YieldMarket.GetFromState({
    stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!,
  });
  const syExchangeRate = await kamoTx.getSyExchangeRate();
  console.log(await market.swapExactSyForYo({
    syAmount: BigInt(14),
    syExchangeRate,
    now: Date.now(),
  }));

  const tx = await (kamoTx as KUSDCTransaction).swapSyForYo({
    syAmount: BigInt(14),
    sender: kp.toSuiAddress(),
  });
  tx.setSender(kp.toSuiAddress());
  tx.setGasBudget(100000000);
  const builtTx = await tx.build({
    client: suiClient,
  });
  await new Promise(resolve => setTimeout(resolve, 5000));
  const result = await suiClient.dryRunTransactionBlock({
    transactionBlock: builtTx,
  });
  console.log(result);
  const digest = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer: kp,
  });
  console.log(digest);
} 

// main();

// query();

// currentTimestamp();

// mint();

// addLiquidity();

// removeLiquidity();

// swapPtForSy();

// faucet();

// swapSyForPt();

swapYoForSy();

// swapSyForYo();

// async function loop() {
//   while (1) {
//     await swapPtForSy();

//     await swapSyForPt();
//   }
// }

// loop();

// newState();

// first_put_usdc();