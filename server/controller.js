const compliment = require('./compList.json')
let globalId = 4


module.exports = {
    getCompliment: (req, res) => {
        // const compliments = [
        //     "Gee, you're a smart cookie!",
        //     "Cool shirt!",
        //     "Your Javascript skills are stellar.",
        // ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliment.length);
        let randomCompliment = compliment[randomIndex];
        res.status(200).send(randomCompliment);   
    },
    deleteCompliment: (req, res) => {
        let index = compliment.findIndex(elem => elem.id === req.params.id)
        movies.splice(index, 1)
        res.status(200).send(compliment)
    },
    addCompliment: (req, res) => {
        let {text} = req.body
        let newCompliment = {
            id: globalId,
            text
        }
        compliment.push(newCompliment)
        res.status(200).send(compliment)
        globalId++
    },
    changeCompliment: (req, res) => {
        let {id} = req.params
        let {text} = req.body
        let index = compliment.findIndex(elem => +elem.id === +id)
        res.status(200).send(compliment)
    }
}  


















// app.get("/api/compliment", (req, res) => {
//     const compliments = ["Gee, you're a smart cookie!",
//                        "Cool shirt!",
//                        "Your Javascript skills are stellar.",
//     ];
  
//     // choose random compliment
//     let randomIndex = Math.floor(Math.random() * compliments.length);
//     let randomCompliment = compliments[randomIndex];
  
//     res.status(200).send(randomCompliment);
    
// 