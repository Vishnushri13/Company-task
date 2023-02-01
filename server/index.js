const express = require('express');
const cors = require('cors');
const mycon = require('mysql');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "1311",
    database : "task"
})

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('Database Connected');}
})


app.post('/Add',(request,response)=>{
    let {name,email,mobile} = request.body;
    
    let sql = 'insert into comp(name,email,mobile)values(?,?,?)';

    c.query(sql,[name,email,mobile],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s);
        }
    })

})


app.get('/addlist',(request,response)=>{
    let sql = 'select * from comp';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

// app.get('/Editlist/:id',(request,response)=>{
//     let {id} = request.params;
//     let sql= 'select * from students where id=?';
//     c.query(sql,[id],(error,result)=>{
//         if(error){
//             response.send(error);
//         }
//         else{
//             response.send(result);
//         }
//     })
// })

// app.post('/Update',(request,response)=>{
//     let {id,firstname,lastname,email,dob,education,location,about} = request.body;
    
//     let sql = 'update students set firstname=?,lastname=?,email=?,dob=?,education=?,location=?,about=? where id=?';

//     c.query(sql,[firstname,lastname,email,dob,education,location,about,id],(error,result)=>{
//         if(error){
//             let s = {"status":"error"};
//             response.send(s);
//         }
//         else{
//             let s = {"status":"success"};
//             response.send(s);
//         }
//     })

// })

// app.post('/Delete',(request,response)=>{
//     let id = request.body.id;
//     let sql = 'delete from students where id=?';
//     c.query(sql,[id],(error,result)=>{
//         if(error){
//             let s = {"status":"error"};
//             response.send(s);
//         }
//         else{
//             let s = {"status":"success"};
//             response.send(s);
//         }
//     })
// })

app.listen(3004);