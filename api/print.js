const express = require('express');
const router = express.Router();

router.get("/print",(req, res) =>{
    res.send('这是node项目');
});



module.exports = router