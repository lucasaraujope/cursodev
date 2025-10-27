let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("todoList")) || [];


function renderTarefas(){
    listElement.innerHTML = "";

    tarefas.map((todo)=> {
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo)

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)


        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement);
    })
}
renderTarefas()

function adicionartarefas(){
    if(inputElement.value === ''){
        alert("Digite uma tarefa");
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1)
    renderTarefas();
    salvarDados();
}

buttonElement.onclick = adicionartarefas;

buttonElement.addEventListener("keydown", (e) =>{

    if(e.key === 'Enter' || e.key === 'enter'){
        adicionartarefas;
        salvarDados();
    }
})

function salvarDados(){
    localStorage.setItem("todoList", JSON.stringify(tarefas))
}