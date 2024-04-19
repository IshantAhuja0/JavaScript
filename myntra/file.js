let bagItems;
onLoad();
function onLoad(){
  let bagItemStr=localStorage.getItem('bagItems');
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayitems();
  displayBag();
}
function addToBag(itemID){
  bagItems.push(itemID);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBag();
}
function displayBag(){
  let bag=document.querySelector('.addToBag');
  if(bagItems.length===0){
    bag.style.visibility='hidden';
  }
  else{
    bag.style.visibility='visible';
  }
  bag.innerText=bagItems.length
}
function displayitems(){
let item_container=document.querySelector('.item_container');
let innerHTML=''
item.forEach(item=>{
  innerHTML+=`<div class="item">
  <img class="item_photo" src="${item.item_photo}" alt="Image">
  <div class="rating">
      ${item.rating.stars}⭐ | ${item.rating.noOfReview}
  </div>
  <div class="brand">
    ${item.brand}
  </div>
  <div class="item_name">
     ${item.item_name}
  </div>
  <div class="price">
      <span class="o_price"> Rs${item.price.o_price } </span>
      <span class="d_price"> Rs${item.price.d_price } </span>
      <span class="off"> (${item.price.off} %)</span>
  </div>
  <button class="add" onclick="addToBag(${item.id});">Add to Bag</button>
  </div>`});
item_container.innerHTML= innerHTML;
}