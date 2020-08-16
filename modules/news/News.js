const DataBase = require("../Db")

module.exports = class News {
    #db = new DataBase()
    #conn = this.#db.dbConnect()
    constructor(){
        this._newsArgs = []
    }

    getNews(bot, id){
        this.#conn.query("SELECT * FROM `news`", (err, res, field) => {
            if(err){throw err}
            for(let i of res){
                bot.sendMessage(id, i["body"])
            }
        })   
    }
}

