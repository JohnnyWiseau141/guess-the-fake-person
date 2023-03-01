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
    console.log("handleDaClicker function go whoosh whoosh")
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
        console.log("Start of for loop in checkChoice() at index: "+i)
        if (choice === secretChoiceList[i]) {
            console.log("da list of correct choices to choose from:")
            console.log(secretChoiceList)
            console.log(choice+"'s type is a:")
            console.log(typeof choice)
            console.log("congragulations you won the mile!")
            console.log(choice)
            correctChoice = true
            daAnnoucement.innerText = "You made a correct choice! Your details will be generated coming soon..."
            daAnnoucement.className = "victory"
            console.log("break goes break")
            break
        } else if (!isNaN(convertedString)) {
            console.log(convertedString+"'s type is...")
            console.log(typeof convertedString)
            console.log("now return goes ooo stop function and return the value")
            renderError("you chose a number. bruh. pick again")
            return
        } else {
            console.log("da final else at the end of da loop")
            renderError("NaN but it ain't the correct choice so pick again")
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
    console.log("renderChoice function is working now... standby")
    daAnnoucement.className = "incorrect"
    div.className = "incorrect"
    daAnnoucement.innerText = `${lastChoice} is not a valid choice. Please try again!`
    prevChoicesAnnouncement.appendChild(div)
}

function renderMyStuff() {
    
    const lastChoice = daUsersChoiceList[daUsersChoiceList.length - 1]
    const div = document.createElement('div')
    console.log("lastChoice variable being assigned to... "+daUsersChoiceList[daUsersChoiceList.length - 1])
    div.innerText = lastChoice
    console.log("renderMyStuff() is working cause it just happened")

    if (daUsersChoiceList.length === 1) {
        prevChoicesAnnouncement.innerText = 'Your previous choices:'
        resetButton.removeAttribute('hidden')
        console.log("remove reset button's hidden attribute")
    }

    if (correctChoice) {
        renderCorrectChoice(div)
    } else if (daUsersChoiceList.length > 0) {
        renderChoice(div, lastChoice)
    }

}

function renderCorrectChoice(div) {
    console.log("renderCorrectChoice function works like genshin tcg")
    daAnnoucement.className = "victory"
    div.className = "victory"
    prevChoicesAnnouncement.appendChild(div)
    if (daUsersChoiceList.length === 1) {
        daAnnoucement.innerText = "Congratulations you won the mile in one try! how did what's your secret??"
    } else {
        daAnnoucement.innerText = "Congrats! You chose "+daUsersChoiceList[daUsersChoiceList.length - 1]
    }

    if (daUsersChoiceList[daUsersChoiceList.length - 1] === "itto") {
        daFeatChoice.innerHTML = '<h1>it\'s itto showtime!</h1> <img src="https://genshinmains.com/wp-content/uploads/2021/10/Arataki-Itto.png"></img>'
    } else if (daUsersChoiceList[daUsersChoiceList.length - 1] === "mona") {
        daFeatChoice.innerHTML = '<h1>Arnold likes to simp for her~</h1> <img src="images/mona_item.png"></img>'
    } else if (daUsersChoiceList[daUsersChoiceList.length - 1] === "amber") {
        daFeatChoice.innerHTML = '<h1>Amber is best girl!</h1> <img src="images/amber_item.png"></img>'
    } else if (daUsersChoiceList[daUsersChoiceList.length - 1] === "eula") {
        daFeatChoice.innerHTML = '<h1>Mark my words. Vengeance will be mine!</h1> <img src="images/eula_item.png"></img>'
    } else if (daUsersChoiceList[daUsersChoiceList.length - 1] === "lumine") {
        daFeatChoice.innerHTML = '<h1>the best traveler!</h1> <img src="images/lumine_item.png"></img>'
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
    console.log("initialize function go whoosh")
    console.log(secretChoiceList)
    renderMyStuff()
}
