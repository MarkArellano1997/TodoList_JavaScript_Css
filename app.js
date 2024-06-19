const add = () => {
    let inputTask = document.getElementById('inputTask').value
    let tasksList = document.getElementById('tasksList')
    let task = document.createElement('li')

    if (inputTask !== "") {
        task.classList.add("task")
        task.innerHTML = `<span id='spanTask' class='cursor-pointer' onclick="taskComplete(this)">${formatText(inputTask)}</span><button onclick="taskDelete(this)" class="btnDelete">Eliminar</button>`
        tasksList.appendChild(task)
        document.getElementById('inputTask').value = ""
    } else{
        let errorClass=["text-center", "text-red-500"]
        document.getElementById('error').classList.add(...errorClass)
        document.getElementById('error').innerHTML = 'Todos los campos son obligatorios'
        setTimeout(()=>{
            document.getElementById('error').innerHTML = ''
        },3000)
    }

}

const taskComplete = (task)=>{
    task.classList.add("complete")
}

const formatText = (text)=>{
    return `${text[0].toUpperCase()}${text.slice(1)}`
}

const taskDelete =(task)=>{
    task.parentElement.remove()
}



