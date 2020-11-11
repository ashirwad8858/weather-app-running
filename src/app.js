const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../template/views')
const partialPath = path.join(__dirname,'../template/partials')

app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))



// app.get('',(req,res)=>{
//     res.send('<h1>Hello express</h1>')
// })
app.get('',(req,res)=>{
    res.render('index',{title:'Weather',name:'Ashirwad'})
})


app.get('/help', (req, res) => {
    res.render('help', {
        helptxt: 'This is help txt',
        title: 'Help',
        name: 'Ashirwad sharma'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{ title: 'About me', name:'Ashirwad Sharma' })

})

app.get('/weather',(req,res)=>{
    res.send({
        forcast:'It is snowing',
        locaton:'Ghazipur'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        name:'Ashirwad sharma',
        title:'404',
        errormsg:'Artical not found'
    })
})


app.get('*',(req,res)=>{
    res.render('404',{
        name:'Ashirwad sharma',
        title:'404',
        errormsg:'Page not found'
    })
})

app.listen(3000,()=>{
    console.log('Server is up and running');
})