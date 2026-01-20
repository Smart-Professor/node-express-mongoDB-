# Node-Express MongoDB 基础模板项目说明

## 项目概述
本项目是一个基于 Node.js + Express 框架的后端基础模板，集成了 MongoDB 数据库连接功能，可作为快速开发后端服务的起点。

## 技术栈
- **Node.js**: JavaScript 运行环境
- **Express**: Web 应用框架
- **MongoDB**: NoSQL 数据库
- **Mongoose**: MongoDB ODM 库，用于对象建模

## 目录结构
```
├── api/               # API 路由目录
│   ├── index.js       # 路由组织文件
│   └── print.js       # 示例 API 路由
├── config/            # 配置文件目录
│   ├── index.js       # 服务器配置
│   └── db.js          # MongoDB 连接配置
├── app.js             # Express 应用配置
├── server.js          # 服务器启动文件
└── package.json       # 项目依赖配置
```

## 核心功能

### 1. 服务器启动与配置
- 从配置文件读取端口号（默认 4413）
- 启动 Express 服务器并监听指定端口
- 提供完整的错误处理机制，包括端口占用等常见错误

### 2. MongoDB 数据库连接
- 支持从环境变量或配置文件读取 MongoDB 连接字符串
- 提供异步连接方法，确保数据库连接成功后才启动服务器
- 包含详细的错误处理和日志输出

### 3. API 路由管理
- 采用模块化路由设计，便于扩展和维护
- 支持路由嵌套，通过 api/index.js 统一组织管理
- 提供示例 API 路由（/api/print）

### 4. 错误处理
- 服务器启动错误处理
- 未捕获异常处理
- Promise rejection 处理
- MongoDB 连接错误处理

## 配置说明

### 服务器配置
在 `config/index.js` 文件中可配置以下参数：
- `port`: 服务器端口号（默认 4413）
- `host`: 主机地址（默认 localhost）
- `staticDirs`: 静态文件目录配置
- `mongoUri`: MongoDB 连接字符串

### 数据库配置
- 默认使用配置文件中的 `mongoUri`
- 支持通过环境变量 `MONGO_URI` 覆盖配置

## 依赖项
| 依赖 | 版本 | 用途 |
|------|------|------|
| express | ^5.2.1 | Web 应用框架 |
| mongoose | ^8.0.0+ | MongoDB ODM 库 |

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 配置 MongoDB 连接
在 `config/index.js` 中修改 `mongoUri` 为你的 MongoDB 连接字符串，或通过环境变量 `MONGO_URI` 设置。

### 3. 启动服务器
```bash
node server.js
```

服务器启动成功后，会显示以下信息：
```
MongoDB 已连接
服务器运行在 http://localhost:4413
```

### 4. 测试 API
访问以下地址测试示例 API：
```
http://localhost:4413/api/print
```

预期响应：
```
这是node项目
```

## 错误处理
- **端口占用**：如果端口 4413 已被占用，服务器会提示错误并退出
- **MongoDB 连接失败**：如果无法连接到 MongoDB，服务器会提示错误并退出
- **未捕获异常**：服务器会捕获并记录未捕获的异常，然后退出
- **Promise rejection**：服务器会捕获并记录未处理的 Promise rejection

## 扩展指南

### 添加新 API 路由
1. 在 `api` 目录下创建新的路由文件，例如 `user.js`
2. 在 `api/index.js` 中导入并注册新路由：
   ```javascript
   const userRouter = require("./user");
   router.use("/user", userRouter);
   ```
3. 重启服务器使新路由生效

### 添加数据库模型
1. 创建 `models` 目录
2. 在 `models` 目录下创建数据模型文件，例如 `User.js`
3. 使用 Mongoose 定义模型并导出
4. 在需要使用模型的地方导入使用

## 注意事项
- 本模板使用的是远程 MongoDB 连接字符串，实际开发中应根据需要修改为本地或生产环境的连接地址
- 生产环境中应通过环境变量设置敏感配置（如数据库密码），避免硬编码在配置文件中
- 建议在生产环境中添加更多的错误处理和安全措施

## 总结
此模板项目提供了一个结构清晰、功能完整的 Node.js 后端基础框架，包含了 Express 服务器配置、MongoDB 数据库连接和 API 路由管理等核心功能，可直接用于各种后端服务的开发和部署。通过模块化的设计，使得项目易于扩展和维护，是构建 Node.js 后端应用的理想起点。
