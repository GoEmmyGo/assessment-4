// const complimentContainer = document.querySelector(`#compliment-container`)
// const form = document.querySelector(`form`)
const complimentContainer = document.querySelector(`#compliment-container`)
const form = document.querySelector('form')

const baseURL = "http://localhost:4000/api/compliment"

const complimentCallback = ({data: compliment}) => displayCompliment(compliment)
const errCallback = err => console.log(err.response.data)

const getCompliment = () => axios.get(baseURL).then(complimentCallback).catch(errCallback)
const deleteCompliment = id => axios.delete(`${baseURL}/${id}`).then(complimentCallback).catch(errCallback)
const addCompliment = body => axios.post(baseURL, body).then(complimentCallback).catch(errCallback)
const changeCompliment = (id, text) => axios.put(`${baseURL}/${id}`, {text}).then(complimentCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let text = document.querySelector('#text')

    let bodyObj = {
        text: text.value
    }

    addCompliment(bodyObj)

    text.value = ''
}

function addCompliment(compliment) {
    const complimentContainer = document.createElement('div')

    container.appendChild(complimentContainer)
}

getCompliment()



// document.getElementById("complimentButton").onclick = function () {
//     axios.get("http://localhost:4000/api/compliment")
//         .then(function (response) {
//           const data = response.data;
//           alert(data);
//         });
//   }; 

//   document.getElementById("addComplimentButton").onclick = function () {
//     axios.post("http://localhost:4000/api/compliment")
//         .then(function (response) {
//           const data = response.data;
//           alert(data);
//         });
//   }; 

//   document.getElementById("addComplimentButton").onclick = function () {
//     axios.post("http://localhost:4000/api/compliment")
//         .then(function (response) {
//           const data = response.data;
//           alert(data);
//         });
//   }; 

//   complimentCallback()