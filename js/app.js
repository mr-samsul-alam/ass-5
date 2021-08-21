
//All button are Called Here
const memoryButtonOne = document.getElementById('memoryOne');
const memoryButtonTwo = document.getElementById('memoryTwo');
const storageButtonOne = document.getElementById('storageOne');
const storageButtonTwo = document.getElementById('storageTwo');
const storageButtonThree = document.getElementById('storageThree');

const deliveryButtonOne = document.getElementById('deliveryOne');
const deliveryButtonTwo = document.getElementById('deliveryTwo');

const bestPrice = document.getElementById('bestPrice');
const extraMemoryPrice = document.getElementById('extraMemoryPrice');
const extraStoragePrice = document.getElementById('extraStoragePrice');
const  deliveryPrice = document.getElementById('deliveryPrice');
const totalPrice = document.getElementById('totalPrice');

 //All button are Working here

 //Extra memeoray 
memoryButtonOne.addEventListener('click',function(){
    extraMemorysPrice(0)
    total ()
})
memoryButtonTwo.addEventListener('click',function(){
    extraMemorysPrice(180)
    total ()
})

storageButtonOne.addEventListener('click',function(){
    extraStoragesPrice(0);
    total ()
})
storageButtonTwo.addEventListener('click',function(){
    extraStoragesPrice(100);
    total ()
})
storageButtonThree.addEventListener('click',function(){
    extraStoragesPrice(180);   
    total ()
})

deliveryButtonOne.addEventListener('click',function(){

 deliveryPriceExtra (0);
    total ()
})
deliveryButtonTwo.addEventListener('click',function(){
    deliveryPriceExtra (20);
    total ()
  
})

//Extra cost Fot Extra Memory 
function extraMemorysPrice(extra){
    extraMemoryPrice.innerText = Number(extra);
}
//Extra Cost For ExtraStorage 
function extraStoragesPrice(extra){
    extraStoragePrice.innerText = Number(extra);
}

//Extra cost For delivery Price
function deliverysPriceExtra (extra){
    deliveryPrice.innerText = Number(extra);

}


//functional sum are done here

function total () {
    const bestPriceUpdated = Number(bestPrice.innerText);
    const memoryPriceUpdated =  Number(extraMemoryPrice.innerText);
    const storagePriceUpdated = Number(extraStoragePrice.innerText);
    const deliveryPriceUpdated = Number(deliveryPrice.innerText);
    const totalPriceUpdated = bestPriceUpdated + memoryPriceUpdated + storagePriceUpdated + deliveryPriceUpdated;
    totalPrice.innerText = totalPriceUpdated;
    discountTotal.innerText = totalPriceUpdated;
    

}

const discountTotal = document.getElementById('discountTotal');

///discount part
const applyButton = document.getElementById('applyButton');
applyButton.addEventListener('click',function(){
     const applyInput = document.getElementById('applyInput')
     const applyInputText = applyInput.value;
      total();
    if(applyInputText == 'stevekaku'){
        const totalPriceUpdated = totalPrice.innerText ;
        const discountPrice = totalPriceUpdated - totalPriceUpdated * 0.2;
        discountTotal.innerText = discountPrice;
    }
    else{
        const errorMessage = document.getElementById("error-message")
        errorMessage.style.display = "block"
        const totalPriceUpdated = totalPrice.innerText ;
        discountTotal.innerText = totalPriceUpdated;
    }
  
})

















 
 