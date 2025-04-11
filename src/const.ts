export enum SUPPORTED_MARKETS {
  NONE = "NONE",
  HASUI = "HASUI",
  KUSDC = "KUSDC",
}

export const STATE_ADDRESS_MAP = new Map([
  [SUPPORTED_MARKETS.HASUI, "0x521c2b893648e863c3b8b65a139d6bb60ab2e47a8ec1ffeb2071b2e9a6f93ac1"],
  [SUPPORTED_MARKETS.KUSDC, "0x4cf1ece8af0d8c0f8e75ab8b59826ace8ce3ec76b70cf2596a5074368a876ec5"],
])

export const FACTORY = "0x36f6e18bcc3d381505c60f54917f8ad77485089a172a41c2c0db6dd8403f66e7";