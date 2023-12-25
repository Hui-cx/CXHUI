# react组件库(cxh-ui)说明

### 1.演示地址

```
https://cxh.ac.cn/CXHUI
```



### 2.项目简介

​		基于组件及UI设计规范的网站快速成型工具，整合web端组件信息，规范视觉的工作方式，提高开发效率。 

### 3.开发设计

#### 功能说明

- 使用`npm install cmdi-ui`进行安装，轻松的使用 import 或者 require 的方式引用

- 可以安装` babel-plugin-import`自动按需加载组件和样式
- 安装后，可在项目的入口文件中引入所有组件或所需组件

#### 主要技术栈

| 技术项 |        描述         | 版本     | 分类 |
| ------ | :-----------------: | -------- | ---- |
| React  |    渐进式js框架     | v2.5.2   | 前端 |
| dumi   |     组件库文档      | V2.2.7   | 前端 |
| less   |    css预处理语言    | V4.2.0   | 前端 |
| gulp   |     模块打包器      | v4.0.2   | 前端 |
| nodejs | JavaScript 运行环境 | V18.14.2 | -    |
| npm    |   nodejs包管理器    | V9.5.0   | -    |

### 4.cxh-ui文档部署

1.在文档修改完成后运行`yarn build:site`会生成一个CXHUI的静态资源包。

```json
yarn build:site
```

#### 5.npm上传

1.执行`yarn build`生成最新的lib和esm包

2.上传前修改package.json中version，确定npm的不同。

3.在项目根目录执行`npm login` 输入账号密码进行登陆。

4.登陆完成执行`npm publish`完成组件库的上传

