const form=document.querySelector('form');
form.addEventListener('submit',function(event){
  event.preventDefault();
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('.result')
  const bmi= (weight/((height*height)/10000)).toFixed(2);
  let status;
  {
  if(bmi<18){
    status='You Are Under-weight';
  }
  else if(bmi>18 && bmi<24){
    status='You Are Fit';
  }
  else{
    status='You are Over-weight';
  }
}
{
  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML='Not a Valid Value';
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML='Not a Valid Value';
  }
  else{
   result.innerHTML=`Your B.M.I. is : ${bmi} , ${status}`;
  }}

});
