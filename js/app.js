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

 
memoryButtonOne.addEventListener('click',function(){
    extraMemoryPrice.innerText = Number(0);
    total ()
})
memoryButtonTwo.addEventListener('click',function(){
    extraMemoryPrice.innerText = Number(180);
    total ()
})

storageButtonOne.addEventListener('click',function(){
    extraStoragePrice.innerText = Number(0);
    total ()
})
storageButtonTwo.addEventListener('click',function(){
    extraStoragePrice.innerText = Number(100);
    total ()
})
storageButtonThree.addEventListener('click',function(){
    extraStoragePrice.innerText = Number(180);
    total ()
})


deliveryButtonOne.addEventListener('click',function(){
    deliveryPrice.innerText = Number(0);
    total ()
})
deliveryButtonTwo.addEventListener('click',function(){
    deliveryPrice.innerText = Number(20);
    total ()
  
})

function total () {
    const bestPriceUpdated = Number(bestPrice.innerText);
    const memoryPriceUpdated =  Number(extraMemoryPrice.innerText);
    const storagePriceUpdated = Number(extraStoragePrice.innerText);
    const deliveryPriceUpdated = Number(deliveryPrice.innerText);
    const totalPriceUpdated = bestPriceUpdated + memoryPriceUpdated + storagePriceUpdated + deliveryPriceUpdated;
    totalPrice.innerText = totalPriceUpdated;

}

const discountTotal = document.getElementById('discountTotal');

///bonus section
const applyButton = document.getElementById('applyButton');
applyButton.addEventListener('click',function(){
     const applyInput = document.getElementById('applyInput')
     const applyInputText = applyInput.value;
      total();
    if(applyInputText == 'steveKaku'){
        const totalPriceUpdated = totalPrice.innerText ;
        const discountPrice = totalPriceUpdated - totalPriceUpdated * 0.2;
        discountTotal.innerText = discountPrice;
    }
  
})

















// totalPrice.innerText = Number(deliveryPrice.innerText) + Number(extraStoragePrice.innerText) + Number(extraMemoryPrice.innerText) + Number(bestPrice.innerText)

 