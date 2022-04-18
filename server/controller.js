const fortuneList = require('./fortune.json')
let globalId = fortuneList[fortuneList.length - 1].id + 1


module.exports = {
    getCompliment: (req, res) => {
        const compliment = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
            "Lookin SICK, my dude."
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliment.length)
        let randomCompliment = compliment[randomIndex]
        res.status(200).send(randomCompliment)
    },
    getFortune: (req, res) => {
        res.status(200).send(fortuneList)
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortuneList.length)
        let randomFortune = fortuneList[randomIndex]
        res.status(200).send(randomFortune)  
    },
    addFortune: (req, res) => {
        let {text} = req.body
        let newFortune = {
            text,
            id: globalId
            
        }
        fortuneList.push(newFortune)
        res.status(200).send(fortuneList)
        globalId++
    },
    deleteFortune: (req, res) => {
        const {id} = req.params
        let index = fortuneList.findIndex(fortune => fortune.id === +id)
        fortuneList.splice(index, 1)
        console.log(`delete`, fortuneList)

        res.status(200).send(fortunes)
    },
    changeFortune: (req, res) => {
        let {id} = req.params
        let {text} = req.body
        let changedFortune = {text, id}
        let index = fortuneList.findIndex(fortune => fortune.id === +id)
        fortuneList.splice(index, 1, changedFortune)

        res.status(200).send(fortuneList)
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