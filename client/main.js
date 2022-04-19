// const complimentContainer = document.querySelector(`#compliment-container`)
// const form = document.querySelector(`form`)

//.onclick
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment")
        .then(function (res) {
          const data = res.data
          alert(data)
        })
  }

  //.addeventlistener
 
//index.html elements that have features, connecting these so that the can have interactivity
const complimentContainer = document.getElementById(`compliment-container`)
const fortuneDisplay = document.getElementById(`fortune-display`)
const addForm = document.getElementById(`add-form`)
const deleteForm = document.getElementById(`delete-form`)
const changeForm = document.getElementById(`change-form`)
const changeZone = document.getElementById(`change-zone`)


//Loop through the array of fortunes and display the fortune at the index of i
const handleDisplay = (arr) => {
    // while (fortuneDisplay.childNodes.length > 0){
    //     fortuneDisplay.removeChild(fortuneDisplay.lastChild)
    // }

    for (let i = 0; i < arr.length; i++){
        displayFortune(arr[i])
    }
}


document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            handleDisplay(res.data)
            alert(res.data.text)
        })
  }


//take in a fortune object and log in the console
const displayFortune = fortune => {
    console.log(`Display fortune:`, fortune.id)
    //this makes a div for your fortune to be displayed along with the html
    let fortuneContainer = document.createElement(`div`)
    fortuneContainer.className = `fortune-container`
    fortuneContainer.innnerhtml = `<p> ${fortune.text} </p>`
    
    fortuneDisplay.appendChild(fortuneContainer)
}

//these will be referenced repeatedly in the following code, now it will not need to be embedded in each function
const baseURL = "http://localhost:4000/api/fortune"
const fortuneCallback = res => handleDisplay(res.data)
const errCallback = err => console.log(err)
// const errCallback = err => console.log(err.response.data)


//now we need to address our requests and make functions for those requests, we will reference the above to be more efficient with the repetitive code blocks below
const getFortune = () => {
    axios
        .get(baseURL)
        .then(fortuneCallback)
        .catch(errCallback)
}
// 
const addFortune = e => {
    e.preventDefault()

    const newFortune = {
        text: document.getElementById(`add-text`).value
    }
    axios
        .post(`${baseURL}`, newFortune)
        .then(fortuneCallback)
        .catch(errCallback)
    
        document.getElementById(`add-text`).value = ``
}

addForm.addEventListener(`submit`, addFortune)

const deleteFortune = id => {
    axios
        .delete(`${baseURL}/${id}`)
        .then(fortuneCallback)
        .catch(errCallback)
}

const changeFortune = fortune => {
    console.log(`change fortune init`)
    const changeForm = document.createElement(`form`)
    changeForm.className = `change-form`
    changeForm.innerHTML = `<p> ${fortune.text} </p>`
    //add this new info to this class section
    changeZone.appendChild(changeForm)
    //listen for when this butting is pressed so that that data can then be added
    changeForm.addEventListener(`submit`, e => {
        e.preventDefault()

        let changes = {
            text: document.getElementById(`text-input`).value
        }
        
        axios
            .put(`${baseURL}/${fortune.id}`, changes)
            .then(res => {
                handleDisplay(res.data)
                changeForm.remove()
            })
            .catch(errCallback)
    })
}

getFortune()
















// const getCompliment = () => axios.get(baseURL).then(complimentCallback).catch(errCallback)

// const deleteFortune = id => axios.delete(`${baseURL}/${id}`).then(fortuneCallback).catch(errCallback)

// const addFortune = body => axios.post(baseURL, body).then(fortuneCallback).catch(errCallback)

// const changeFortune = (id, text) => axios.put(`${baseURL}/${id}`, {text}).then(fortuneCallback).catch(errCallback)

// function submitHandler(e) {
//     e.preventDefault()

//     let text = document.querySelector('#text')

//     let bodyObj = {
//         text: text.value
//     }

//     addCompliment(bodyObj)

//     text.value = ''
// }

// function addCompliment(compliment) {
//     const complimentContainer = document.createElement('div')

//     container.appendChild(complimentContainer)
// }





 

