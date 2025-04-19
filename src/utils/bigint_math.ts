export class BigIntMath {

    static max(...values: bigint[]) {
        if (values.length === 0) {
            return null;
        }

        if (values.length === 1) {
            return values[0];
        }

        let max = values[0];
        for (let i = 1; i < values.length; i++) {
            if (values[i] > max) {
                max = values[i];
            }
        }
        return max;
    }

    static min(...values: bigint[]) {
        if (values.length === 0) {
            return null;
        }

        if (values.length === 1) {
            return values[0];
        }

        let min = values[0];
        for (let i = 1; i < values.length; i++) {
            if (values[i] < min) {
                min = values[i];
            }
        }
        return min;
    }

    static sign(value: bigint) {
        if (value > BigInt(0)) {
            return BigInt(1);
        }
        if (value < BigInt(0)) {
            return BigInt(-1);
        }
        return BigInt(0);
    }

    static abs(value: bigint) {
        if (this.sign(value) === BigInt(-1)) {
            return -value;
        }
        return value;
    }

    // https://stackoverflow.com/questions/53683995/javascript-big-integer-square-root/58863398#58863398
    static rootNth(value: bigint, k = BigInt(2)) {
        if (value < BigInt(0)) {
            throw 'negative number is not supported'
        }

        let o = BigInt(0);
        let x = value;
        let limit = 100;

        while (x ** k !== k && x !== o && --limit) {
            o = x;
            x = ((k - BigInt(1)) * x + value / x ** (k - BigInt(1))) / k;
        }

        return x;
    }

    static sqrt(value: bigint) {
        return BigIntMath.rootNth(value);
    }

}
