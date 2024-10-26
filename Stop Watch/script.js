
let clock = document.querySelector(".clock");
let stop = document.querySelector(".stop")
let startBtn = document.querySelector(".start")    
let reset = document.querySelector(".reset");
let span = document.querySelector("span");
let interval;
let add = 0;

    function formatTime(value){
        return value < 10? `0${value}`: value;
    }
    function start(){
       interval =  setInterval(function(){
        add += 1;

        let hour = Math.floor(add / 360000);
        let min = Math.floor((add % 360000) / 6000);
        let sec = Math.floor((add % 6000) / 100);
        let milisec = Math.floor(add % 100);

     let a =  `${formatTime(hour)}:${formatTime(min)}:${formatTime(sec)}:<span >${formatTime(milisec)}</span>`
    //  console.log(a);
    clock.innerHTML = a;


    stop.innerText = "Stop"; 
    stop.removeEventListener("click", start); 
    stop.addEventListener("click", stopFunction);
    
    reset.disabled = true
},10)
    }
   
    function stopFunction(){
        clearInterval(interval);
        stop.innerText = "Pause"
        stop.removeEventListener("click", stopFunction)
        stop.addEventListener("click", start)
        reset.disabled = false;
        
    }
    function resetFunction(){
        clock.innerHTML = `00:00:00:<span>00</span>`
    }
    reset.addEventListener("click", resetFunction)

   
    
    stop.addEventListener("click", start);
    


