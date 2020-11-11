const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')


app.use(express.static(publicDirectoryPath))

// app.get('',(req,res)=>{
//     res.send('<h1>Hello express</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send([{ name : 'Ashirwad'}, { name:'Sharma' }])
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About page</h1>')
// })

app.get('/weather',(req,res)=>{
    res.send({
        forcast:'It is snowing',
        locaton:'Ghazipur'
    })
})


app.listen(3000,()=>{
    console.log('Server is up and running');
})