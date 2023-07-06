let total = 0

document.querySelector('#blue').addEventListener('click', showZero)
// document.getElementById('blue').onclick = showZero
document.querySelector('#red').addEventListener('click', showThree)
document.querySelector('#yellow').addEventListener('click', showNine)
document.querySelector('#green').addEventListener('click', showTwo)

function showZero(){
    total = 0 
    document.querySelector('#placeToPutResult').innerText = total 
}
 function showThree(){
    total = total +3
    document.querySelector('#placeToPutResult').innerText = total
 }

 function showNine(){
    total = total +9
    document.querySelector('#placeToPutResult').innerText = total
 }

function showTwo(){
    total = total -2
    document.querySelector('#placeToPutResult').innerText = total
}