const kb = require("./keyboard-buttons");

module.exports = {
    home:[
        [kb.home.phone, kb.home.shop]
    ],
    phone:[
        [kb.phone.news, kb.phone.correspondence, kb.phone.browser],
        [kb.back]
    ],
    shop:[
        [kb.shop.gifts, kb.shop.chill],
        [kb.back]
    ]
}