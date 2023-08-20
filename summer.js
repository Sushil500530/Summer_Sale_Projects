
let totalPrice = 0 ;
function getElementBClickyId(event){
    const setElement = document.getElementById('show-details')
    const getElement = event.parentNode.childNodes[3].childNodes[3].innerText
    const createElement = document.createElement('p')
    const count = setElement.childElementCount ;
    createElement.innerText =`${count + 1}. ${getElement}` ;
    setElement.appendChild(createElement)
    const getPrice = event.parentNode.childNodes[3].childNodes[5].innerText.split(" ")[0]
    totalPrice = parseFloat(totalPrice) + parseFloat(getPrice)
    // console.log(totalPrice)
    document.getElementById('total').innerText = `${totalPrice} tk`
    const purchase = document.getElementById('btn-purchase') 
    if(totalPrice > 0){
       purchase.removeAttribute('disabled')
      }
      // console.log(totalPrice)
   return totalPrice ;
 }
document.getElementById('input-field').addEventListener('keyup', function(target){
    const textElement = target.target.value ;
   //  console.log(textElement)
    textElement.value = ''
    const apply = document.getElementById('btn-apply') ;
     if(textElement === "SELL200"){ 
        apply.removeAttribute('disabled') 
     }
     else{
        apply.setAttribute('disabled', true )
     }
   })
   document.getElementById('btn-apply').addEventListener('click',function(){
      // console.log('jellow ')
      if(totalPrice > 200){
         const countDiscount = document.getElementById('discount')
         const count = 20 / 100 * totalPrice ;
         const convertCount = parseFloat(count)
         const finalyDiscount = convertCount.toFixed(2)
       // console.log(convertCount)
        countDiscount.innerText = `${finalyDiscount} tk`
        const payPrice = document.getElementById('pay-total')
        const balance = totalPrice  - convertCount ;
        payPrice.innerText = `${balance} tk`
      // console.log(typeof totalPrice)
      }
   })
  document.getElementById('return').addEventListener('click',function(){
      window.location.href = "http://127.0.0.1:5500/index.html";
      setTimeout(function() {
      location.reload();
      }, 1000); 
  })





   
