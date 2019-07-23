var fs = require('fs')
var dbPath = './db.json'

exports.find = function(callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      return callback(err)
    }
    callback(null,JSON.parse(data).students)
  })
}

exports.save = function(student,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students
    
    student.id = students[students.length-1].id + 1
    
    students.push(student)

    var fileData = JSON.stringify({
      students:students
    })

    fs.writeFile(dbPath,fileData,function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    })
  })
}