let tarefas = []

function salvarTarefas(){
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

let input = document.querySelector('input')

input.addEventListener("keydown", function(enter){
    if(enter.key === "Enter"){
        AdicionarTarefa()
    }
})

function AdicionarTarefa() {
    const tarefa = input.value.trim()

    if (tarefa === "") return

    tarefas.push(tarefa)
    salvarTarefas()
    renderizarTarefas()

    input.value = ''
    input.focus()
}

function renderizarTarefas() {
    const ul = document.querySelector('ul')
    ul.innerHTML = ""

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
            ${tarefa}
            <span onclick="apagarTarefa(${index})">❌</span>
        `
        ul.appendChild(li)
    })
}

function apagarTarefa(index) {
    tarefas.splice(index, 1)
    salvarTarefas()
    renderizarTarefas()
}

document.addEventListener("DOMContentLoaded", () => {
    const tarefasSalvas = localStorage.getItem("tarefas")

    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas)
        renderizarTarefas()
    }
})