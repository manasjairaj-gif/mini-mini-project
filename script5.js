let answer = document.getElementById("inp");
let attempts = document.getElementById("attempts");
let para = document.getElementById("para");
let sub = document.getElementById("sub");
let res = document.getElementById("res")

const maxNo = 100;
const minNo = 1;
guess = Math.floor(Math.random() *(maxNo - minNo + 1)) + minNo;

let attempt = 0;
let running = true

res.onclick = function(){
    location.reload()
}

sub.onclick = function(){
    if(!running)
        return
    value = Number(answer.value);
    if(value > guess){
        para.textContent = "Too High!! Try again"
        attempt ++
        attempts.textContent= attempt
        para.className = "feedback high"
    }
    else if(value < guess){
        para.textContent = "Too Low!! Try again"
        attempt ++
        attempts.textContent = attempt
        para.className = "feedback low"
    }
    else{
        para.textContent = "Correct!!!!!"
        para.className = "feedback correct"
        attempt ++
        attempts.textContent = attempt
        running = false
    }
}

