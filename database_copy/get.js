module.exports.setup = function (app,db){
    app.get('/', (req, res, next) => {
        res.json({ rsp: 'ok' });
    });
    
    app.get('/db/about-me', (req, res, next) => {
        let result ={
            rsp : 'fail',
        }
        db.get('SELECT * FROM tbl_about_myself', (err, rows) => {
            if (!err) {
                result.data = rows
                db.all('SELECT * FROM tbl_my_resume ORDER BY date desc',(err2,rows) => {
                    if(!err2){
                        result.rsp ='ok'
                        result.data.resume = rows
                        res.json(result)
                    }else{
                        res.json(result)
                    }
                })
                }
            });
    });

    app.get('/db/applications', (req, res, next) => {
        let result = {
            rsp : 'fail'
        }
        db.all('SELECT * FROM tbl_applications ORDER BY date desc',(err, rows) => {
            if(!err){
                result.rsp = 'ok'
                result.data = rows
                res.json(result)
            }else{
                res.json(result)
            }
        })
    })

    //notification 에 대한 get 요청을 처리하는 코드를 작성하세요.

    app.get('/db/notification', (req, res, next) => {
        let result = {
            rsp : 'fail'
        }
        db.get(`SELECT * FROM tbl_notifications WHERE expiration > date('now') ORDER BY id desc`,(err, row) => {
            if(!err){
                result.rsp = !row ? "nodata" : "ok";
                if(row){
                    result.data = row;
                }
                res.json(result)
            }else{
                result.error = err.message
                res.json(result)
            }
        })

    })

    app.get('/db/notification/:id', (req, res, next) => {
        let result = {
          rsp: 'fail',
        }
        db.get(
          `SELECT * FROM tbl_notifications WHERE expiration > date('now') AND id > ${req.params.id} ORDER BY id desc`,
          (err, row) => {
            if (!err) {
              result.rsp = !row ? 'nodata' : 'ok'
              if (row) {
                result.data = row
              }
              res.json(result)
            } else {
              result.error = err.message
              res.json(result)
            }
          }
        )
      })

    app.get('/db/blog', (req, res, next) => {
        let result = {
            rsp : 'fail'
        }
        db.all('SELECT * FROM tbl_blog ORDER BY id desc',(err, rows) => {
            if(!err){
                result.rsp = 'ok'
                result.data = rows
                res.json(result)
            }else{
                result.error = err.message
                res.json(result)
            }
        })
    })

    app.get('/db/admin', (req,res,next) => {
        let result = {
            rsp : 'fail'
        }
        db.get('SELECT * FROM tbl_admin',(err, row) => {
            if(!err){
                result.rsp = 'ok'
                result.data = row
                res.json(result)
            }else{
                result.error = err.message
                res.json(result)
            }
        })
    })
}
