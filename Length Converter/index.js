let input=document.getElementById("enterValue");
let result=document.getElementById("result");
let inputType=document.getElementById("inputUnit");
let outputType=document.getElementById("outputUnit");

//event listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
outputType.addEventListener("change",myResult);

var inputTypeValue=inputType.value;
var outputTypeValue=outputType.value;

function cleared(){
    input.value=0;
    result.value=0;
}

function myResult(){
    inputTypeValue=inputType.value;
    outputTypeValue=outputType.value;
//meter to other conversion
    if(inputTypeValue==="meter" && outputTypeValue==="centimeter"){
        result.value=Number(input.value)*100;
    }else if(inputTypeValue==="meter" && outputTypeValue==="kilometer"){
        result.value=Number(input.value)*0.001;
    }else if(inputTypeValue==="meter" && outputTypeValue==="inches"){
        result.value=Number(input.value)*39.37008;
    }else if(inputTypeValue==="meter" && outputTypeValue==="yards"){
        result.value=Number(input.value)*1.093613;
    }else if(inputTypeValue==="meter" && outputTypeValue==="miles"){
        result.value=Number(input.value)*0.000621;
    }
//centimeter to other conversion
    else if(inputTypeValue==="centimeter" && outputTypeValue==="meter"){
        result.value=Number(input.value)*0.01;
    }else if(inputTypeValue==="centimeter" && outputTypeValue==="kilometer"){
        result.value=Number(input.value)*0.00001;
    }else if(inputTypeValue==="centimeter" && outputTypeValue==="inches"){
        result.value=Number(input.value)*0.393701;
    }else if(inputTypeValue==="centimeter" && outputTypeValue==="yards"){
        result.value=Number(input.value)*0.010936;
    }else if(inputTypeValue==="centimeter" && outputTypeValue==="miles"){
        result.value=Number(input.value)*0.000006;
    }
// //kilometer to other conversion
    else if(inputTypeValue==="kilometer" && outputTypeValue==="meter"){
        result.value=Number(input.value)*1000;
    }else if(inputTypeValue==="kilometer" && outputTypeValue==="centimeter"){
        result.value=Number(input.value)*100000;
    }else if(inputTypeValue==="kilometer" && outputTypeValue==="inches"){
        result.value=Number(input.value)*39370.08;
    }else if(inputTypeValue==="kilometer" && outputTypeValue==="yards"){
        result.value=Number(input.value)*1093.613;
    }else if(inputTypeValue==="kilometer" && outputTypeValue==="miles"){
        result.value=Number(input.value)*0.621371;
    }
//  inches to other conversion
    else if(inputTypeValue==="inches" && outputTypeValue==="centimeter"){
        result.value=Number(input.value)*2.54;
    }else if(inputTypeValue==="inches" && outputTypeValue==="kilometer"){
        result.value=Number(input.value)*0.000025;
    }else if(inputTypeValue==="inches" && outputTypeValue==="meter"){
        result.value=Number(input.value)*0.0254;
    }else if(inputTypeValue==="inches" && outputTypeValue==="yards"){
        result.value=Number(input.value)*0.027778;
    }else if(inputTypeValue==="inches" && outputTypeValue==="miles"){
        result.value=Number(input.value)*0.000016;
    }
//yards to  other conversion
    else if(inputTypeValue==="yards" && outputTypeValue==="centimeter"){
        result.value=Number(input.value)*91.44;
    }else if(inputTypeValue==="yards" && outputTypeValue==="kilometer"){
        result.value=Number(input.value)*0.000914;
    }else if(inputTypeValue==="yards" && outputTypeValue==="inches"){
        result.value=Number(input.value)*36;
    }else if(inputTypeValue==="yards" && outputTypeValue==="meter"){
        result.value=Number(input.value)*0.9144;
    }else if(inputTypeValue==="yards" && outputTypeValue==="miles"){
        result.value=Number(input.value)*0.000568;
    }

//miles to other conversion
    else if(inputTypeValue==="miles" && outputTypeValue==="centimeter"){
        result.value=Number(input.value)*160934.4;
    }else if(inputTypeValue==="miles" && outputTypeValue==="kilometer"){
        result.value=Number(input.value)*1.609344;
    }else if(inputTypeValue==="miles" && outputTypeValue==="inches"){
        result.value=Number(input.value)*63360;
    }else if(inputTypeValue==="miles" && outputTypeValue==="yards"){
        result.value=Number(input.value)*1760;
    }else if(inputTypeValue==="miles" && outputTypeValue==="meter"){
        result.value=Number(input.value)*1609.344;
    }
    else{
        result.value=input.value;
    }
}

