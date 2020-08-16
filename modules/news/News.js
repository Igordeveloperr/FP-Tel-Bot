const DataBase = require("../Db")

const db = new DataBase()
const conn = db.dbConnect()
let count = 0
module.exports = function test(bot, id){
    conn.query("SELECT * FROM `news`", (err, res, fil) => {
        if(err){throw err}
        if(count !== 2){
            bot.sendMessage(id, res[count]["body"])
            count++
        }
        else{
            bot.sendMessage(id, "На сегодня посты закончились")
            setInterval(() => count = 0, 3000)
        }
    })
}
