const form = document.querySelector('.form')
const formInput = document.querySelector('.form-input') 
const list = document.querySelector('.todos-list')
        
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const inputValue = formInput.value

    if(inputValue) {
    const li = document.createElement('li')
    li.classList.add('todo')
    
    const todoText = document.createElement('p')
    todoText.classList.add('todo-text')
    todoText.textContent = inputValue

    const buttonCheck = document.createElement('button')
    buttonCheck.classList.add('check-btn')
    buttonCheck.innerHTML = '<i class="fas fa-check"></i>'

    const buttonTrash = document.createElement('button')
    buttonTrash.classList.add('trash-btn')
    buttonTrash.innerHTML = '<i class="fas fa-trash"></i>'

    li.appendChild(todoText)
    li.appendChild(buttonCheck)
    li.appendChild(buttonTrash)
    list.appendChild(li)

    formInput.value = ''
    } else {
        alert('nimadir kiriting:')
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'check-btn') {
        const item = e.target.parentElement
        item.classList.toggle('done')
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'trash-btn') {
        const item = e.target.parentElement
        item.remove()
    }
})