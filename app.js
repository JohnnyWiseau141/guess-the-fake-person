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
    console.log("check choice function operating...")
    
    convertedString = parseInt(choice)
    const unconvertedString = choice
    console.log("before:")
    console.log(daUsersChoiceList)
     
    for (let i = 0; i < secretChoiceList.length; i++) {     
        
        if (choice === secretChoiceList[i]) {
            console.log(secretChoiceList)
            console.log(typeof choice)
            console.log("congragulations you won the mile!")
            console.log(choice)
            // correctChoice = true
            daAnnoucement.innerText = "You made a correct choice! Your details will be generated coming soon..."
            daAnnoucement.className = "victory"
            console.log("break goes break")
            break
        } else if (!isNaN(convertedString)) {
            console.log(typeof convertedString)
            console.log("whatever you put in was WRONG. try again")
            console.log("now return goes ooo stop function and return the value")
            renderError("you chose a number. bruh. pick again")
            return
        } 
    }
    daUsersChoiceList[daUsersChoiceList.length] = unconvertedString
    console.log("now the array of choices made gets longer")
    console.log("after:")
    console.log(daUsersChoiceList)
    renderMyStuff() 
    
}

function renderError(error) {
    console.log("renderError sanity check")
    daAnnoucement.innerText = error
    daAnnoucement.className = 'error'
}

function renderChoice(div, lastChoice) {
    console.log("renderChoice function is working now")
}

function renderMyStuff() {
    const lastChoice = daUsersChoiceList[daUsersChoiceList.length - 1]
    const div = document.createElement('div')
    div.innerText = lastChoice
    console.log("renderMyStuff() is working cause it just happened")

    if (daUsersChoiceList.length === 1) {
        prevChoicesAnnouncement.innerText = 'Your previous choices:'
        resetButton.removeAttribute('hidden')
        console.log("remove reset button hidden attribute")
    }

    if (correctChoice) {
        renderCorrectChoice(div)
    } else {
        renderChoice(div, lastChoice)
    }

}

function renderCorrectChoice(div) {
    console.log("renderCorrectChoice function works like genshin tcg")
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
    console.log("initialize function go whoosh")
    console.log(secretChoiceList)
    renderMyStuff()
}
