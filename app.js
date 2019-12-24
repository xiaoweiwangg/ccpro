let exp=require("express")
let app=exp()
app.listen(8081)
let sendmail=require("./mail")
let body = require("body-parser");
app.use(body.urlencoded({ limit: "50mb", extended: false }));
app.use(body.json({ limit: "50mb" }));
app.use(exp.static("./dist"))
app.post("/sendmsg",(req,res)=>{
  console.log(req.body);//
sendmail(
  "154818723@qq.com",
  "收到一条来自网站的信息,请注意查看!",
  `
  <h1>性别:${req.body.xingbie}</h1>
  <h1>生日:${req.body.shengri}</h1>
  <h1>微信号:${req.body.weixinhao}</h1>
  `
  )
})