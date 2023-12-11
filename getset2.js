let obj = {
    firstName: "Saad",
    lastName: "Ahmed",
    get FullName() {

        console.log("This is my Full name")
        return this.firstName + this.lastName
        
    }
}

console.log(obj.FullName)