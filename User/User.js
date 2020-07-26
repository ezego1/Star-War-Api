class User {
    constructor(name, height, gender, birth_year) {
        this.name = name
        this.gender = gender
        this.birth_year = birth_year 
        this.height = height
    
    }

    getDetails() {
        document.getElementById('modal__name').innerHTML = this.name
        document.getElementById('modal__age').innerHTML = this.birth_year
        document.getElementById('modal__height').innerHTML = this.height
        document.getElementById('modal__gender').innerHTML = this.gender
    }
}

export default User