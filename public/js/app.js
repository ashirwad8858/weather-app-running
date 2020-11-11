console.log("client side java script")

fetch('http://localhost:3000/weather?location=Varanasi').then((responce)=>{
    responce.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location);
            console.log(data.forcast);
        }
    })
})