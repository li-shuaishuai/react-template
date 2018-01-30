# react-demo

> 基于webpack的react脚手架，方便开发者使用，省去开发环境的搭建。


### 详细文章移步：http://www.lishuaishuai.com/nodejs/527.html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 开发依赖

* "babel-core": babel的核心功能
* "babel-loader": babel加载器
* "babel-plugin-react-transform": 是基于Babel Plugin，这是一个基本的架子，和下面插件共同使用时限热加载
* "react-transform-hmr"
* "babel-preset-es2015": es2015的转化器
* "babel-preset-react": 实现JSX语法转换
* "css-loader": 处理css中路径引用等问题
* "extract-text-webpack-plugin": 抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
* "html-webpack-plugin": 将css、js文件动态插入页面
* "less": 在项目中使用less
* "less-loader":  less编译器
* "postcss-loader": 和下面插件共同实现自动添加浏览器前缀
* "autoprefixer"
* "style-loader": 将css插入到页面的style标签
* "url-loader": 将图片文件转换为base64编码并载入浏览器能够减少http请求数
* "webpack": "^3.6.0",
* "webpack-dev-server": 是一个小型的Node.js Express服务器
* "npm-install-webpack-plugin": 自动安装npm缺少的依赖

## react相关

* react-addons-pure-render-mixin: react性能优化工具