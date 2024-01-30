async function getProducts(){
    
const request = await axios.get ("https://dummyjson.com/products");
const data =  await request.data;
const products = data.products;


const result = products.map(function(product){
return `
<h1 class="title">${product.title}</h1>
<img src =${product.thumbnail} class="img"/>
<h3 class="price"> price: ${product.price}</h3>
<a href="details.html?id=${product.id}" class="details">Read Details</a>

`
}).join('');

document.querySelector(".products").innerHTML=result;
}
getProducts();
