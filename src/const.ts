export enum SUPPORTED_MARKETS {
  NONE = "NONE",
  HASUI = "HASUI",
  KUSDC = "KUSDC",
}

export const STATE_ADDRESS_MAP = new Map([
  [SUPPORTED_MARKETS.HASUI, "0x521c2b893648e863c3b8b65a139d6bb60ab2e47a8ec1ffeb2071b2e9a6f93ac1"],
  [SUPPORTED_MARKETS.KUSDC, "0xcf2e6cd6451d645cc38128bb374fd9a1354c1d45831aa9dd3471c9f74c4dad0b"],
])

export const FACTORY = "0x3197ce7df823913907141378cda89a51ff89ab265887483993d990ad0d21c916";