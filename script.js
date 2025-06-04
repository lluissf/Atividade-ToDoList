let lista = document.querySelector("#lista");
let botao = document.getElementById("botao");

botao.addEventListener("click", function(event) {
    event.preventDefault(); 
    let campo = document.querySelector("input")
    if (campo.value === "") return;
    let item = document.createElement("li");
    item.innerHTML = `
    <input type="checkbox">
                        <span class="texto">${campo.value}</span> 
                        <span class="remover">Delete</span> 
                        <span class="editar">Edit</span>`;
    lista.appendChild(item) 
    campo.value = "";
});

lista.addEventListener("click", function(event) {
    event.preventDefault(); 
    let elemento = event.target;
    if(elemento.className === "remover"){
        elemento.parentElement.remove()
    }
    else if (elemento.className === "editar") {
        let campo = elemento.parentElement.querySelector('.texto');
        campo.contentEditable = true;
        campo.focus();
    }
})