let body = document.querySelector('body');
let url = 'https://dog.ceo/api/breeds/image/random/50'

// fetch(url)
// .then(res => {return res.json()})
// .then(res=> {console.log(res)})
// .catch(err => {console.log(err)})

//Can also be written without {} more commen

fetch(url)
.then(res =>  res.json())
.then(res=> {
    console.log(res.message)
for (let i = 0; i < res.message.length; i++){
    let picture = document.createElement('img'); //creating an html element

    picture.src = res.message[i]; //adding a source to the element
    body.appendChild(picture); // adding to the body}
}
})
.catch(err => console.log(err))