var express = require('express')
var cors = require('cors')
var app = express()

// body parser for post request's body 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// in-memory
const DB = [
    {   id:1,
        name:"Login",
        inputs:[{label:"Login name", name:"loginName", type:"text"},{label:"Password", name:"password", type:"password"}],
        submissions:[["sharon","0501234567"]]
    }, 
    {   id:2,
        name:"CreateAcount",
        inputs:[{label:"First Name", name:"firstName", type:"text"},{label:"Second Name", name:"secondName", type:"text"}, {label:"Email", name:"email", type:"email"},{label:"Telehone", name:"tel", type:"tel"}],
        submissions:[["Sharon","Klebanov","sharonkle12@gmail.com","0501234567"]]
    }
]

//Enable all CORS requests
app.use(cors())

//Read parameter of id from the url
app.param('id', function(req, res, next, id) {
    req.id = id;
    next();
});

//get all froms
app.get('/forms', (req, res) => {
    res.send(DB)
})

// get form according to it's id
app.get('/forms/:id',(req, res) => {
    var form = DB.find(form=> form.id == req.id);
    res.send(form);
})

//post (add) a submit for specific form according to it's id
app.post('/forms/submit/:id', function(req, res) {
    DB.forEach(form => {
        if(form.id == req.id){
            form.submissions.push(req.body);
        }
    });
    res.end();
})

//post (add) new form 
app.post('/forms/addForm', function(req, res) {
    var id = DB.length + 1;
    req.body.id = id;
    DB.push(req.body)
    res.end();
})

//the server listen to port 3000
app.listen(3000, () => console.log('The server listening on port 3000!'))