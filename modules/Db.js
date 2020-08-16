const sql = require("mysql2")
const config = require("./config")

module.exports = class DataBase{
    dbConnect(){
        const connect = sql.createConnection({
            host: config.db.host,
            user: config.db.user,
            database: config.db.database,
            password: config.db.password
        })

        connect.connect(err => {
            if(err){throw err}
            console.log("connect!")
        })

        return connect
    }
}

