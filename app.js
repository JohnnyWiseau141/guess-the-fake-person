//stuff and things things and stuff

//da variables

let secretChoiceList, correctChoice, daUsersChoiceList, convertedString

//cashed elemental referendums lmao (cached element references)

const form = document.querySelector("form")
const choiceInput = document.querySelector("#da-guessed-guess")
const daFeatChoice = document.querySelector("#feat-choice")
const daAnnoucement = document.querySelector("#message")
const resetButton = document.querySelector("#reset-button")
const prevChoicesAnnouncement = document.querySelector("#prev-choice-msg")



// da event listening wiretaps

form.addEventListener("reset", initialize)

form.addEventListener("submit", handleDaClicker)

// da functionality of da functions yo

initialize();

function handleDaClicker(evt) {
    evt.preventDefault()
    if (correctChoice === false) {
        checkChoice(choiceInput.value)
    }

}


function checkChoice(choice) {
    
    const unconvertedString = choice
    convertedString = parseInt(choice)

    if (choice === secretChoiceList[0]
        || choice === secretChoiceList[1]
        || choice === secretChoiceList[2]
        || choice === secretChoiceList[3]
        || choice === secretChoiceList[4]) {
        console.log(typeof choice)
        console.log("congragulations you won the mile!")
        console.log(choice)
        daUsersChoiceList[daUsersChoiceList.length] = unconvertedString
    } else if (isNaN(convertedString)) {
        console.log(typeof choice)
        console.log("whatever you put in was WRONG. try again")
        daUsersChoiceList[daUsersChoiceList.length] = unconvertedString
    } else {
    daUsersChoiceList[daUsersChoiceList.length] = unconvertedString
    }
    renderMyStuff() 
    
}

function renderError(error) {

}

function renderMyStuff() {
    const lastChoice = daUsersChoiceList[daUsersChoiceList.length - 1]
    const div = document.createElement('div')
    div.innerText = lastChoice
    console.log("renderMyStuff() function is working")

    if (daUsersChoiceList.length === 1) {
        prevChoicesAnnouncement.innerText = 'Your previous choices:'
        resetButton.removeAttribute('hidden')
        console.log("remove reset button hidden attribute")
    }
}




function initialize() {
    // remove charas from choice list
    daFeatChoice.innerHTML = ""
    // reset da starting announcement message
    daAnnoucement.innerText = "enter some genshin rando's name"
    // hide the reset button
    resetButton.setAttribute("hidden", true)
    // get rid of "choices" list
    prevChoicesAnnouncement.innerText = ""
    // set the list of characters you can guess
    secretChoiceList = ["itto", "mona", "amber", "eula", "lumine"]
    //resets the users choices back to zero
    daUsersChoiceList = []
    //make sure the user does not have a selected character
    correctChoice = false
    console.log(secretChoiceList)
    renderMyStuff()
}




