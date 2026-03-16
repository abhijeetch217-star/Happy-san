let currentPage = 1;

window.onload = function(){
document.getElementById("loader").style.display="none";
typeText();
}

/* Page Navigation */

function nextPage(){
document.getElementById("page"+currentPage).classList.remove("active");
currentPage++;
document.getElementById("page"+currentPage).classList.add("active");
}

function prevPage(){
document.getElementById("page"+currentPage).classList.remove("active");
currentPage--;
document.getElementById("page"+currentPage).classList.add("active");
}

/* Typing Effect */

const text="Happy Birthday Eva 🎂\nAaj ka din bohot special hai...\nKyuki aaj tumhara birthday hai 💛\nAur tum deserve karti ho bohot saari happiness ✨";

let i=0;

function typeText(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typeText,40);
}
}

/* Heart Balloons */

function startHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.classList.add("heart");
heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(18+Math.random()*25)+"px";
heart.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},7000);

},300);

}
