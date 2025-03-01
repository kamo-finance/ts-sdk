export class Market {
    coinTypePT: string;
    coinTypeSY: string;
    address: string;

    constructor(coinTypePT: string, coinTypeSY: string, address: string) {
        this.coinTypePT = coinTypePT;
        this.coinTypeSY = coinTypeSY;
        this.address = address;
    }
}