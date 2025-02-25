document.addEventListener("DOMContentLoaded", async function() {
    const products = [
        { title: "Product 1", price: "$10", image: "assets/images/product1.jpg" },
        { title: "Product 2", price: "$15", image: "assets/images/product2.jpg" },
        { title: "Product 3", price: "$20", image: "assets/images/product3.jpg" },
        { title: "Product 4", price: "$25", image: "assets/images/product4.jpg" },
        { title: "Product 5", price: "$30", image: "assets/images/product5.jpg" },
        { title: "Product 6", price: "$35", image: "assets/images/product6.jpg" },
        { title: "Product 7", price: "$40", image: "assets/images/product7.jpg" },
        { title: "Product 8", price: "$45", image: "assets/images/product8.jpg" },
        { title: "Product 9", price: "$50", image: "assets/images/product9.jpg" },
        { title: "Product 10", price: "$55", image: "assets/images/product10.jpg" },
        { title: "Product 11", price: "$60", image: "assets/images/product11.jpg" },
        { title: "Product 12", price: "$65", image: "assets/images/product12.jpg" },
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Price: ${product.price}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>`;
        productList.innerHTML += productCard;
    });
});
