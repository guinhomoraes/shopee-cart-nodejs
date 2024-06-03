import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("Bem vindo ao Shopee Cart!");

//criando dois itens
const item1 = await createItem("Notebook", 3000, 2);
const item2 = await createItem("Pc Gamer", 6000, 1);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);

await cartService.calculateTotal(myCart);
