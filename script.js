document.addEventListener("DOMContentLoaded", function () {
    // Add your ad content dynamically
    var adsContainer = document.getElementById("ads-container");
    adsContainer.innerHTML = "<p>Check out our latest deals on pet supplies!</p>";
});
function addToCart() {
    // Get product details
    var productName = document.querySelector('.product-name').innerText;
    var productPrice = document.querySelector('.product-price').innerText;

    // Create a new list item for the cart
    var cartItem = document.createElement('li');
    cartItem.innerText = productName + ' - ' + productPrice;

    // Append the item to the cart
    document.getElementById('cart-items').appendChild(cartItem);

    // Show the cart modal
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
    // Hide the cart modal
    document.getElementById('cart-modal').style.display = 'none';
}
function signIn() {
    // Add your sign-in logic here
    alert("Sign In clicked!");
}

function signUp() {
    // Add your sign-up logic here
    alert("Sign Up clicked!");
}
