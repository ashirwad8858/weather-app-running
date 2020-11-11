const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../views')

app.set('view engine', 'hbs')
app.set('views',viewPath)
app.use(express.static(publicDirectoryPath))



// app.get('',(req,res)=>{
//     res.send('<h1>Hello express</h1>')
// })
app.get('',(req,res)=>{
    res.render('index',{title:'Weather',name:'Ashirwad'})
})


app.get('/help',(req,res)=>{
    res.send('help',{ helptxt: 'This is help txt'}])
})

app.get('/about',(req,res)=>{
    res.send('about',{ title: 'About me', name:'Ashirwad Sharma' }])

})

app.get('/weather',(req,res)=>{
    res.send({
        forcast:'It is snowing',
        locaton:'Ghazipur'
    })
})


app.listen(3000,()=>{
    console.log('Server is up and running');
})