var seconds = 00; 
var ms = 00;
var min =00;
var Interval;
var appendMin=document.getElementById('min');
var appendSeconds=document.getElementById('sec');
var appendms=document.getElementById('ms');
var buttonStart=document.getElementById('start');
var buttonStop=document.getElementById('stop');
var buttonReset=document.getElementById('reset');

buttonStart.addEventListener('click', ()=>{
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});
/*
buttonStart.onclick = function() {
    
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}*/
buttonStop.addEventListener('click', ()=>{
  clearInterval(Interval);
});

buttonReset.addEventListener('click', () =>{
  clearInterval(Interval);
 ms = "00";
 seconds = "00";
 appendms.firstChild.textContent = ms;
 appendSeconds.firstChild.textContent = seconds;
});
/*
buttonReset.onclick = function() {
  clearInterval(Interval);
 ms = "00";
 seconds = "00";
 appendms.firstChild.textContent = ms;
 appendSeconds.firstChild.textContent = seconds;
}*/

function start () {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
     console.log(appendms);
  }

  function stop(){
    clearInterval(Interval);
  }


  function reset(){
    clearInterval(Interval);
    ms = "00";
    seconds = "00";
    min="00";
    appendMin.firstChild.textContent=min;
    appendms.firstChild.textContent = ms;
  	appendSeconds.firstChild.textContent = seconds;
  }

  function startTimer () {
    ms++;
    if(ms < 9){
      appendms.firstChild.textContent = "0" + ms;
    }
    
    if (ms > 9){
      appendms.firstChild.textContent = ms;
      
    } 
    
    if (ms > 99) {
      seconds++;
      appendSeconds.firstChild.textContent = "0"+ seconds;
      ms = 0;
      appendms.firstChild.textContent = "0" + 0;
    }
    if(seconds == 60){
      seconds=0;
      min++;
      appendSeconds.firstChild.textContent = "0"+ seconds;
      appendMin.firstChild.textContent="0"+min;
      appendms.firstChild.textContent=0;
    }
    if (seconds > 9){
      appendSeconds.firstChild.textContent = seconds;
    }
  
  }