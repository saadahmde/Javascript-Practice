

console.log("Say hello to the Classes and Objects in Javascript")
class bookOnline{
    submit(){
        alert( this.name + " form submitted")
    }
    cancel(){
        alert(this.name + " This form is cancelled")
    }
    fill(name){
        this.name = name;
    }
}

// Create a form for Saad
let Saad = new bookOnline();
// Fill the form with Saad credentials 
Saad.fill('Saad');  // Output : Saad



let Ahmed = new bookOnline();
Ahmed.fill('Ahmed') ;   // Output: Ahmed


Saad.submit();
Ahmed.submit();
Ahmed.cancel();


