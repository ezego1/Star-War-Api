document.addEventListener('DOMContentLoaded', async() => {
    try {
        const baseUrl = 'https://swapi.dev/api/people/'
    
        let card = document.querySelector('.gallery')
        
        const response = await fetch(baseUrl)
    
        if (!response.ok) {
            throw Error(response.statusText)
        }
        
        const data = await response.json()
        let {results} = data
        console.log(data)
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
    
    } catch (error) {
        console.log(error)
    }

    class User {
        constructor(name, gender, age, height) {
            this.name = name
            this.gender = gender
            this.age = age 
            this.height = height
        }

        getDetails() {

        }
    }

    document.querySelectorAll('.span-1').forEach((el, index) => {
        el.addEventListener('click', () => {
            name = document.getElementById(index).innerHTML
            console.log(name)
        })
    })

})