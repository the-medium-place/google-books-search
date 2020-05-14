const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favBookSchema = new Schema({
    id: {
        type: String,
        trim: true,
        required: true
    }
});

const FavBook = mongoose.model("FavBook", favBookSchema);

module.exports = FavBook;
