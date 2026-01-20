const express = require('express');
const router = express.Router();

// 导入各个API路由模块
const print = require("./print")


// 注册API路由
router.use("/",print)

module.exports = router;