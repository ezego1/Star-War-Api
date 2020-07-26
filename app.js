import User from './User/User.js'


document.addEventListener('DOMContentLoaded', async() => {
    try {
    
        const baseUrl = 'https://swapi.dev/api/people/'
    
        const card = document.querySelector('.gallery')
        
        const response = await fetch(baseUrl)
    
        if (!response.ok) {
            throw Error(response.statusText)
        }
        
        const data = await response.json()
        const {results} = data
        results.map((actor, index) => {
            const htmlElement = `        
            <a href="#modal">
            <div class="span-1">
                <img src="./resources/actors/actor1.jpg" alt="">
                <p id='${index}'>${actor.name}</p>
            </div> 
            </a>`

            card.innerHTML += htmlElement
        });

        document.querySelectorAll('.span-1').forEach((el, index) => {
            el.addEventListener('click', () => {
                const uiName = document.getElementById(index).innerHTML
                results.map(obj => {
                    if (obj.name === uiName) {
                        const {name, height, gender, birth_year} = obj
                        const user = new User(name, height, gender, birth_year).getDetails()
                    }
                })
            })
        })
        
    } catch (error) {
        console.log(error)
    }
    
})