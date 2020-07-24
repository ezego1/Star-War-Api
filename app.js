document.addEventListener('DOMContentLoaded', () => {

    const baseUrl = 'https://swapi.dev/api/people/'
    
    let display = document.querySelector('.gallery')
    
    fetch(baseUrl)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        response.json()
        .then((data) => {
            console.log(data)
            let actors = data.results
            actors.map(actor => {
                const htmlElement = `        
                <div class="span-1">
                <img src="./resources/actors/actor1.jpg" alt="actor picture">
                <p>${actor.name}</p>
                </div>  
            `
            display.innerHTML += htmlElement
            });
        })
    })
    .catch((e) => console.log(e))
    
    console.log(display)
})