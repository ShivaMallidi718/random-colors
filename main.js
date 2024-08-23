const container = document.getElementById("container");
const button = document.getElementById("new-colors");

function main(){
        for(let i=0;i<28;i++){
                const div = document.createElement("div");
                div.classList.add("box");
                let boxColor = generateColor()
                div.style.backgroundColor = boxColor;
                div.textContent = boxColor;
                container.append(div);
        }
}
main();
function generateColor(){
        let a = "0123456789abcdef";
        color = "#";
        for(let i=0;i<6;i++){
                color+= a[Math.floor(Math.random()*16)];
        }
        return color;
}
container.addEventListener("click",(event)=>{
        navigator.clipboard.writeText(event.target.textContent);
});
button.addEventListener("click",()=>{
        const divs = document.querySelectorAll(".box");
        divs.forEach((singlediv)=>{
                let newColor = generateColor();
                singlediv.style.backgroundColor = newColor;
                singlediv.textContent = newColor;
        });
        button.style.backgroundColor = generateColor();
});