const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
async function getData(){
    const [people1 , people2, people3, people4] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    console.log(people1);
    console.log(people2);
    console.log(people3);
    console.log(people4);
}