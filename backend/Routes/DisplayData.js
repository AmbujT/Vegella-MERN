const express = require('express')
const router = express.Router()

router.post('/vegData', (req, res)=>
{
    try {
        console.log(global.products);
        res.send([global.products]);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})
module.exports = router;