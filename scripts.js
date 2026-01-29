let input = document.querySelector('input')

input.addEventListener("keydown", function(enter){
    if(enter.key === "Enter"){
        AdicionarTarefa()
    }
})

function AdicionarTarefa(){
    const tarefa = input.value
    const li = document.createElement('li')
    li.innerHTML = tarefa + "<span onclick='apagarTarefa(this)'>❌</span>"
    document.querySelector('ul').appendChild(li)
    input.value = ''
    input.focus()
}

function apagarTarefa(tarefaAtual){
    tarefaAtual.parentElement.remove()
}