const showButton=document.getElementById("showButton");

const messageBox=document.getElementById("messageBox");

showButton.addEventListener("click",()=>{

messageBox.style.display="block";

messageBox.animate(

[
{

opacity:0,

transform:"translateY(-25px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],

{

duration:600,

easing:"ease-out"

}

);

showButton.style.display="none";

});
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;
const particleContainer =
document.getElementById("particles");

function createParticle(){

const particle =
document.createElement("div");

particle.classList.add("particle");

particle.style.left=
Math.random()*100+"vw";

particle.style.animationDuration=
(Math.random()*6+4)+"s";

particle.style.opacity = Math.random();

const colors = [
"#8338ec",
"#3a86ff",
"#06d6a0",
"#ffd60a",
"#00f5ff"
];

particle.style.background =
colors[Math.floor(Math.random()*colors.length)];

particle.style.transform=
`scale(${Math.random()*2})`;

particleContainer.appendChild(particle);

setTimeout(()=>{

particle.remove();

},10000);

}

setInterval(createParticle,100);
const glow=document.createElement("div");

glow.classList.add("cursorGlow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});
function animateGlow() {

    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";

    requestAnimationFrame(animateGlow);

}

animateGlow();
const ripple =
document.getElementById("ripple");

showButton.addEventListener("click",()=>{

ripple.style.animation="none";

ripple.offsetHeight;

ripple.style.animation=
"rippleEffect .7s ease-out";

});
const form = document.getElementById("messageBox");
const sendButton = document.getElementById("sendButton");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    sendButton.textContent = "Sending...";

    const formData = new FormData(form);

    const response = await fetch(
        "https://api.web3forms.com/submit",
        {
            method: "POST",
            body: formData
        }
    );

    const result = await response.json();

    if(result.success){

        alert("🎉 Message sent successfully!");

        form.reset();

    }else{

        alert("❌ Failed to send message.");

    }

    sendButton.textContent = "Send 🚀";

});