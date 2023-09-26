const http = require("http")
const url = require("url")
const app = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h2>welcome to Node JS</h2>')
    const urlObj = url.parse(req.url, true).query
    if(urlObj.uname === "pyneni") {
        res.write('<h3>Login Success</h3>')
    } else {
        res.write("<h3>Login Not Successfull</h3>")
    }
    res.end()
})

app.listen(3800)
console.log('Server running at port: 3800')