const Bot = require("node-telegram-bot-api");
const cf = require("./modules/config");
const keyboard = require("./modules/keyboard");
const kb = require("./modules/keyboard-buttons");
const News = require("./modules/news/News");

const bot = new Bot(cf.TOKEN, {
    polling: true,
});

bot.on("message", msg => {
    const id = msg.chat.id;
    const post = new News()
    
    switch(msg.text){
        case kb.home.start:
            bot.sendMessage(id, `Привет ${msg.from.first_name}`, {
                reply_markup:{keyboard: keyboard.home}
            });
        break;

        case kb.home.phone:
            bot.sendMessage(id, "ВЫ В ТЕЛЕФОНЕ:", {
                reply_markup:{keyboard: keyboard.phone}
            });
        break;
        
        case kb.phone.news:
            post.getNews(bot, id)
        break;   

        case kb.home.shop:
            bot.sendMessage(id, "ВЫ В МАГАЗИНЕ:", {
                reply_markup:{keyboard: keyboard.shop}
            });
        break;       

        case kb.back:
            bot.sendMessage(id, "ВЫ НА ГЛАВНОЙ СТРАНИЦЕ:", {
                reply_markup:{keyboard: keyboard.home}
            });
        break;
    }
});

