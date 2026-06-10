console.log("helloworld")

const first=1;
const second =2;
console.log(first);
const str = "thanigavel"
console.log(str)
const subjects = ["maths","science","social"]
console.log(subjects[1])
subjects[1]="tamil"
console.log(subjects[1])
const arr = [1,"name",false,2.4]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const fourth = document.getElementById("ptag")
fourth.innerHTML = "this is my fourth class"

function newFunction() {
    console.log("I am writting something")
    
}
const input = document.getElementById("eventListener")
const output =  document.getElementById("Ptag")
input.addEventListener("input", ()=>{
    output.textContent= input.value
}) 