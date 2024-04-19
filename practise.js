main();
async function addItem (item){
  await addDelay();
  let div=document.createElement('div')
  div.innerHTML=item;
  document.body.append(div)
}

function addDelay(){
  return new Promise((resolve,reject)=>{
   const delay=1+7*Math.random();
   setTimeout(()=>{
    resolve()
   },delay*1000)
  }
  )}
 async function main(){
setInterval(()=>{
  const last=document.body.lastChild;
  if(last.innerHTML.endsWith("...")){
last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
  }
  else{
    last.innerHTML=last.innerHTML+"."
  }
},700)
  
  let text= ["Initializing Hacking",
  "Your system has been corroupted",
  "Your data is fetching",
  "Some virus is interupting your system"]
  for(const item of text){
    addItem(item);
  }
 }



