function clickbutton(target){
  let result = document.getElementById("display")
  
  let target_value = target.innerHTML;

if (target_value == "ac" ){
  result.innerHTML = "0"}
  else if  (target_value == "=" ){
  result.innerHTML = eval(result.innerHTML)}
  else {
    if (result.innerHTML == "0"){
      result.innerHTML = target_value
    }
  else  result.innerHTML = result.innerHTML + target_value
  }
}