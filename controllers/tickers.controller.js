import Ticker from "../models/tickers.model.js";

const getTickers = async (req, res) => {
    try {
        const tickers = await Ticker.find();
        const sortedTickers = tickers.sort((a, b) => parseFloat(b.last) - parseFloat(a.last))
        res.status(200).json(sortedTickers);
    } catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
}

export {getTickers}