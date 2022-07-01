//-----------------------------------------------------------------
// Projet Calculatrice

const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent += e.target.id;
    })
})

 equal.addEventListener("click", () =>{
 let resultat = result.textContent;
 let calcul = eval(resultat); //attention a EVAL, eviter son utilisation.
result.textContent = calcul;
 })

 clear.addEventListener("click", () =>{
    result.textContent  = "";
 })











































    