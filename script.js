function adicionar(){
    let entrada=document.getElementById("entrada")
    let valor=(entrada.value)
    if(valor===""){
        window.alert("Não é possível criar tarefas vazias")
    }
    else{
        const lista=document.getElementById("lista")
        const item=document.createElement("li")
        item.innerHTML=valor+ '<button onclick="remover(this)">Feito</button>'
        lista.appendChild(item)
    }
    entrada.value=""
}
function remover(li){
    li.parentElement.remove(li)
}