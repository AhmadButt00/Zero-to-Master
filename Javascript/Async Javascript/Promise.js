const promise = new Promise((resolve,reject)=>{
    setTimeout(
        ()=>{
            resolve()
        },4000
    )
})
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
Promise.all(urls.map(url=> fetch(url).then(resp => resp.json())))
.then(array =>{
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[3])
})
.catch(err => console.log("UGHH there is an error",err))