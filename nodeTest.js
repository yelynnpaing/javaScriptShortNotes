function add (a, b) {
    return a + b
}


function div (a, b){
    if(b === 0) return "cannot divided by zero"
    else return a / b
}
module.exports = {add, div}