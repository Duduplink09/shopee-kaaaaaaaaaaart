import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";


const myCart = [];
const myWhishList = [];


console.log("Welcome to the shopee cart!");
//creating the items oowowowo
const item1 = await createItem("fuscão lego cabuloso", 20.99, 1);
const item2 = await createItem("uno com escada gta XVI", 40.99, 3);

//added two items to the cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, 2);

//deleted two items from the cart
await cartService.deleteItem(myCart, item2);
await cartService.deleteItem(myCart, item1);

console.log("shopee cart TOTAL!")
await cartService.calculateTotal(myCart);
