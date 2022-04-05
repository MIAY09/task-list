let pencil = document.querySelector('#pencil')
let user_input = document.querySelector('#user_input')
let all_items = document.querySelector('#all_items')
let clear = document.querySelector('#clear')
clear.addEventListener('click', ()=>{
    all_items.innerHTML = ''
})
user_input.addEventListener('keydown', event=>{
    if(event.key =='Enter'){
        addItem()
    }
})
pencil.addEventListener('click', ()=>{
    addItem()
})
function addItem(){
    if(user_input.value == ''){
        alert('Введите задачу')
    }
    else{
        let item = document.createElement('h2')
        item.textContent = '- ' + user_input.value
    
        item.addEventListener('click', ()=>{
            if(item.style.textDecoration != 'line-through'){
                item.style.textDecoration = 'line-through'
            }
            else{
                item.style.textDecoration = 'none'
            }
        })

        all_items.appendChild(item)
        user_input.value = ''
    }
}