const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const {
    getCompliment,
    deleteCompliment,
    addCompliment,
    changeCompliment
} = require('./controller.js')

app.get("/api/compliment", getCompliment)
app.delete("/api/compliment/:id", deleteCompliment)
app.post("/api/compliment", addCompliment)
app.put("/api/compliment/:id", changeCompliment)



app.listen(4000, () => console.log("Server running on 4000"));
