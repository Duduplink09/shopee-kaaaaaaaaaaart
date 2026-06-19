//which actions my cart can do

async function addItem(userCart, item){
    userCart.push(item);
}

//delete item
async function deletItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1)
        userCart.splice(index, 1);
}
//remove item
async function removeItem(userCart, index){
    const indexFound = userCart.findindex((p) => p.name === item.name);
    if(indexFound == -1){
        console.log("item not found");
        return;
    }

    //-1 item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }

    //1 delete the item

    if(userCart[indexFound].quantity ==1){}
    userCart.splice(indexFound, 1);
    return;

    if(index >= 0 && index < userCart.length)
        userCart.splice(index, 1);
}

async function displaycart(userCart){
    console.log("shopee cart list:" function(item: any, index: any):
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name}`);
    });
}
    

//calculate total
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export {
    addItem, calculateTotal, deletItem, removeItem};