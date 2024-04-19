console.log('start');
async function main(){
  let ans= await fetch("http://127.0.0.1:5500/spotify/music/");
  let response = await ans.text(); 
  console.log(response);
  let div=document.createElement('div');

  div.innerHTML=response;
  let wrapper=div.querySelector('#wrapper')
  let ul =wrapper.querySelector('ul')
  console.log(ul)
  let li=ul.querySelectorAll('li')
  console.log(li)
  let inf=li.innerHTML
  // for (let index = 0; index < li.length; index++) {
  //   const element = li[index];
  //   if(li.innerHTML.a.href.endsWith(".mp3")){
  //     console.log('yes')
  //   }
  //   else{
  //     console.log("nno")
  //   }
  // }



}
main();
