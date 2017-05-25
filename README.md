# vue-demo

http://www.zhinengshe.com

#### 脚手架创建模板
>$ vue init webpack-simple vue-demo


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

[vuex:集中式管理数据](http://vuex.vuejs.org/)
安装使用

```
npm install vuex --save

```
vuex提供两个非常靠谱的方法: mapActions管理所有事件  mapGetters管理所有数据

####项目需要的模块
vuex、vue-router、axios,下面两种方式安装都可以

```
npm install vuex vue-router axios -D
```
```
npm install vuex vue-router axios --save
```
如果想在js里引入css需要css-loader

```
npm install style-loader css-loader -D
```
下载完后需要去webpack.config.js里配置

```
{
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      }
```




For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
