module.exports.setup = function(app,db){
    app.post('db/admin/login/:email/:password',(req,res,next) => {
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
}