const btn1 = document.querySelector("#btn1");
let nb = document.querySelector("#nb");

nb.innerText = localStorage.getItem('maValeurNb') || 0;

console.log("btn1")


btn1.addEventListener('click', () =>{

    nb.textContent = Number(nb.textContent) + 1;
    localStorage.setItem('maValeurNb', nb.textContent);

});
