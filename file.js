const image = document.querySelector("img");


image.addEventListener('mouseover' , function(){
    image.src = 'https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=ais_user' 
})

image.addEventListener('mouseout' , function(){
    image.src = 'https://img.freepik.com/free-vector/light-bulb_1045-575.jpg?w=826&t=st=1716274923~exp=1716275523~hmac=93599d4e4d1aa061e1b3da00fad9ddd5b56e1d63255020e1a024de65a9860b75' 
})