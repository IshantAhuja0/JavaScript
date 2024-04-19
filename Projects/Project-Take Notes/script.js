const add_btn=document.querySelector(".add");
const main=document.querySelector(".main");

const addNotes=function(text=''){
  const note=document.createElement("div");
  note.classList.add("box");
  note.innerHTML=`<div class="action">
  <span id="delete" class="material-symbols-outlined">delete</span>
  <span id="save" class="material-symbols-outlined">save</span>
</div>
<textarea id="txt_area">${text}</textarea>`;
note.querySelector('#delete').addEventListener("click",function(){
  note.remove();
  saveNote();
})
note.querySelector('#save').addEventListener("click",function(){
    saveNote();
})
main.appendChild(note);
saveNote();
}

function onLoad(){
  const LSnotes=JSON.parse(localStorage.getItem("notes"))
  if(LSnotes===null){
addNotes();
  }
  else{
    LSnotes.forEach((LSnote)=>{
      addNotes(LSnote);
      })
  }
}
onLoad();
add_btn.addEventListener("click",function(){
  addNotes();
})
 function saveNote(){
  const notes=document.querySelectorAll('.box textarea');
  const data=[];
  notes.forEach(function(note){
    data.push(note.value);
  })
 if(data.length===0){
  localStorage.removeItem("notes");
 }
else{
  (localStorage.setItem("notes",JSON.stringify(data)))
}
}
