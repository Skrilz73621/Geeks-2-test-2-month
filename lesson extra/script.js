const textArea = document.querySelector('.text')
let amount = document.querySelector('.amountOfSym')
const rest = document.querySelector('.restOfSym')
const restAmount = 50
const numAmount = 0
rest.innerHTML = `Осталось символов:${restAmount}`
amount.innerHTML = `Всего символов:${numAmount}`




textArea.setAttribute('maxlength', restAmount)
textArea.addEventListener('input', ()=>{
    rest.innerHTML = `Осталось символов:${restAmount - textArea.value.length}`
    amount.innerHTML = `Всего символов:${textArea.value.length}`
})
