export interface CoinListItem {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | number; // Assuming roi can be a number or null
  last_updated: string;
}

export interface GlobalMarketData {
  data: {
    active_cryptocurrencies: number;
    upcoming_icos: number;
    ongoing_icos: number;
    ended_icos: number;
    markets: number;
    total_market_cap: {
      btc: number;
      eth: number;
      ltc: number;
      bch: number;
      bnb: number;
      eos: number;
      xrp: number;
      xlm: number;
      link: number;
      dot: number;
      yfi: number;
      usd: number;
      aed: number;
      ars: number;
      aud: number;
      bdt: number;
      bhd: number;
      bmd: number;
      brl: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      eur: number;
      gbp: number;
      gel: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      lkr: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      vef: number;
      vnd: number;
      zar: number;
      xdr: number;
      xag: number;
      xau: number;
      bits: number;
      sats: number;
    };
    total_volume: {
      btc: number;
      eth: number;
      ltc: number;
      bch: number;
      bnb: number;
      eos: number;
      xrp: number;
      xlm: number;
      link: number;
      dot: number;
      yfi: number;
      usd: number;
      aed: number;
      ars: number;
      aud: number;
      bdt: number;
      bhd: number;
      bmd: number;
      brl: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      eur: number;
      gbp: number;
      gel: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      lkr: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      vef: number;
      vnd: number;
      zar: number;
      xdr: number;
      xag: number;
      xau: number;
      bits: number;
      sats: number;
    };
    market_cap_percentage: {
      btc: number;
      eth: number;
      usdt: number;
      bnb: number;
      sol: number;
      usdc: number;
      xrp: number;
      steth: number;
      doge: number;
      ada: number;
    };
    market_cap_change_percentage_24h_usd: number;
    updated_at: number;
  };
}

export interface TrendingCoin {
  item: TrendingCoinItem;
}

export interface TrendingCoinItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: {
    price: number;
    price_btc: string;
    price_change_percentage_24h: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      gel: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
      bits: number;
      link: number;
      sats: number;
    };
    market_cap: string;
    market_cap_btc: string;
    total_volume: string;
    total_volume_btc: string;
    sparkline: string;
    content: string | null;
  };
}

export interface TrendingNFTItem {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  nft_contract_id: number;
  native_currency_symbol: string;
  floor_price_in_native_currency: number;
  floor_price_24h_percentage_change: number;
  data: {
    floor_price: string;
    floor_price_in_usd_24h_percentage_change: string;
    h24_volume: string;
    h24_average_sale_price: string;
    sparkline: string;
    content: string | null;
  };
}

export interface CoinById {
  id: string;
  name: string;
  symbol: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_cap_rank: string;
  market_data: {
    current_price: {
      eur: number;
      usd: number;
      cad: number;
    };
    high_24h: {
      eur: number;
      usd: number;
      cad: number;
    };
    low_24h: {
      eur: number;
      usd: number;
      cad: number;
    };
    ath: {
      eur: number;
      usd: number;
      cad: number;
    };
    ath_change_percentage: {
      eur: number;
      usd: number;
      cad: number;
    };
    atl: {
      eur: number;
      usd: number;
      cad: number;
    };
    atl_change_percentage: {
      eur: number;
      usd: number;
      cad: number;
    };
    market_cap: {
      eur: number;
      usd: number;
      cad: number;
    };
    fully_diluted_valuation: {
      eur: number;
      usd: number;
      cad: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
  };
}
