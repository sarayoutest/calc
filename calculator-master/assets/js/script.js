const display = document.getElementById("display")
const apend = (input)=>{
    display.value += input
}
const cler = ()=>{
    display.value= "";
}

const calculate = ()=>{
    display.value = eval(display.value);
}
document.write("<h1>hello<span>youssef</span></h1>");
console.table(["sara","ahmad","abd"]);
console.log("sara%cyoussef","color:red; font-size:40px");