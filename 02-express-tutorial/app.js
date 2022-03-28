const express = require("express")
const { products } = require("./data")
const https = require("https")
const app = express()

app.get("/", function (req, res) {
    res.send(`<h1>Homepage</h1><a href="/api/products">products</a>`)
})

app.get("/api/products", (req, res) => {
    const allProduct = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.json(allProduct)
})

app.get("/api/products/:productId", (req, res) => {
    const { productId } = req.params
    const singleProduct = products.find((product) => product.id === Number(productId))
    if (!singleProduct) {
        res.status(404)
        res.json({ "error": "not found" })
    }
    res.json(singleProduct)
})

app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query
    let sortedProduct = [...products]

    if (search) {
        sortedProduct = sortedProduct.filter((products) => {
            return products.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }

    if (sortedProduct < 1) {
        return res.status.json({success: true, dat})
    }
    res.status(200).json(sortedProduct)
})

app.listen(3000, function () {
    console.log(`http://localhost:3000`)
})