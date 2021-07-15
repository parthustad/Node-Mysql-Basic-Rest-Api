const { urlencoded } = require("express");
const express = require("express");

const postsRoutes = require("./routes/posts-routes") 

const app = express()

app.use(express.json())
app.use(express.urlencoded()) 

const PORT = 4000 || process.env.PORT

app.use('/api/posts',postsRoutes)
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})