const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const visitorModel = require("./models/visitor")

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://nevin1111:internalmarkmongo@cluster0.ltgqnuy.mongodb.net/visitorDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/addvisitor", (request, response) => {
    console.log(request.body)
    let data_store = visitorModel(request.body)
    data_store.save()

    response.json({
        "status": "success"
    })
})

app.post("/viewall", (request, response) => {
    visitorModel.find().then(
        (items) => {
            response.json(items)
        }
    ).catch()

})

app.listen(4000, () => {
    console.log("server running ")
})