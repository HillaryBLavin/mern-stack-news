const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        trim: true,
        required: true
    },
    url: {
        type: String,
        trim: true,
        required: true
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;