# Kama Finance Typescript SDK

## Installation

```
pnpm i @kamo-finance/ts-sdk
```

## Usage

```typescript
import dotenv from "dotenv";
import { suiClient } from "@kamo-finance/ts-sdk/client";
import { newKamoTransaction } from "@kamo-finance/ts-sdk/transaction";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

dotenv.config();

async function mint() {
  const pk = process.env.SUI_PRIVATE_KEY ?? "";
  const kp = Ed25519Keypair.fromSecretKey(pk);
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

mint();
```

More examples on [this](https://github.com/kamo-finance/ts-sdk/blob/main/src/local.ts)

## Contributing