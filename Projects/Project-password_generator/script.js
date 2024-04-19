const upperSet="QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerSet="qwertyuioplkjhgfdsazxcvbnm";
const numberSet="1234567890";
const symbolSet="`!@#$%^&*()_";
const pass_length=document.getElementById("length_input");
const lowercase=document.getElementById("lowercase_input");
const numbers=document.getElementById("numbers_input");
const symbols=document.getElementById("symbols_input");
const uppercase=document.getElementById("uppercase_input");
const show_pass=document.getElementById("test");
const generate=document.getElementById("generate")

const getRandom=function(dataset){
  return dataset[Math.floor(Math.random()*dataset.length)]
}
function getPassword(password=""){
if(uppercase.checked){
  password+=getRandom(upperSet)
}
if(lowercase.checked){
  password+=getRandom(lowerSet)
}
if(numbers.checked){
  password+=getRandom(numberSet)
}
if(symbols.checked){
  password+=getRandom(symbolSet)
}
if(password.length < pass_length.value){
 return getPassword(password);
}
show_pass.innerHTML=(trimString(password,pass_length.value))
}
generate.addEventListener("click",function(){
  getPassword();
})
function trimString(str,num){
if(str.length>num){
  let subStr=str.substring(0,num);
  return subStr;
}
else{
  return str
}
}