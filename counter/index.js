let count=0
let rowCnt=0
let total=0
let ttl=document.getElementById("total")
let incrementEl=document.getElementById("count-el")
function increment(){
    count+=1
    total+=1
    ttl.textContent=total
    incrementEl.innerText=count

}
function savingValue(){
    var table=document.getElementById("saved-el")
    var row=table.insertRow(0)
    var cell1=row.insertCell(0)
    var cell2=row.insertCell(1);
    cell1.innerHTML="Value "+ rowCnt
    cell2.innerHTML=count
    count=0
    incrementEl.innerText=0
    rowCnt+=1
}
function deletingValue(){
    var x=document.getElementById("saved-el").rows[0].cells[1].innerHTML
    total-=x
    ttl.textContent=total
    document.getElementById("saved-el").deleteRow(0);
}