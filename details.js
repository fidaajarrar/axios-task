async function getdetails(){
    const urlParams = new URLSearchParams (window.location.search);
    const id =  urlParams.get('id');
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
const data = response.data;

const {title , description , price , discountPercentage , rating , stock , brand , category , thumbnail } = data;
document.querySelector(".detail").innerHTML= `
<h1>${title}</h1>
<p class="bold">${description}</p>
<img src="${thumbnail}" class="img"/>
<h3>Price: ${price}</h3>
<h3>DiscountPercentage: ${discountPercentage}</h3>
<h3>Rating: ${rating} </h3>
<h3>Stock: ${stock}</h3>
<h3>Brand: ${brand}</h3>
<h3>Category: ${category} </h3>


`;

}   
getdetails();
