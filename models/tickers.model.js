import mongoose from "mongoose";

const TickerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    last: {
        type: String,
    },
    buy: {
        type: String,
    },
    sell: {
        type: String,
    },
    volume: {
        type: String,
    },
    base_unit: {
        type: String,
    },
});

const Ticker = new mongoose.model('ticker', TickerSchema);
export default Ticker;