
/*
const persona = {
    name:"ryan",
    lastname:"ray",
    age:30,
    showFullName: function(){
        return "Ryann Ray"
    }
}

/*
const persona = {
    name:"ryan",
    lastname:"ray",
    age:30,
    showFullName: showFullName
}
*/

const persona = {
    name:"ryan",
    lastname:"ray",
    age:30,
    showFullName() {
        return "Ryann2 Ray"
    }
}
console.log(persona.showFullName())