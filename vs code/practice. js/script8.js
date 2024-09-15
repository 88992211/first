let products = [
    {
        name: "Chanel Coco Mademoiselle Eau de Parfum",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 1500,
        rating: 4.7,
        description: "A classic fragrance with notes of rose, jasmine, and patchouli.",
        price: 129.99
    },
    {
        name: "Nike Air Zoom Pegasus 38 Running Shoes",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 3000,
        rating: 4.9,
        description: "Versatile running shoes with responsive cushioning for a smooth ride.",
        price: 129.99
    },
    {
        name: "Apple Watch Series 7",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 4000,
        rating: 4.8,
        description: "Advanced smartwatch with health monitoring features and a vibrant display.",
        price: 399.99
    },
    {
        name: "Samsung QLED 4K Smart TV",
        image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 6000,
        rating: 4.7,
        description: "Immersive television experience with stunning picture quality and smart features.",
        price: 1499.99
    },
    {
        name: "Sony Alpha a7 III Mirrorless Camera",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 2500,
        rating: 4.9,
        description: "Professional-grade camera with high-resolution imaging and 4K video capabilities.",
        price: 1999.99
    },
    {
        name: "Bose QuietComfort 45 Noise-Canceling Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 1800,
        rating: 4.8,
        description: "Premium headphones with world-class noise cancellation and superior sound quality.",
        price: 329.99
    }
];

function print() {
    let container = "";
    products.forEach(function (value, index) {
        container += `
            <div class="w-full bg-white rounded-lg shadow-md p-6 transition transform hover:-translate-y-2">
                <div class="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover" src='${value.image}' alt="${value.name}">
                </div>
                <h1 class="mt-4 text-lg font-semibold text-gray-800">${value.name}</h1>
                    <div class="flex items-center gap-2 mt-2">
                    ${[...Array(5)].map((_, i) => `
                        <svg class="w-5 h-5 ${i < value.rating ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927C9.324 2.001 10.676 2.001 10.951 2.927l1.156 3.724a1 1 0 00.95.676h3.9c.967 0 1.372 1.24.588 1.81l-3.148 2.284a1 1 0 00-.364 1.118l1.2 3.785c.267.843-.69 1.54-1.44 1.118L10 13.347l-3.13 2.224c-.75.423-1.707-.275-1.44-1.118l1.2-3.785a1 1 0 00-.364-1.118L3.118 9.137c-.784-.57-.379-1.81.588-1.81h3.9a1 1 0 00.95-.676l1.156-3.724z"/>
                        </svg>
                        `).join('')}
                        <h2 class="mt-2 text-xl font-bold text-gray-600">${value.rating}</h2>
                </div>
                <h2 class="mt-2 text-gray-600">${value.description}</h2>
                <h3 class="mt-2 text-blue-500 font-bold">Price: Rs${value.price.toFixed(2)}</h3>
                <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold transition transform hover:bg-blue-600 hover:scale-105" onclick="addToCart('${value.name}')">Add to Cart</button>
            </div>
        `;
    });
    document.querySelector(".card").innerHTML = container;
}

function addToCart(productName) {
    const cartMessage = document.getElementById("cart-message");
    cartMessage.textContent = $(product);
    cartMessage.classList.remove("hidden");
    setTimeout(() => {
        cartMessage.classList.add("hidden");
    }, 3000);
}

print();

document.querySelector("select").addEventListener("change", function() {
    if (this.value === "popularity") {
        products.sort((a, b) => b.popularity - a.popularity);
    } else {
        products.sort((a, b) => b.rating - a.rating);
    }
    print();
});