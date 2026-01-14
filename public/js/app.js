let type = document.querySelectorAll('.type')
let rows = document.querySelectorAll('.row1 div')
let turn = 'X'  


rows.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            cell.textContent = turn
            turn = turn === 'X' ? 'O' : 'X'
            cell.style.color ='white'
        }
    })
})