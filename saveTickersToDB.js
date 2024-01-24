import fetch from "node-fetch";
import Ticker from "./models/tickers.model.js";
import connectDB from "./config/db.js";

const saveTickerToDB = async () => {
    try {
        const response = await fetch("https://api.wazirx.com/api/v2/tickers");
        let data = await response.json();
        data = [...Object.values(data)];
        let top10Data = data.sort((a, b) => parseFloat(b.last) - parseFloat(a.last))
        top10Data = data.slice(0, 10).map(({name, last, buy, sell, volume, base_unit}) => {
            return {
                name,
                last,
                buy,
                sell,
                volume,
                base_unit
            }
        });
        await connectDB();
        await Ticker.create(top10Data);
        console.log("Data saved successfully");
    } catch (error) {
        console.log(error);
    }
}

saveTickerToDB();