const capitalizeString = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
}

const cap = capitalizeString("saad");

console.log(cap)