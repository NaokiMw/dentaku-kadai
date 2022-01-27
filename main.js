let result = document.getElementById("display");

function clickbutton(target){
  let target_value = target.innerHTML;
  let result = document.getElementById("display");
let result_text = $("#display").text();
  console.log(result_text);

if (target_value == "ac" ){
  result.innerHTML = "0"}
  else if  (target_value == "=" ){
  result.innerHTML = eval(result.innerHTML)}
else if((result.innerHTML == "0")&&(
  (target_value == "00") ||
  (target_value == "+") || 
  (target_value == "-") || 
  (target_value == "*") || 
  (target_value == "/") 
  )){
      result.innerHTML = "0";}
 else if((target_value == ".")&&(
   result.innerHTML == "0")){
   result.innerHTML = "0.";}
   
else if((
  (target_value == "+") ||
  (target_value == "-") ||
  (target_value == "*") ||
  (target_value == "/") ||
  (target_value == ".") 
  
  )
&&(
  (result.innerHTML.slice(-1) =="+") ||
  (result.innerHTML.slice(-1) =="-") ||
  (result.innerHTML.slice(-1) =="/") ||
  (result.innerHTML.slice(-1) =="*") ||
  (result.innerHTML.slice(-1) ==".") ||
  (result.innerHTML.slice(-1) =="00") 
)){
  return
;}   
  else {
    if (result.innerHTML == "0"){
      result.innerHTML = target_value;
    }

  else  result.innerHTML = result.innerHTML + target_value;
  }

}
//function ope(target){
  
 //if (result.slice(-1) === ("+")){
 // return;}else 
//result.value = result.value + target.value;
//}