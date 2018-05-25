const randomActs = require('../data/randomActs').randomActs

function getAct() {
    const randomNo = Math.floor(Math.random() * (randomActs.length))
    const act = randomActs[randomNo]
    return act
 }