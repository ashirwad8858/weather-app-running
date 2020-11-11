console.log("client side java script")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    msg1.textContent = 'Loading...'
    msg2.textContent = ''
    // console.log(location)
    fetch('/weather?location='+location).then((responce)=>{
    responce.json().then((data)=>{
        if(data.error){
            // console.log(data.error)
            msg1.textContent = data.error;
        }else{
            // console.log(data.location);
            // console.log(data.forcast);
            msg1.textContent = data.location
            msg2.textContent = data.forcast
        }
    })
})

})