var axios = require ('axios');

const api = {
    queryNYT: function(keyword, begin, end) {
        const key = "eba802fa773e4425b3045143f0f78a93";
        const queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&begin_date=" + begin + "0101&end_date=" + end + "&api-key=" + key;
        return axios.get(queryURL);

    },
    saveArticle: function(article) {
        return axios.post("/api/saved", article);
    },
    getSavedArticle: function() {
        return axios.get("/api/saved");
    },
    deleteArticle: function(id) {
        return axios.delete("/api/saved/" + id);
    }

};

export default api;