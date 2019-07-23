var express = require('express')
// var fs = require('fs')
var Student = require('./student')

// 1.创建一个路由容器
var router = express.Router()

// 2.将路由挂载到 router 路由容器中
router.get('/students',function(req,res){
  // fs.readFile('db.json','utf8',function(err,data){
  //   if(err){
  //     return res.status(500).send('Server error')
  //   }
  //   var students = JSON.parse(data).students
  //   res.render('index.html',{
  //     students:students
  //   })
  // })
  Student.find(function(err,students){
    if(err){
      return res.status(500).send('Server error')
    }
    res.render('index.html',{
      students:students
    })
  })
})

router.get('/students/new',function(req,res){
  res.render('new.html')
})

router.post('/students/new',function(req,res){
  // 1.获取表单数据
  // 2.处理
  // 3.发送响应
  // console.log(req.body)
  Student.save(req.body,function(err){
    if(err){
      return res.status(500).send('Server error')
    }
    res.redirect('/students')
  })
})

router.get('/students/edit',function(req,res){

})

router.post('/students/edit',function(req,res){

})

router.get('/students/delete',function(req,res){

})

// 3.把router导出
module.exports = router