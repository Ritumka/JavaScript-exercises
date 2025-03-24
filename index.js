// let username = "per"
// let message = "You have tree new notifications"
// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// let name = "Margo"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Margo"
// let greeting = "Welcome back, "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " 👋"


let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let entries = " " + count + " - "
    saveEl.innerText += entries

    console.log(count)
}