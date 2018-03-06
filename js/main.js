var ranActs = [
    "Make cupcakes for someone",
    "Offer to do a chore for someone",
    "Make a card for someone",
    "Bring someone breakfast in bed",
    "Tell a funny joke to cheer someone up",
    "Return a trolley at the supermarket",
    "Hold the door open for someone else",
    "Draw or color in a picture for someone",
    "Pick up a piece of litter and put it in the bin when you see it",
    "Call a family member or friend you do not get to see very often",
    "Write a note to someone telling them why they are special to you",
    "Greet people with a smile",
    "Let someone go ahead of you in line",
    "Plant something",
    "Talk to someone new at school",
    "Bring flowers to your teacher",
    "Read a book to someone",
    "Say hello to everyone you see today",
    "Turn off the water while brushing your teeth",
    "Help make dinner",
    "Share a special toy with a friend",
    "Teach someone something new",
    "Reuse paper",
    "Donate old toys or clothes you don't need anymore",
    "Help with unpacking the groceries",
    "Help with washing the dishes",
    "Help with cleaning clothes",
    "Help someone else with their homework",
    "Give a friend a high five",
    "Send a postcard to a friend or family member",
    "Leave a happy or kind note for someone to find",
    "Plant a tree",
    "Make a gift for someone",
    "Say please and thank you",
    "Donate a book you enjoyed to the library"
];

//document.getElementById('clickMe').addEventListener("mouseover", colourChange)
document.getElementById('clickMe').addEventListener("click", getAct);

//function colourChange() {
//
//}

var starter = 0;

function getAct() {
   var ranNum = Math.floor(Math.random() * (ranActs.length));
   document.getElementById("seeMe").innerHTML = ranActs[ranNum];

}
