// MongoDB 连接模块
const mongoose = require('mongoose');
const config = require('./index');

async function connect() {
  const uri = process.env.MONGO_URI || config.mongoUri;
  if (!uri) {
    throw new Error('MongoDB URI 未配置，请在 config/index.js 中设置 mongoUri 或通过环境变量 MONGO_URI 传入。');
  }

  try {
    // 新版本的mongoose不再需要这些选项，已默认启用
    await mongoose.connect(uri);
    console.log('MongoDB 已连接');
  } catch (err) {
    console.error('无法连接到 MongoDB:', err);
    throw err;
  }
}

module.exports = {
  connect,
  mongoose
};
