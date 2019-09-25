var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/local")

let User = mongoose.model("user",{
  username:String,
  password:String
})



router.post('/register', function(req, res, next) {
  //接受post提交的数据req.body   接受get传递的参数req.query
  let {username,password} = req.body;
  // console.log(username,password);
  User.findOne({username}).then((result)=>{
    // console.log(result)
    if(!result){
      let user = new User({
        username,
        password
      })

      user.save().then(()=>{
        res.json({
          code:200,
          errMsg:"",
          data:{
            status:1,
            info:"注册成功"
          }
        })
      })
    }else{
      res.json({
        code:200,
        errMsg:"",
        data:{
          status:0,
          info:"用户名重复"
        }
      })
    }
  })
})

module.exports = router;
