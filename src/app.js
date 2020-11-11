const path = require('path')
const express = require('express')
const hbs = require('hbs')
// const request = require('request')
const geolocation = require('./utils/geocode')
const forcaste = require('./utils/forecast')

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

    if(!req.query.location){
        return res.send({error:'location not found'})
    }

    geolocation(req.query.location,(error,{long,lati,location} = {})=>{
        if(error){
            return res.send({error})
        }

        forcaste(long,lati,(erro,forcastdata)=>{
                if(erro){
                   return res.send({error})
                }
                
                res.send({
                    forcast:forcastdata,
                    location,
                    address:req.query.location
                })
            })
        
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

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('Server is up and running');
})