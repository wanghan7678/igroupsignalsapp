export interface PageStockRealTime 
{
    exchange: string;
    code: string;
    name: string;
    todayOpen: number;
    lastClose: number;
    nowPrice: number;
    todayHigh: number;
    todayLow: number;
    bidPrice: number;
    auctionPrice: number;
    tradedShares: number;
    tradedAmounts: number;
    bid1Shares: number;
    bid1Price: number;
    bid2Shares: number;
    bid2Price: number;
    bid3Shares: number;
    bid3Price: number;
    bid4Shares: number;
    bid4Price: number;
    bid5Shares: number;
    bid5Price: number;
    auction1Shares: number;
    auction1Price: number;
    auction2Shares: number;
    auction2Price: number;
    auction3Shares: number;
    auction3Price: number;
    auction4Shares: number;
    auction4Price: number;
    auction5Shares: number;
    auction5Price: number;
    date: string;
    time: string;
  
}
