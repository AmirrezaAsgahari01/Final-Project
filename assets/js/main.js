const product =[{
    id:1,
    img:'./assets/images/Product1.png',
    productName: 'MNG Gradient Cap',
    categorie:'Accessoires',
    price:343.99
},{
    id:2,
    img:'./assets/images/Product2.png',
    productName: 'MNG Scarf',
    categorie:'Accessoires',
    price:476.99
},{
    
},{
    id:3,
    img:'./assets/images/Product3.png',
    productName: 'Reversible Belt',
    categorie:'Accessoires',
    price:143.99
},{
    id:4,
    img:'./assets/images/Product4.png',
    productName: 'Star Trail Anker Boot',
    categorie:'shose',
    price:899.99
},{
    id:5,
    img:'./assets/images/Product5.png',
    productName: 'GO 14 MM',
    categorie:'Bags',
    price:1232.99
},{
    id:6,
    img:'./assets/images/Product6.png',
    ProductName: '100 ML Travel Case',
    categorie:'Perfumes',
    price:999.99
}]
const productContainer = document.getElementById('product-contianer');
product.map(item =>{
   const productCreator = document.createElement('div');
   productCreator.classList.add('card');
   productCreator.innerHTML = `
   <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
       data-mdb-ripple-color="light">
       <img src=${item.img}
           class="w-100" />
       <a href="#!">
           <div class="mask">
               <div class="d-flex justify-content-start align-items-end h-100">
                   <h5><span class="badge bg-primary ms-2">New</span></h5>
               </div>
           </div>
           <div class="hover-overlay">
               <div class="mask"></div>
           </div>
       </a>
   </div>
   <div class="card-body">
       <a href="" class="text-reset">
           <h5 class="card-title mb-3">${item.productName}</h5>
       </a>
       <a href="" class="text-reset">
           <p>${item.categorie}</p>
       </a>
       <h6 class="mb-3">${item.price}</h6>
   </div>
   <div class="card-body">
       <button type="button" class="btn btn-success">Add me</button>
     </div>
     <div class="card-footer">1 days ago</div>
</div>;
`
productContainer.appendChild(productCreator);
})
