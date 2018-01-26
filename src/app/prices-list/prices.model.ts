export class IPrices {

    public id: string;
    public name: string;
    public symbol: string;
    public rank: number;
    public price_usd: string;
    public price_btc: string;
    public market_cap_usd: string;
    public available_supply: string;
    public total_supply: string;
    public max_supply: string;
    public percent_change_1h: string;
    public percent_change_24h: string;
    public percent_change_7d: string;
    public last_updated: string;
    public price_aud: string;
    public market_cap_aud: string;

    constructor(
        id: string,
        name: string,
        symbol: string,
        rank: number,
        price_usd: string,
        price_btc: string,
        market_cap_usd: string,
        available_supply: string,
        total_supply: string,
        max_supply: string,
        percent_change_1h: string,
        percent_change_24h: string,
        percent_change_7d: string,
        last_updated: string,
        price_aud: string,
        market_cap_aud: string,
    ) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.rank = rank;
        this.price_usd = price_usd;
        this.price_btc = price_btc;
        this.market_cap_usd = market_cap_usd;
        this.available_supply = available_supply;
        this.total_supply = total_supply;
        this.max_supply = max_supply;
        this.percent_change_1h = percent_change_1h;
        this.percent_change_24h = percent_change_24h;
        this.percent_change_7d = percent_change_7d;
        this.last_updated = last_updated;
        this.price_aud = price_aud;
        this.market_cap_aud = market_cap_aud;
    }
}

// export interface IPrices {
//     id: string;
//     name: string;
//     symbol: string;
//     rank: number;
//     price_usd: string;
//     price_btc: string;
//     market_cap_usd: string;
//     available_supply: string;
//     total_supply: string;
//     max_supply: string;
//     percent_change_1h: string;
//     percent_change_24h: string;
//     percent_change_7d: string;
//     last_updated: string;
//     price_aud: string;
//     market_cap_aud: string;
// }
