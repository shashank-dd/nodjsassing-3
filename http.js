let fs=require("fs")
let http=require("http")
fs.writeFile("index.html","<h1> Hello World </h1> \n <p> This is shashank dd  ...</p>",(err)=>{
    console.log(err)
}
)
  server= http.createServer((req,res)=>{

    fs.readFile("index.html",{encoding:"utf8"},(err,data)=>{
        res.write(data)
         res.end()
    })
    
  })

server.listen(5000,()=>{console.log("server started at port 5000")})

