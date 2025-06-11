const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
  console.log(req.url , req.method, req.headers);
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My Project </title></head>');
    res.write('<body><h1> enter your details<h1>');
    res.write('<form> action ="/submit details" method = "POST"');
    res.write('<input type = "text" name = "username" placeholder ="enter your name"/><br>');
    res.write('<label for ="male">Male</label>');
    res.write('<input type = "radio" id = "male" name = "gender" value = "male"/>');
    res.write('<label for "female">Female</label>');
    res.write('<input type = "radio" id = "female" name = "gender" value = "female"/>');
    res.write('<br><input type = "submit" value = "Submit"');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase() === "/submit-details" && req.method =="POST"){
    const body = [];
    req.on('data', chunk =>{
      console.log = (chunk);
      body.push(chunk);
        }
    );
    req.on('end' =>
    )
    fs.writeFileSync("user-detail.txt","Kabir lal");
    res.setHeader("location","/");
    res.statuscode = 302;
    return res.end();
  }
}); 
