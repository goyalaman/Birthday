const target = new Date("January 8, 2026 19:33:30");

const btn = document.getElementById("surpriseBtn");
let unlocked = false;

setInterval(()=>{
  const now = new Date();
  const diff = target - now;

  if(diff <= 0 && !unlocked){
    unlocked = true;
    btn.disabled = false;
    btn.innerText = "Here is your Surprise";
    btn.classList.add("unlocked");
    btn.onclick = reveal;
  }

  d.innerText = Math.max(0, Math.floor(diff/86400000));
  h.innerText = Math.max(0, Math.floor(diff/3600000)%24);
  m.innerText = Math.max(0, Math.floor(diff/60000)%60);
  s.innerText = Math.max(0, Math.floor(diff/1000)%60);
},1000);


function reveal(){
  document.getElementById("stage1").classList.remove("active");
  document.getElementById("stage2").classList.add("active");
  document.getElementById("music").play();
  confetti();
}

let index=0;

let indexes = [0,0,0,0];

function move(show, dir){
  const track = document.querySelector(".t"+show);
  const max = track.children.length - 3;
  indexes[show-1] = Math.min(Math.max(indexes[show-1] + dir, 0), max);
  track.style.transform = `translateX(${-indexes[show-1]*305}px)`;
}

let currentShow = 0;

function nextShow(){
  const shows = document.querySelectorAll(".slideshow");
  shows[currentShow].classList.remove("active");
  currentShow++;
  shows[currentShow].classList.add("active");
}

function prevShow(){
  const shows = document.querySelectorAll(".slideshow");
  shows[currentShow].classList.remove("active");
  currentShow--;
  shows[currentShow].classList.add("active");
}



function confetti(){
  for(let i=0;i<150;i++){
    let c=document.createElement("div");
    c.style.cssText=`position:fixed;width:8px;height:8px;background:#e6b8b8;left:${Math.random()*100}vw;top:-10px;opacity:.8;animation:fall ${3+Math.random()*3}s linear`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),6000);
  }
}

const style=document.createElement("style");
style.innerHTML="@keyframes fall{to{transform:translateY(110vh) rotate(360deg);}}";
document.head.appendChild(style);

function openMessage(){
  document.getElementById("messageOverlay").classList.add("show");
}

function closeMessage(){
  document.getElementById("messageOverlay").classList.remove("show");
}
