//install nodejs-typescript, 
// do: cd static, npm --init, tsc --init, tsc -v,  npm install --user typescript
const great = document.getElementById("idgreeter");
const p = document.createElement("p");

p.textContent = "THIS SHOULD BE SHOWN !!!!!!!!";

great.appendChild(p);
/*
window.onload = function(){
    let user: string ="ohXUYDFJ";

    document.body.innerHTML = "<p> + user + </p>";
}*/