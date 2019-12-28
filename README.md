# vzer-ui-template

## 该项目为vzer-ui的一个基础模板，提供给一些有兴趣开发自己的UI组件的小伙伴们使用。

### vzer-ui github地址，项目持续更新，喜欢的请点个star。
[vzer-ui github地址](https://github.com/zengjielin/vzer-ui)

### 点击下方查看demo
[vzer-ui 在线演示地址](https://zengjielin.github.io/vzer-ui/dist/#/)

### 如何使用vzer-ui-template

### vzer-ui-template文件目录
```
vzer-ui-template
├─ config
│  ├─ webpack.build.js //用作打包web服务的配置文件，输出dist文件夹
│  ├─ webpack.dev.js //用作本地开发的配置文件
│  └─ webpack.npm.js //用作打包npm包的配置文件，输出lib
├─ dist //打包后的web服务包
├─ lib //打包后的npm包
├─ node_modules
├─ src
│  ├─ assets
│  │    ├─ css
│  │    ├─ font 
│  │    └─ img
│  ├─ examples //存放演示页面文件夹
│  ├─ plugin
│  │    ├─ assets
│  │    │    └─ scss //可以统一管理组件的css样式
│  │    ├─ components  //所有组件写在这个文件夹
│  │    │      └─ index.js //组件入口
│  │    ├─ index.js //统一处理组件
│  │    └─ style.js //样式入口
│  ├─ router 
│  │    └─ index.js
│  ├─ App.vue
│  └─ main.js 
├─ .babelrc
├─ .gitignore
├─ index.html
├─ package.json
└─ README.md
```
### 关于npm发包问题，自行决解，问题也很简单，不懂就多查找资料吧。 

### 快速入门教程

``` bash
# npm安装
npm install vzer-ui --save-dev

# 项目中引入
import Vue from 'vue'
import Vzer from 'vzer-ui'
import 'vzer-ui/lib/vzer.css'
Vue.use(Vzer)

# 组件使用示例
<vzer-button>默认按钮</vzer-button>

# 安装
npm install

# 运行项目
npm run dev

# 打包web服务命令
npm run build 

# 打包npm包命令
npm run package
```

