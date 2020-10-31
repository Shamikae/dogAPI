//Declare and target the html element
let body = document.querySelector('body');
let url = 'https://dog.ceo/api/breeds/image/random/50'

// fetch(url)
// .then(res => {return res.json()})
// .then(res=> {console.log(res)})
// .catch(err => {console.log(err)})

//Can also be written without {} more common without

//fetch() allows you to make network requests from a database and it returns a promise
fetch(url)
//then is a synchronous code retrieves in order convetrs to json 
.then(res =>  res.json())
//response look like object or an array
.then(res=> {
    console.log(res.message)
for (let i = 0; i < res.message.length; i++){

    //creating an html element
    let picture = document.createElement('img'); 

    //adding a source to the element
    picture.src = res.message[i];

    // adding to the body 
    body.appendChild(picture);
}
})
//catch is to catch any issues from the server or the database
.catch(err => console.log(err))