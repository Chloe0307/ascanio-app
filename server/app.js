const express = require('express')

const app = express()

const port = 3002

app.use(express.json())


app.listen(port, () => {
    console.log('serveur is up on port' + port)
})