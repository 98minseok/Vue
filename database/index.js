const sqlite3 = require('sqlite3');
const express = require('express');
const cors = require('cors');
const app = express();
app.disable('x-powered-by');
app.use(cors());

const PORT = 8000;
let db = new sqlite3.Database('databse.db', (err) => {
    if (!err) {
        db.run(
            `CREATE TABLE IF NOT EXISTS tbl_about_myself (
                name TEXT,
                email TEXT,
                UNIQUE(name,email)
            )`,
            (err2) => {
                if (!err2) {
                    // 데이터가 이미 존재하는지 확인 후 삽입
                    db.get(
                        "SELECT COUNT(*) AS count FROM tbl_about_myself WHERE name = 'DOPT' AND email = 'armigar@naver.com'",
                        (err3, row) => {
                            if (!err3 && row.count === 0) {
                                db.run(
                                    "INSERT OR IGNORE INTO tbl_about_myself(name, email) VALUES ('DOPT', 'armigar@naver.com')"
                                );
                            }
                        }
                    );
                }
                else{
                    console.log("CREATE TABLE tbl_about_myself ERROR")
                }
            }
        );
        db.run(
            'CREAT TABEL IF NOT EXISTS tbl_my_resume (date DATE, title TEXT, content TEXT, URL TEXT, unique(date,title))',
            (err2) => {
                if (!err2){
                    const resume = [
                        {
                            date : '1998-12-09',
                            title : '탄생',
                            content : '태어남',
                            URL : null,
                        },
                        {
                            date : '2025-01-02',
                            title : '일주지앤에스 입사',
                            content : '일주지앤에스 입사',
                            URL : null,
                        }
                    ]
                    resume.forEach((item) => {
                        const query = `INSERT OR IGNORE INTO tbl_my_resume (date,title,content,URL) VALUES ('${item.date}' , '${item.title}' , '${item.content}' , '${item.URL}')`
                        db.run(query)
                    })
                }
                else{
                    console.log("CREATE TABLE tbl_my_resume ERROR")
                }
            }
        )
    }
});

app.listen(PORT, () => {
    console.log(`Listening... ${PORT}`);
});

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
