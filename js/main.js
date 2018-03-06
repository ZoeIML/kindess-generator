var ranActs = [
    "Test",
    "Test 2",
    "Test 3"
];

//console.log(randomActsArr);

document.getElementById('clickMe').addEventListener("click", getAct);

var starter = 0;

function getAct() {
   var ranNum = Math.floor(Math.random() * (ranActs.length));
   document.getElementById('seeMe').innerHTML = ranActs[ranNum];

}
