let result=document.getElementById("result")
function dis(val){
    result.value+=val
}
function solve(){
    let ans=eval(result.value)
    result.value=ans
}
function clr(){
    result.value=""
}

