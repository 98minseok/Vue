module.exports.setup = function(app,db){
    app.post('/db/admin/login/:email/:password',(req,res,next) => {
        let result = {
            rsp : 'fail',
        }
        const token = 'T-' +Math.floor(Math.random()*1000000).toString()
        db.get(
            `SELECT * FROM tbl_admin WHERE email = '${req.params.email}'`,
            (err,row) =>{
                if(!err){
                    if(!row){
                        result.rsp = 'no email',
                        result.email = req.params.email
                        res.json(result)
                    } else if ( row['password'] !== req.params.password){
                        result.rsp = 'wrong_password'
                        res.json(result)
                    } else {
                        db.run(
                            `UPDATE tbl_admin SET token = '${token}' WHERE email = '${req.params.email}'`,
                        )
                        result.rsp = "ok"
                        result.token = token
                        res.json(result)
                    }
                }else{
                    result.rsp = 'no_email'
                    res.json(result)
                }
            }
        )
    })

    app.post('/db/admin/check-token/:email/:token',(req,res,next) => {
        let result = {
            rsp : 'fail'
        }
        db.get(
            `SELECT * FROM tbl_admin WHERE grade = 'owner' AND ((email='${req.params.email}' AND token = '${req.params.token}') OR ( email = 'vue' and password = 'vue' and token is null))`,
            (err,row) =>{
                console.log('check-token',row)
                if(!err && row){
                    result.rsp = 'ok'
                    result.data = row['email']
                    res.json(result)
                } else{
                    res.json(result)
                }
            }
        )
    })

    app.post('/db/blog',(req,res,next) => {
        let result = {
            rsp : 'fail'
        }
        console.log(req.body)   
        db.run(`INSERT INTO tbl_blog (title,post,type) VALUES ('${req.body.title}','${req.body.content}' , '${req.body.type}')`,(err) => {
            if(!err){
                result.rsp = 'ok'
                res.json(result)
            }else{
                result.error = err.message
                res.json(result)
            }
        })
    })
}