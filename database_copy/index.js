const sqlite3 = require('sqlite3');
const express = require('express');
const cors = require('cors');
const post = require('./post.js')
const put = require('./put.js')
const initial = require('./initial.js')
const TYPE = require('./type.js')
const get = require('./get.js')
const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use('/assets',express.static('assets'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;
let db = new sqlite3.Database('databse.db', (err) => {
    if (!err) {
        initial.run(db, TYPE.about_me)
        initial.run(db, TYPE.applications)
        initial.run(db, TYPE.resume)
        initial.run(db, TYPE.notification)
        initial.run(db, TYPE.blog)
        initial.run(db, TYPE.admin)
    }
});

app.listen(PORT, () => {
    console.log(`Listening... ${PORT}`);
});

get.setup(app,db)
post.setup(app,db)
put.setup(app,db)

