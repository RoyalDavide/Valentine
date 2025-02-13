let phrases = ["are you sure?", "What if I ask really nicely?", "Pretty please", "With an ice cream on top", "What about a Lemonsoda?", "PLEASE POOKIE", "But :'(", 
               "I am going to die", "Yep Im dead", "ok ur now talking with Davide's ghost", "please babe", ":((((((", "PRETTY PLEASE", "No :(", "No :(", "No :(", "No :(", "No :(",
               "No :(", "No :(", "No :(", "No :(", "No :(", "No :(", "No :(", "No :("];

let index = 0;
let clickCount = 0;

function handleNoClick() {
    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");

    // incrementa dimensione pulsante yes
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseFloat(currentSize)*1.2 // +20%

    yesButton.style.fontSize = newSize + "px";
    yesButton.style.padding =(newSize / 2 ) + "px" + newSize + "px";
    
    // cambia testo del bottone no
    noButton.textContent = phrases[index];
    index = (index + 1) % phrases.length;

    clickCount++
    if (clickCount >= 27) {
        noButton.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // save content from the page
    const originalContent = document.body.innerHTML;

    // for handling yes
    function handleYesClick() {
        // remove everything
        document.body.innerHTML = "";

        // add new gif
        let newGif = document.createElement("img");
        newGif.src = "img/bear_k.gif";
        newGif.alt = "bear_k";
        newGif.style.margin = "27px auto";
        newGif.style.display = "block";
        document.body.appendChild(newGif);

        // create new text
        let newText = document.createElement("h2");
        newText.textContent = "WOOOOOOOOOO!!! I love you pookie!! 💜💖😭";
        newText.style.textAlign = "center";
        document.body.appendChild(newText);

        // create playAgain btn dynamically
        let playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play again";
        playAgainButton.id = "playAgainButton";
        playAgainButton.onclick = resetPage;
        clickCount = 0;
        document.body.appendChild(playAgainButton);
    }
    // for restoring the page
    function resetPage() {
        document.body.innerHTML = originalContent;
        addEventListeners();
    }
    // add event listeners after reset
    function addEventListeners() {
        document.getElementById("yesButton").addEventListener("click", handleYesClick);
    }
    // add events to the initials btns
    addEventListeners();
});
