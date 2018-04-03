import axios from "axios";

export default {
    // Search articles
    searchArticle: function (query) {
        return axios.get("/search")
    },
    // Gets all articles
    getArticle: function () {
        return axios.get("/api/articles");
    },
    // Gets the article with the given id
    getArticle: function (id) {
        return axios.get("/api/articles/" + id);
    },
    // Deletes the article with the given id
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves a article to the database
    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    }
};



event.preventDefault();
let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?
                api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${this.state.keyword}`
if (this.state.keyword && this.state.startYear && this.state.endYear) {
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

// axios
// .get("http://www.recipepuppy.com/api/", { params: req.query })
// .then(({ data: { results } }) => res.json(results))
// .catch(err => res.status(422).json(err));
// });