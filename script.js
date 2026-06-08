const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

document.body.classList.add("dark");

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    toggle.innerHTML =
    document.body.classList.contains("dark")
    ? "🌙"
    : "☀️";
});

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",(e)=>{

        for(let i=0;i<8;i++){

            const particle =
            document.createElement("span");

            particle.classList.add("particle");

            particle.style.left =
            e.clientX + (Math.random()*30-15) + "px";

            particle.style.top =
            e.clientY + "px";

            document.body.appendChild(particle);

            setTimeout(()=>{
                particle.remove();
            },1000);
        }
    });
});

function createStar(){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.animationDuration=
    (Math.random()*3+2)+"s";

    document.getElementById("stars")
    .appendChild(star);

    setTimeout(()=>{
        star.remove();
    },5000);
}

setInterval(createStar,150);