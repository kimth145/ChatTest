const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.get('/get_name', (req, res)=>{
    res.send({aa:"kim"})
})

app.get('/get_age/:name/:collage/', (req, res)=>{
    const name = req.params.name
    const collage = req.params.collage
    // console.log(name, collage)
    let age = 0
    if(name == "lee" && collage == "A"){
        age = 20
    }else if(name == "hong" && collage == "B"){
        age = 21
    }
    res.send({bb:age})
})

app.get('/get_collage', (req, res)=>{
    res.send("hanyan uv.")
})

app.listen(3001, ()=>{
    console.log("connected on server port 3001")
})

// console.log("connected on server port 3000")