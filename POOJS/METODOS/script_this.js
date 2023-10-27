


/*
const persona = {
    name:"ryan",
    lastname:"ray",
    age:30,
    showFullName() {
        console.log(this)
        return "Ryan Ray"
    }
}
*/

/*
const persona = {
    name:"ryan",
    lastname:"ray",
    age:30,
    showFullName() {
        console.log(this.showFullName())
        return "Ryan Ray"
    }
}
*/

const persona = {
    name:"JOE",
    lastname:"PEREZ",
    age:30,
    showFullName() {
        //console.log(this.name)
        return this.name+" "+this.lastname
    }
}

console.log(persona.showFullName())

const account = {}