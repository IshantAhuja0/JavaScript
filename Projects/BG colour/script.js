const boxex=document.querySelectorAll('.boxex');
const body=document.querySelector('body');
boxex.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    // console.log(event)
    // console.log(event.target)
    if(e.target.id==='green'){  
      body.style.backgroundColor=e.target.id;
    }
     if(e.target.id==='red'){  
      body.style.backgroundColor=e.target.id;
    }
     if(e.target.id==='blue'){  
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){  
      body.style.backgroundColor=e.target.id;
    }
  })
})