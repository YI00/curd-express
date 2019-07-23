var express = require('express')

var app = express()

var bodyParser = require('body-parser')

var router = require('./router')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())

// 配置art-template
app.engine('html',require('express-art-template'))

// 把路由容器挂载到 app 容器服务中
app.use(router)

// 将node_moudules和public开放出来
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.listen(3000,function(){
  console.log('Server is running...')
})