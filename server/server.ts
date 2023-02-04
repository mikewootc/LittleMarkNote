const express = require('express')
const server = express()
const port = 5173

export async function startServer() {
    server.get('/hello', (req, res) => {
    res.send('Hello World!')
    })

    server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

    server.use('', express.static('./'))

    return server;
}

