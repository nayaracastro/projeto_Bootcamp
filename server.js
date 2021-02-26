const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const img = require('./data')

server.use(express.static('public'))



server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function (req, res) {
    return res.render("index")
})

server.get("/about", function (req, res) {
    return res.render("about")
})
server.get("/courses", function (req, res) {
    return res.render("courses")
})

/*server.get("/recipes/:index", function (req, res) {
    const recipes = []; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;

    console.log(recipes[recipeIndex]); === sugestao da rocketseat===
})*/

server.get("/recipe/:id", function (req, res) {
    const id = req.params.id;

    const recipe = recipe.find(function (recipe) {

        return recipe.id == id;

    })
    if (!recipe) {
        return res.send('404-Pagina nao encontrada!')
    }
    return res.render('recipe', { item: recipe })
})

server.listen(8000, function () {
    console.log("Server is running")
})


